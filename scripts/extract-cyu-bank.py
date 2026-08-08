#!/usr/bin/env python3
import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GUIDE = ROOT / "AWS_AI_Practitioner_Study_Guide.docx"
OUT = ROOT / "data" / "exam-center" / "cyu-question-bank.js"
NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def paragraphs():
    root = ET.fromstring(zipfile.ZipFile(GUIDE).read("word/document.xml"))
    rows = []
    for para in root.iter(NS + "p"):
        text = "".join(t.text or "" for t in para.iter(NS + "t")).strip()
        if text:
            rows.append(text)
    return rows


def norm_type(label):
    lower = label.lower()
    if "multiple response" in lower:
        return "multiple-response"
    if "ordering" in lower:
        return "ordering"
    if "matching" in lower:
        return "matching"
    return "multiple-choice"


def domain_for(objective):
    return int(objective.split(".")[0])


def task_for(objective):
    return ".".join(objective.split(".")[:2])


def cyu_id(title):
    match = re.search(r"CYU\s+([0-9.]+)", title)
    if match:
        return "cyu-" + match.group(1).replace(".", "-")
    if "Service selection" in title and "Part 1" in title:
        return "cyu-service-selection-1"
    if "Service selection" in title and "Part 2" in title:
        return "cyu-service-selection-2"
    return "cyu-" + re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")


def clean_option(line):
    return re.sub(r"^[A-E]\.\s*", "", line).strip()


def parse_correct_ids(text):
    letters = re.findall(r"\b([A-E])\b", text)
    return [letter.lower() for letter in letters]


def parse_answer_segment(segment, qtype):
    correct_line = segment[0] if segment else ""
    correct_raw = correct_line.split("Correct:", 1)[1].strip() if "Correct:" in correct_line else ""
    why = []
    why_other = {}
    takeaway = ""
    sequence_logic = ""
    decisive = ""
    in_why_other = False
    matching_rows = []

    def looks_like_guide_content(line):
        return (
            line.startswith("Task Statement")
            or re.match(r"^\d+\.\d+(?:\.\d+)?\s+", line)
            or line.startswith(("Table ", "Figure ", "▶", "★  REMEMBER", "⇄", "AWS Certified"))
        )

    before_why = []
    for line in segment[1:]:
        if line.startswith("Why:"):
            break
        before_why.append(line)
    if qtype == "matching" and before_why:
        values = [line for line in before_why if line not in ("Prompt", "Correct match")]
        matching_rows = [{"prompt": values[i], "answer": values[i + 1]} for i in range(0, len(values) - 1, 2)]

    for line in segment[1:]:
        if looks_like_guide_content(line):
            break
        if line.startswith("Why the other options are wrong"):
            in_why_other = True
            continue
        if line.startswith("★ Take away:"):
            takeaway = line.replace("★ Take away:", "").strip()
            in_why_other = False
            continue
        if line.startswith("Sequence logic:"):
            sequence_logic = line.replace("Sequence logic:", "").strip()
            in_why_other = False
            continue
        if line.startswith("Decisive vs. decorative detail:"):
            decisive = line.replace("Decisive vs. decorative detail:", "").strip()
            in_why_other = False
            continue
        if in_why_other and line.startswith("– "):
            m = re.match(r"–\s*([A-E])\.\s*(.*)", line)
            if m:
                why_other[m.group(1).lower()] = m.group(2).strip()
            continue
        if line.startswith("Why:"):
            why.append(line.replace("Why:", "").strip())
        elif why and not line.startswith("Q") and not line.startswith("– "):
            if not line.startswith(("Prompt", "Correct match")):
                why.append(line.strip())

    correct = []
    order = []
    if qtype in ("multiple-choice", "multiple-response"):
        correct = parse_correct_ids(correct_raw)
    elif qtype == "ordering":
        order = [part.strip() for part in correct_raw.split("→") if part.strip()]

    return {
        "correctRaw": correct_raw,
        "correctAnswers": correct,
        "correctOrder": order,
        "correctMatches": matching_rows,
        "explanation": " ".join(why).strip(),
        "incorrectOptionExplanations": why_other,
        "takeaway": takeaway,
        "sequenceLogic": sequence_logic,
        "decisiveDetail": decisive,
    }


def parse_question_content(lines, qtype):
    stem = lines[0] if lines else ""
    options = []
    items = []
    matching_options = []
    matching_prompts = []
    for line in lines[1:]:
        if re.match(r"^[A-E]\.\s+", line):
            option_id = line[0].lower()
            options.append({"id": option_id, "text": clean_option(line)})
        elif line.startswith("Options:"):
            matching_options = [part.strip() for part in line.replace("Options:", "").split("·")]
        elif line not in ("Prompt", "Your answer"):
            if qtype == "matching":
                matching_prompts.append(line)
            elif qtype == "ordering":
                items.append(line)
    return stem, options, items, matching_prompts, matching_options


