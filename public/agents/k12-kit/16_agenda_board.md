# Class Agenda Board

A daily agenda for middle and high school teachers with several class periods. The teacher posts the learning target, do now, agenda, and homework once, copies it to other periods, and students open it from Google Classroom.

## What it does

* A tab for each class period and a day by day view
* Learning target, do now, agenda steps to check off as class moves along, and homework with a due date
* A list of upcoming tests, quizzes, and projects for each period
* Copy an agenda to another period that has the same course
* A teacher view for editing and a student view that is read only

## Step 1: Build it in Canvas

```text
Build a class agenda board for a middle or high school teacher in Canvas, as a single HTML file with the CSS and JavaScript included.

* I teach several class periods. Show a button for each period with its course name.
* For the selected period and day, show the learning target, a do now task, the agenda as a checklist, and the homework with its due date.
* Buttons move to the previous day, next day, and back to today.
* Let me add, edit, and delete the agenda for any day, and copy it to another period.
* Show a list of upcoming tests, quizzes, and projects for the selected period. Let me add, edit, and delete them.
* Let me add, edit, and delete class periods.
* Add a student view that hides every editing control.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. No outside services.
Start with five high school math periods, three of Algebra and two of Geometry, with sample agendas for today.
```

## Step 2: Set up the Sheet

Create a Google Sheet with these tabs. Row 1 is headers and the first column is `ID`.

* `Periods`: ID, Name, Course
* `Agendas`: ID, PeriodID, Date, Target, DoNow, Steps, Homework, Due
* `Upcoming`: ID, PeriodID, Date, Title, Type

## Step 3: Connect it so changes are saved

```text
Convert this tool into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Periods, Agendas, Upcoming. Row 1 of each tab is headers and the first column is ID.

Code.gs requirements:
* doGet serves Index.html and allows embedding in Google Sites (X Frame Options mode ALLOWALL).
* getAll returns every tab's rows as lists of objects.
* addItem, updateItem, and deleteItem change one row, found by its ID. Only the tab names above are allowed.
* canEdit returns true only if the current user can edit the Sheet.
* The student view is shown whenever canEdit is false.

Index.html requirements:
* Load everything with getAll on open and show a loading message.
* Show editing controls only when canEdit is true.
* If a save fails, show: "That change was not saved. Check your connection and try again."

Then give me numbered beginner steps to deploy with Execute as set to "User accessing the web app" and access limited to people in my school domain.
```

Follow the deployment steps in `05_live_data_prompts.md`, and keep the Sheet in a shared drive as described in `10_keep_tools_alive.md`.

## Step 4: Share it

* Share the Sheet as **Viewer** with each class group. You stay the Editor.
* Post the web app link once in each Google Classroom, in the Classwork tab.
* Students and families see the student view only.
* A course team can share one Sheet as Editors and post the same agenda for every section.

## Keep it safe

* The board holds class plans, not student records. Do not post names, grades, or accommodations.
* Absent students can catch up from it, so keep each day posted.
