# Weekly Lesson Planner

A week at a glance planner by day and subject. Every lesson can carry a Georgia standard, and the tool writes a Gemini prompt that drafts the lesson plan.

## What it does

* A grid of subjects by weekday, with an open slot wherever nothing is planned
* Add, edit, move, and delete lessons, and mark them taught
* A count of lessons with no standard, and a list of standards covered this week
* A ready made Gemini prompt for any lesson

## Step 1: Build it in Canvas

```text
Build a weekly lesson planner in Canvas, as a single HTML file with the CSS and JavaScript included.

* Show a grid with weekdays across the top and subjects down the side.
* Each lesson has a topic, subject, day, standard code, activities, materials, and a taught or not taught status.
* Empty slots show a plus button that adds a lesson for that day and subject.
* Let me add, edit, and delete lessons and subjects.
* Show summary numbers: lessons planned, lessons taught, lessons with no standard, open slots.
* Show how many lessons this week cover each standard.
* For a lesson I select, build a prompt I can copy into Gemini that asks for a lesson plan with a learning target, opening, mini lesson, guided practice, independent practice, small group idea, exit ticket, and materials.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. No outside services.
Start with a sample week for Grade 3 with Reading, Math, Writing, and Science.
```

## Step 2: Set up the Sheet

Create a Google Sheet with these tabs. Row 1 is headers and the first column is `ID`.

* `Lessons`: ID, Week, Day, Subject, Topic, Standard, Activities, Materials, Taught
* `Standards`: Code, Wording (paste from SuitCASE)
* `Subjects`: ID, Name

## Step 3: Connect it so changes are saved

```text
Convert this tool into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Lessons, Standards, Subjects. Row 1 of each tab is headers and the first column is ID.

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

* **Just for me:** keep the Sheet private.
* **Grade level team:** share one Sheet as Editor with the team group so everyone plans together.
* **Administrators:** share as Viewer so they can see plans without changing them.

## Keep it safe

* Paste the official standard wording from SuitCASE into the prompt. Gemini plans much better with it.
* Read every plan Gemini writes and adjust it for your students.
* Do not put student names or student needs in a lesson prompt.
