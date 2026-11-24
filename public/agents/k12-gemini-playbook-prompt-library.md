# Gemini Tool Builder Playbook: Prompt Library

> Part of the Gemini Tool Builder Playbook for K12 by Nic Carroll. For staff using Google Workspace for Education. Practical guidance, not legal advice. Your district privacy lead owns the final reading of FERPA and state law.

Copy a prompt, fill in the brackets, and paste it into Gemini. Run them in order with Canvas turned on. Use fake data until step 8 is done.

## 1. Plan before building

*Use at: Step 4*

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

## 2. Build the tool

*Use at: Step 4*

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

## 3. Refine in plain words

*Use at: Step 5*

```text
Keep everything as it is and make these changes only:
1. [change]
2. [change]
3. [change]
After the changes, tell me what you changed in two sentences.
```

## 4. Privacy check

*Use at: Step 5*

```text
Review this tool as a district data privacy officer.
List every place student or staff information is displayed, stored, or could be copied or exported.
For each one, suggest how to show less and still support this decision: [decision from your brief].
Then make the changes I approve.
```

## 5. Break it on purpose

*Use at: Step 5*

```text
Act as a tester. List ten ways a real user could confuse or break this tool, such as empty data, very long names, or every filter selected at once.
Fix the ones that matter and tell me which ones you fixed.
```

## 6. Connect to the live Sheet

*Use at: Step 6b*

```text
Convert this dashboard into a Google Apps Script web app that is attached to my Google Sheet.

Give me exactly two files:
1. Code.gs
2. Index.html

Requirements for Code.gs:
* A doGet function that serves Index.html.
* Allow the page to be embedded in Google Sites by setting the X Frame Options mode to ALLOWALL.
* A function named getRows that reads the tab named "[tab name]" from the active spreadsheet, uses row 1 as headers, and returns the rows as a list of objects.
* Read only. No function may write to the Sheet.

Requirements for Index.html:
* The same dashboard as now, with the built in sample data removed.
* On load, call getRows with google.script.run, show a loading message, then draw the dashboard.
* If the call fails, show this message: "You do not have access to this data. Contact [owner role]."

After the code, give me numbered beginner steps to add the files and deploy, with Execute as set to "User accessing the web app" and access limited to people in my school domain.
```

## 7. Fix an error

*Use at: Any step*

```text
I followed the steps and got this error:

[paste the exact message]

It happened at this step: [step]
Explain the cause in one sentence, then give me the fix as numbered steps. Change as little as possible.
```

## 8. Write the one page user guide

*Use at: Step 9*

```text
Write a one page guide for the people who will use this tool.
Include: what it is for, how to filter and search, what the colors mean, who owns the data, and who to contact for help: [name or role].
Plain language, short sentences, no technical terms.
```

## 9. Build a team dashboard

*Use at: Team example*

```text
Build a team dashboard in Canvas as a single HTML file with the CSS and JavaScript included.

Team: [course team, grade level team, administrators, or school team]

Sections, each in its own card:
1. Quick links
2. Weekly focus
3. Team tasks with checkboxes
4. Important dates
5. Meeting notes and action items
6. Ideas parking lot

Use the fake sample content below. Put an Add box at the bottom of each section.
Readable on a Chromebook, high contrast, keyboard friendly. No outside services.

[paste a few fake items for each section]
```

## 10. Let people edit only their sections

*Use at: Team example*

```text
Convert this team dashboard into a Google Apps Script web app attached to my Google Sheet.
The Sheet has one tab per section: Links, Focus, Tasks, Dates, Notes, Ideas. Row 1 of each tab is headers.

Code.gs requirements:
* doGet serves Index.html and allows embedding in Google Sites (X Frame Options mode ALLOWALL).
* getAll reads every tab and returns the rows grouped by section.
* addItem(section, values) appends one row to that section's tab. Only the six tab names above are allowed.
* canEdit returns, for each tab, whether the current user may edit it, based on the tab's protection settings.
* The code never changes sharing or protection.

Index.html requirements:
* Show the Add box only on sections where canEdit is true. Show a lock label on the others.
* If addItem fails, show: "You do not have edit access to this section."

Then give me numbered beginner steps to deploy with Execute as set to "User accessing the web app" and access limited to people in my school domain.
```

