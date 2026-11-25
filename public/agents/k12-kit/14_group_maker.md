# Group Maker and Picker

Three classroom routines in one tool: pick a student at random, make fair groups, and arrange a seating chart. Works for any grade.

## What it does

* Random picker where everyone gets a turn before anyone goes twice
* Group maker that builds even, random groups and leaves out absent students
* Seating chart you can shuffle, with seat trading by selecting two seats
* A roster you can add to, edit, and mark absent

## Step 1: Build it in Canvas

```text
Build a classroom group tool in Canvas, as a single HTML file with the CSS and JavaScript included. It has four screens.

1. Pick a student: a big button picks a random student who is present. Nobody is picked twice until everyone has had a turn. Show who has gone.
2. Make groups: I choose the number of groups. Build random groups that are as even as possible, leaving out absent students. Add a button to copy the groups.
3. Seating chart: I choose rows and seats per row. Show the room with the front marked. A button shuffles seats. I can trade two seats by selecting one and then the other.
4. Roster: add, edit, and delete students, and mark a student absent for today.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. No outside services.
Start with a sample class of 24 invented students, using first names and last initials.
```

## Step 2: Set up the Sheet

Create a Google Sheet with these tabs. Row 1 is headers and the first column is `ID`.

* `Roster`: ID, Name, Absent
* `Seats`: Seat, StudentID

## Step 3: Connect it so changes are saved

```text
Convert this tool into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Roster, Seats. Row 1 of each tab is headers and the first column is ID.

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

* **Just for me:** keep the Sheet private. This is the normal setup.
* **With a co teacher or a substitute folder:** share the Sheet as Editor with that person only.
* **Never** share the roster Sheet with students or the whole school.

## Keep it safe

* A class roster is student information. Keep the Sheet restricted to the teacher of record and approved staff.
* Use first names and last initials on anything shown on the board.
* Do not paste a roster into a Gemini prompt. This tool never needs to send names to Gemini.
