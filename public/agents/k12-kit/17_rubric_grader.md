# Rubric Grader

Score writing and projects against a rubric with one tap per criterion. The tool totals the score, shows which criterion the class struggles with, and writes a Gemini prompt for feedback that never includes the student name.

## What it does

* A roster showing who is scored, started, or not scored
* One row per criterion with four levels: Beginning, Developing, Proficient, Distinguished
* Automatic total and percent, with previous and next student buttons
* Class average by criterion, so you know what to reteach
* A feedback prompt for Gemini built from the scores and your notes
* Add, edit, and delete criteria and students

## Step 1: Build it in Canvas

```text
Build a rubric grading tool in Canvas, as a single HTML file with the CSS and JavaScript included.

* Show the list of students on the left with a status for each: fully scored with the total, started, or not scored.
* For the selected student, show each rubric criterion with four buttons: 1 Beginning, 2 Developing, 3 Proficient, 4 Distinguished. Selecting a button sets the score. Selecting it again clears it.
* Show the total points, the percent, and whether scoring is complete. Add previous and next student buttons.
* Add a box for my notes on each paper.
* Show the class average for each criterion and name the lowest one.
* Build a prompt I can copy into Gemini that asks for four sentences of feedback based on the scores and my notes. The prompt must never include the student's name.
* Let me add, edit, and delete criteria and students, and rename the assignment.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. No outside services.
Start with a Grade 8 argument essay rubric with five criteria and 24 invented students, some already scored.
```

## Step 2: Set up the Sheet

Create a Google Sheet with these tabs. Row 1 is headers and the first column is `ID`.

* `Rubric`: ID, Criterion, Description
* `Students`: ID, Name
* `Scores`: ID, StudentID, CriterionID, Score
* `Notes`: StudentID, Note

## Step 3: Connect it so changes are saved

```text
Convert this tool into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Rubric, Students, Scores, Notes. Row 1 of each tab is headers and the first column is ID.

Code.gs requirements:
* doGet serves Index.html and allows embedding in Google Sites (X Frame Options mode ALLOWALL).
* getAll returns every tab's rows as lists of objects.
* addItem, updateItem, and deleteItem change one row, found by its ID. Only the tab names above are allowed.
* canEdit returns true only if the current user can edit the Sheet.

Index.html requirements:
* Load everything with getAll on open and show a loading message.
* Show editing controls only when canEdit is true.
* If a save fails, show: "That change was not saved. Check your connection and try again."

Then give me numbered beginner steps to deploy with Execute as set to "User accessing the web app" and access limited to people in my school domain.
```

Follow the deployment steps in `05_live_data_prompts.md`, and keep the Sheet in a shared drive as described in `10_keep_tools_alive.md`.

## Step 4: Share it

* **Just for me:** keep the Sheet private. This is the default.
* **Course team:** share a copy of the Sheet with only the `Rubric` tab filled in, so every teacher scores with the same rubric in their own file.
* **Students:** return scores and feedback through Google Classroom or the gradebook, not through this tool.

## Keep it safe

* Scores are student records. Keep the Sheet restricted to the teacher of record.
* Do not paste student writing or names into Gemini unless your district allows it. The built in prompt uses scores and your notes only.
* Read and edit every piece of feedback before a student sees it.
