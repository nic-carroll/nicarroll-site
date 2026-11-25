# Station Rotation Board

A board for the projector that shows which group is at which station, counts down the time, and moves every group to its next station. Built for centers and small group blocks in any grade.

## What it does

* A large countdown timer with Start, Pause, Rotate now, and Reset
* One card per station showing the group there now and where that group goes next
* Add, edit, and delete stations and groups
* A projector view that hides the editing controls and enlarges everything

## Step 1: Build it in Canvas

```text
Build a station rotation board for my classroom in Canvas, as a single HTML file with the CSS and JavaScript included.

* Show a large countdown timer with Start, Pause, Rotate now, and Reset buttons, and a choice of minutes per rotation.
* Show one card per station with the station name, what students do there, the group that is there now, and where that group goes next.
* Each rotation, every group moves to the next station. If there are more groups than stations, the extra group takes a break.
* When the timer reaches zero, move the groups, reset the timer, and show a message.
* Let me add, edit, and delete stations and groups. Each group has a name and a color.
* Add a projector view that hides the editing controls and makes the text larger.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. No outside services.
Start with five literacy stations and five groups for Grade 3. Use group names, not student names.
```

## Step 2: Set up the Sheet

Create a Google Sheet with these tabs. Row 1 is headers and the first column is `ID`.

* `Stations`: ID, Name, Directions
* `Groups`: ID, Name, Color, Members

## Step 3: Connect it so changes are saved

```text
Convert this tool into a Google Apps Script web app attached to my Google Sheet.
The Sheet has these tabs: Stations, Groups. Row 1 of each tab is headers and the first column is ID.

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

* **Just for me:** keep the Sheet private and put the tool on the board.
* **With a co teacher or paraprofessional:** share the Sheet as Editor.
* **With students:** not needed. They read it from the board.

## Keep it safe

* Use group names. If you list members, use first names only.
* Do not label groups by reading level or ability on a screen students can see.
