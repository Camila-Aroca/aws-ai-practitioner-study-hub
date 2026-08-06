# AWS AI Practitioner Study Hub

Static personal study hub for **AIF-C01 interactive study activities**. It integrates the previous Domain 1 card app plus the standalone local HTML study games into one routed interface with dashboard, domain pages, activity pages, shared styling, and unified local progress.

## Open Locally

You can open `index.html` directly in a browser. For the most reliable hash-routing behavior, run a tiny local server:

```sh
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/index.html#/home`.

## Project Structure

- `index.html` - shared hub shell.
- `styles.css` - shared editorial/parchment visual system and activity components.
- `app.js` - hash router, dashboard/domain views, progress service, and shared card engine.
- `data/domain1.js` - Domain 1 Task 1.1 and 1.2 round content.
- `data/legacy-activities.js` - extracted round data from the migrated standalone HTML activities.
- `data/study-hub.js` - domain list and central activity registry.
- `legacy/` - original standalone HTML files retained as source references.
- `validate-data.js` - validates the original Domain 1 round data.
- `validate-hub.js` - validates hub registry integrity.

## Activity Registry

Activities are registered in `data/study-hub.js`. Each activity has an ID, domain, task statement, objective codes, title, activity type, estimated time, difficulty, source file, order, and rounds. The registry drives dashboard totals, domain pages, sidebar navigation, previous/next activity links, continue studying, and weak-area review.

## Progress

Progress is stored in `localStorage` under:

```text
aif-c01-study-hub-progress
```

The hub tracks last opened activity, round attempts, best score, most recent score, completion, mastery, reveal usage, and completion date. Old progress from `aif-c01-domain1-card-match-progress-v1` is migrated when available.

Use **Reset progress** in the top bar to clear local progress with confirmation.

## Adding Content

To add a new standalone activity, extract its educational data into a data file, register it in `data/study-hub.js`, and keep the original in `legacy/` with a manifest entry. Prefer reusing the shared card engine when the activity is matching, sorting, or ordering.

To add a new domain or objective, add the domain metadata if needed, then register activities with the relevant objective codes. Do not create empty pages for missing objectives.

## Validation

```sh
node validate-data.js
node validate-hub.js
node --check app.js
```
