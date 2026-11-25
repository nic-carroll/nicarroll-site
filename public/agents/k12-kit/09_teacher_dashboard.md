# Elementary Teacher Dashboard (My Classroom Hub)

A personal command center a teacher can fully edit: add, change, and delete anything on the page. This file has the prompts to build it in Gemini and connect it to the teacher's own Google Sheet so changes are saved.

## What it includes

1. **Home:** greeting, tasks left today, dates coming up, open action items
2. **Links:** bookmarks in groups, such as Every day, Planning, Team
3. **Weekly focus:** one card per subject
4. **To do:** a column for each weekday plus "Any day this week"
5. **Calendar:** a month view with stickers on important dates
6. **Meeting notes:** notes with action items you can check off
7. **Ideas:** a sticky note board

Every section has Add, Edit, and Delete. Delete always offers Undo.

## Step 1: Build it in Canvas

```text
Build a personal teacher dashboard for an elementary teacher in Canvas, as a single HTML file with the CSS and JavaScript included.

Sections, each on its own screen with a simple menu to switch between them:
1. Home: greeting with the teacher's name, tasks left today, dates coming up, open action items
2. Links: bookmarks in named groups
3. Weekly focus: one card per subject
4. To do: one column for each weekday plus "Any day this week", with checkboxes
5. Calendar: a month grid. Each date can hold events with a sticker picked from a small set
6. Meeting notes: date, title, type, notes, and a checklist of action items
7. Ideas: a sticky note board with a choice of note colors

Editing rules:
* Every item can be added, edited, and deleted from the page.
* Editing opens a small form with Save, Cancel, and Delete.
* After a delete, show an Undo message for a few seconds.
* Quick add boxes for tasks, action items, and ideas.

Style: friendly and calm for an elementary teacher, large touch targets, high contrast, works on a Chromebook and a phone. No outside services.
Fill it with realistic sample content for a Grade 3 teacher. Do not include any student names.
```

## Step 2: Set up the teacher's Sheet

Create a Google Sheet with these tabs. Row 1 is headers. The `ID` column lets the tool find the right row to change or delete.

* `Links`: ID, Title, URL, Group
* `Focus`: ID, Subject, Text
* `Todos`: ID, Text, Day, Done
* `Events`: ID, Date, Title, Sticker
* `Meetings`: ID, Date, Title, Type, Notes
* `Actions`: ID, MeetingID, Text, Done
* `Ideas`: ID, Text, Color

## Step 3: Connect it so edits are saved

```text
Convert this teacher dashboard into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Links, Focus, Todos, Events, Meetings, Actions, Ideas. Row 1 of each tab is headers and the first column is ID.

Code.gs requirements:
* doGet serves Index.html and allows embedding in Google Sites (X Frame Options mode ALLOWALL).
* getAll returns every tab's rows as lists of objects.
* addItem(tab, item) creates a unique ID, appends the row, and returns the new item.
* updateItem(tab, id, item) finds the row with that ID and updates it.
* deleteItem(tab, id) finds the row with that ID and deletes it.
* Only the seven tab names above are allowed. Use LockService so two saves cannot collide.

Index.html requirements:
* Load everything with getAll on open and show a loading message.
* Every add, edit, and delete calls the matching function, then updates the page.
* If a save fails, show: "That change was not saved. Check your connection and try again."

Then give me numbered beginner steps to deploy with Execute as set to "User accessing the web app" and access limited to people in my school domain.
```

Follow the deployment steps in `05_live_data_prompts.md`.

## Step 4: Share it the way you want

* **Just for me:** keep the Sheet private. Only you can open the dashboard and see data.
* **With a co teacher or paraprofessional:** share the Sheet as Editor. They can add, edit, and delete.
* **With a team that should only edit some sections:** protect tabs as shown in `08_team_dashboard.md`.
* **For someone to look only:** share the Sheet as Viewer. Their saves will fail, so the page works as view only.

## Keep it safe

* This dashboard is for the teacher's own planning. Do not put student names, grades, behavior notes, or parent contact details in it.
* Parent conference notes that name a student belong in the district's student information system, not here.

## Make copies for a whole school

1. Finish one dashboard and its Sheet.
2. Each teacher makes a copy of the Sheet (File, then Make a copy). The script comes with it.
3. Each teacher deploys their own copy with the same settings and owns their own data.