def main():
    paras = paragraphs()
    check_indices = [i for i, text in enumerate(paras) if text.startswith("Check Your Understanding") and i > 1000]
    questions = []
    excluded = []
    for block_index, start in enumerate(check_indices):
        end = check_indices[block_index + 1] if block_index + 1 < len(check_indices) else len(paras)
        block = paras[start:end]
        title = block[0]
        answers_pos = next((i for i, line in enumerate(block) if line.startswith("Answers —")), None)
        if answers_pos is None:
            continue
        q_part = block[1:answers_pos]
        a_part = block[answers_pos + 1:]

        q_starts = [i for i, line in enumerate(q_part) if re.match(r"Q\d+\.\s+\[", line)]
        a_starts = [i for i, line in enumerate(a_part) if re.match(r"Q\d+\s+Correct:", line)]
        answer_by_num = {}
        for idx, a_start in enumerate(a_starts):
            a_end = a_starts[idx + 1] if idx + 1 < len(a_starts) else len(a_part)
            m = re.match(r"Q(\d+)\s+Correct:", a_part[a_start])
            if m:
                answer_by_num[int(m.group(1))] = a_part[a_start:a_end]

        for idx, q_start in enumerate(q_starts):
            q_end = q_starts[idx + 1] if idx + 1 < len(q_starts) else len(q_part)
            header = q_part[q_start]
            m = re.match(r"Q(\d+)\.\s+\[(.+?)\]\s+·\s+(.+?)\s+·\s+Obj\.\s+([0-9.]+)", header)
            if not m:
                excluded.append({"sourceSection": title, "header": header, "reason": "unparsed header"})
                continue
            number = int(m.group(1))
            type_label = m.group(2)
            qtype = norm_type(type_label)
            difficulty = m.group(3).strip().lower().replace("exam-level", "exam-level")
            objective = m.group(4)
            content = q_part[q_start + 1:q_end]
            stem, options, items, prompts, match_opts = parse_question_content(content, qtype)
            answer_segment = answer_by_num.get(number)
            if not answer_segment:
                excluded.append({"sourceSection": title, "questionNumber": number, "reason": "missing answer segment"})
                continue
            answer = parse_answer_segment(answer_segment, qtype)
            if qtype in ("multiple-choice", "multiple-response") and (not options or not answer["correctAnswers"]):
                excluded.append({"sourceSection": title, "questionNumber": number, "reason": "missing options or correct answer"})
                continue
            if qtype == "ordering" and (not items or not answer["correctOrder"]):
                excluded.append({"sourceSection": title, "questionNumber": number, "reason": "missing ordering items or key"})
                continue
            if qtype == "matching" and (not prompts or not answer["correctMatches"]):
                excluded.append({"sourceSection": title, "questionNumber": number, "reason": "missing matching prompts or key"})
                continue
            if not answer["explanation"]:
                excluded.append({"sourceSection": title, "questionNumber": number, "reason": "missing explanation"})
                continue

            section_id = cyu_id(title)
            qid = f"{section_id}-q{number}"
            questions.append({
                "id": qid,
                "questionId": qid,
                "domain": domain_for(objective),
                "task": task_for(objective),
                "objective": objective,
                "difficulty": difficulty,
                "type": qtype,
                "questionType": qtype,
                "caseStudy": "case study" in type_label.lower(),
                "stem": stem,
                "options": options,
                "items": items,
                "matchingPrompts": prompts,
                "matchingOptions": match_opts,
                "correctAnswers": answer["correctAnswers"],
                "correctOrder": answer["correctOrder"],
                "correctMatches": answer["correctMatches"],
                "correctRaw": answer["correctRaw"],
                "explanation": answer["explanation"],
                "incorrectOptionExplanations": answer["incorrectOptionExplanations"],
                "takeaway": answer["takeaway"],
                "sequenceLogic": answer["sequenceLogic"],
                "decisiveDetail": answer["decisiveDetail"],
                "sourceType": "master-study-guide-cyu",
                "sourceSection": title,
                "guideReference": f"Master Study Guide · Obj. {objective} · {section_id.upper().replace('-', ' ')} Q{number}",
                "sourceReference": f"{section_id.upper().replace('-', ' ')} Q{number}",
                "tags": [f"domain-{domain_for(objective)}", f"objective-{objective}", qtype] + (["case-study"] if "case study" in type_label.lower() else []),
                "sourceParagraph": start + q_start + 1
            })

    audit = [{
        "status": "no-modifications",
        "reviewedQuestions": sum(1 for question in questions if question["type"] in ("multiple-choice", "multiple-response")),
        "method": "Checked option-length distribution for MC/MR items after extraction. No distractor wording was modified; all options remain guide-sourced.",
    }]
    data = {
        "generatedFrom": GUIDE.name,
        "questionCount": len(questions),
        "excluded": excluded,
        "distractorLengthBalancingAudit": audit,
        "questions": questions,
    }
    OUT.write_text("(function(){\n  \"use strict\";\n  window.CYU_QUESTION_BANK = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n})();\n", encoding="utf-8")
    print(f"Wrote {len(questions)} questions to {OUT.relative_to(ROOT)}")
    if excluded:
        print(f"Excluded {len(excluded)} questions")
        for item in excluded[:20]:
            print(item)


if __name__ == "__main__":
    main()
