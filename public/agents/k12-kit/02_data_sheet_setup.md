# Data Sheet Setup

A tool is only as good as the Sheet behind it. Spend ten minutes here and the build goes smoothly.

## Structure rules

1. One header row, in row 1. No merged cells, no blank rows above it.
2. One record per row. One student in one session is one row.
3. One kind of information per column. Split "Smith, Jane 10th" into Last Name, First Name, Grade.
4. Short, plain headers with no symbols: `Student ID`, `Grade`, `Session`, `Teacher`, `Room`, `Seats`.
5. One tab per topic. Name the tab plainly, for example `Roster` or `Sessions`.
6. Consistent values. Pick `9` or `9th` or `Ninth` and use only that one.
7. Dates in real date format, not typed text.
8. No totals rows, notes, or colors that carry meaning inside the data range.

## Ownership

1. Store the Sheet in a shared drive if your district uses them, so it survives staff changes.
2. Put the owner's role in the file name: `Flex Scheduling Data (Owner: AP Curriculum)`.
3. Add a tab named `About` with the owner, backup person, purpose, and review date.

## Make a practice copy

1. File, then Make a copy. Name it with `PRACTICE` at the front.
2. Replace real names and IDs with fake ones. Keep the same columns and the same kinds of values.
3. Keep 10 to 30 rows. That is plenty for building.
4. Use only this practice copy until the tool works.

## Prompt: ask Gemini to check your structure

Paste your headers and five fake rows, then use this prompt.

```text
Here are the column headers and five sample rows (fake data) from a Google Sheet that will feed a school dashboard.

[paste headers and rows]

Review the structure. Tell me:
1. Any columns that mix two kinds of information and should be split.
2. Any values that are inconsistent.
3. Any columns the dashboard will probably need that are missing.
4. Any columns that look sensitive and should be left out of the tool.
Answer as a short numbered list. Do not rewrite my data.
```

## Prompt: generate fake practice data

```text
Create 20 rows of realistic but completely fake data for a Google Sheet with these headers:

[paste headers]

Rules: invented names only, IDs that start with 99, values that match these allowed options: [list options per column]. Give me the result as a table I can paste into Google Sheets.
```
