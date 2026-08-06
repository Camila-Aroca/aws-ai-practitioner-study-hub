# Domain 1 Simulated Exam Question Audit

## Source Counts

- `Question bank.docx`: 132 question records extracted from text export. The export showed stems/options/question numbers, but did not expose answer-key text after `Reveal answer`.
- `AWS_AI_Practitioner_Study_Guide.docx`: 38 Domain 1 CYU questions imported from CYU 1.1 through CYU 1.7.
- Public external sources: 0 questions added.

## Retained Bank

- Final validated bank size: 60 questions.
- Master study guide CYU retained: 38.
- Question bank retained: 22.
- Final generated exam size: 60 questions.
- Final distribution matches `data/exams/domain1-exam-config.js`.

## Duplicate And Near-Duplicate Handling

The question bank contains many repeated concepts already represented by CYU items or by clearer question-bank scenarios. Duplicates and near duplicates were excluded rather than tagged for possible use.

- Retained CYU hierarchy questions over lighter AI/ML relationship duplicates where the CYU explanation was stronger.
- Retained CYU inference scenarios over near-duplicate batch/asynchronous/serverless items except where a question-bank item added a distinct SageMaker inference option.
- Retained CYU technique-selection mappings over duplicate supervised/unsupervised/classification/clustering drills except where a question-bank scenario filled the blueprint.
- Retained CYU service-selection questions where available; selected only question-bank service items that filled objective coverage.
- Excluded `Question #181` after validation because objective 1.2.3 was over capacity and the binary-classification concept was already represented.
- Excluded `Question #16` after validation because objective 1.3.4 was over capacity and the registry/versioning topic was less central than the retained stage/service mappings.

## Corrections

- `Question #6`: wording adjusted from "wants near real-time latency" to "does not need a synchronous response" because the original stem conflicted with the correct asynchronous-inference reasoning for 1 GB payloads and hour-long processing.
- `Question #352`: answer option corrected to `Amazon Bedrock` for multi-provider foundation model access. The original exported options did not include the best answer supported by the study guide.
- Matching and ordering CYU items were converted into multiple-choice questions while preserving the tested reasoning.

## Exclusions

- 110 extracted question-bank records were not included in the validated bank because the 60-question blueprint was already satisfied after importing all CYU items and selecting the strongest non-duplicative question-bank scenarios.
- Exclusions favored removing repetitive definition-only items, unsupported/out-of-scope items, ambiguous items, and items whose main value was already covered by a clearer CYU question.
- No public-practice questions were added because supplied sources provided enough validated coverage.

## Final Validated Questions By Objective

| Objective | Count |
| --- | ---: |
| 1.1.1 | 4 |
| 1.1.2 | 4 |
| 1.1.3 | 4 |
| 1.1.4 | 3 |
| 1.1.5 | 3 |
| 1.2.1 | 3 |
| 1.2.2 | 4 |
| 1.2.3 | 4 |
| 1.2.4 | 3 |
| 1.2.5 | 4 |
| 1.2.6 | 3 |
| 1.3.1 | 4 |
| 1.3.2 | 3 |
| 1.3.3 | 3 |
| 1.3.4 | 4 |
| 1.3.5 | 3 |
| 1.3.6 | 4 |

## Validation Commands

```sh
node validate-exam.js
node validate-hub.js
node --check app.js
```
