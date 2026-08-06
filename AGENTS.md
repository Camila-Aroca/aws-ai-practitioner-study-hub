# Agent Notes

## Source Of Truth

`AWS_AI_Practitioner_Study_Guide.docx` and the integrated local activity data are the educational source of truth. Do not replace definitions, service distinctions, correct answers, or exam-trap notes with outside knowledge.

## Structure

- `index.html` is the single Study Hub entry point.
- `app.js` owns hash routing, dashboard/domain/activity rendering, shared progress, and the card engine.
- `data/study-hub.js` is the central registry. Navigation must be generated from it, not hard-coded elsewhere.
- `data/exams/domain1-exam-config.js` and `data/exams/domain1-question-bank.js` contain the simulated exam blueprint and questions.
- `data/domain1.js` preserves the previous Domain 1 Task 1.1/1.2 content.
- `data/legacy-activities.js` preserves extracted data from standalone HTML files.
- `legacy/` keeps original source activities for reference only.

## Activity Representation

Registered activities contain metadata plus `rounds`. Rounds may use the newer `destinations/cards` shape or the extracted legacy `concepts/items` shape. The engine normalizes both at runtime.

## Adding Activities

Add educational data first, then add one registry entry with stable `id`, domain, task statement, objective codes, order, source file, and activity metadata. Keep missing objectives out of the UI until an activity exists.

## Progress

Use the single `aif-c01-study-hub-progress` localStorage object. A round/activity is mastered only when all answers are correct without Reveal during that attempt.

## Validation

Run:

```sh
node validate-data.js
node validate-hub.js
node validate-exam.js
node --check app.js
```

Manually check dashboard, domain pages, hash navigation, previous/next controls, reset confirmation, click-to-place, drag placement, keyboard slot activation, reveal-not-mastered behavior, refresh persistence, and mobile layout.

## Accessibility

Maintain semantic buttons, visible focus states, Enter/Space activation for slots, click-to-place support for touch screens, sufficient contrast, reduced-motion support, and feedback that is not color-only.
