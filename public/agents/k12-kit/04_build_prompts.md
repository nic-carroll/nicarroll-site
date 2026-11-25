# Build Prompts

Run these in order in the Gemini app with Canvas turned on. Replace everything in brackets. Use fake data only.

## Prompt 1: Plan before building

```text
I work at a school and I want to build a small interactive web tool. Here is my tool brief:

[paste your completed tool brief]

Here are my column headers and sample rows. This is fake data.

[paste headers and 10 rows]

Do not build anything yet. First give me:
1. A plain language description of the page, top to bottom.
2. The summary numbers you would show at the top.
3. The filters and search you would include.
4. One chart that fits this data.
5. Any questions you need answered before building.
```

## Prompt 2: Build the tool

```text
Build it in Canvas as a single HTML file with the CSS and JavaScript included in the same file.

Requirements:
* Use the fake sample rows as built in data for now.
* Summary cards at the top for: [list].
* Filters for: [list]. Filters work together.
* A search box that searches: [fields].
* A sortable table of the filtered rows.
* One chart: [describe].
* Highlight rows where [condition] so they stand out.
* Readable on a Chromebook, high contrast, keyboard friendly.
* No outside services. No libraries that need an account or a key.
* Read only. The tool never changes data.
```

## Prompt 3: Refine in plain words

Use this as many times as needed.

```text
Keep everything as it is and make these changes only:
1. [change]
2. [change]
3. [change]
After the changes, tell me what you changed in two sentences.
```

Examples of changes that work well:

* "Add a filter for grade level."
* "Show open seats in red when a session has fewer than five."
* "Move the chart below the table."
* "Add a Reset Filters button."
* "Add a Print button that prints only the filtered table."

## Prompt 4: Accessibility and Chromebook check

```text
Review this tool for accessibility and small screens.
Check: color contrast, text size, keyboard navigation, labels on every control, and layout at 1366 by 768.
Fix what you find and list the fixes.
```

## Prompt 5: Privacy check

```text
Review this tool as a district data privacy officer.
List every place student or staff information is displayed, stored, or could be copied or exported.
For each one, suggest how to show less and still support this decision: [decision from your brief].
Then make the changes I approve.
```

## Prompt 6: Break it on purpose

```text
Act as a tester. List ten ways a real user could confuse or break this tool, such as empty data, very long names, or every filter selected at once.
Fix the ones that matter and tell me which ones you fixed.
```

## Prompt 7: Write the one page user guide

```text
Write a one page guide for the people who will use this tool.
Include: what it is for, how to filter and search, what the colors mean, who owns the data, and who to contact for help: [name or role].
Plain language, short sentences, no technical terms.
```

## If something goes wrong

```text
The tool is not working the way I expected.
What I did: [steps]
What I expected: [result]
What happened: [result or exact error message]
Find the cause and fix it. Change only what is needed.
```
