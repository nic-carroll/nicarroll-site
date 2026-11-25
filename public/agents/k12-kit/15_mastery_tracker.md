# Standards Mastery Tracker

A color coded view of exit ticket scores by student and standard. It shows who needs reteaching, which standards the class has mastered, and writes a Gemini prompt for a reteach plan using counts only.

## What it does

* A grid of students by standards, colored by level: Beginning, Developing, Proficient, Distinguished
* Class average for each standard and for the whole class
* Reteach groups for any standard you select
* A Gemini prompt for a reteach plan that contains no student names
* Add, edit, and delete students, standards, and scores

## Step 1: Build it in Canvas

```text
Build a standards mastery tracker in Canvas, as a single HTML file with the CSS and JavaScript included.

* Show a grid with students down the side and standard codes across the top. Each cell is a score from 0 to 100.
* Color each cell by level: Beginning below 50, Developing 50 to 69, Proficient 70 to 89, Distinguished 90 and up. Show a legend. Show the number in every cell so color is never the only signal.
* Show the class average under each standard.
* Let me select a cell to change or clear the score.
* When I select a standard, list the students at each level as reteach groups.
* Build a prompt I can copy into Gemini that asks for a reteach plan. The prompt must include only the number of students at each level, never names or individual scores.
* Let me add, edit, and delete students and standards.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. No outside services.
Start with 24 invented students and six Grade 3 math standards, with invented scores for four of them.
```

## Step 2: Set up the Sheet

Create a Google Sheet with these tabs. Row 1 is headers and the first column is `ID`.

* `Students`: ID, Name
* `Standards`: Code, Wording (paste from SuitCASE)
* `Scores`: ID, StudentID, StandardCode, Score, Date

## Step 3: Connect it so changes are saved

```text
Convert this tool into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Students, Standards, Scores. Row 1 of each tab is headers and the first column is ID.

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
* **Co teacher, interventionist, or administrator:** share with named people only, after your data owner approves.
* **Never** share with students or families from this tool. Use the gradebook for that.

## Keep it safe

* This tool holds student records. Get approval from your data owner and district privacy lead before using real scores.
* Build and practice with invented students first.
* Never paste names or scores into Gemini. Use the built in prompt, which sends counts only.
* The gradebook in your student information system stays the official record.
