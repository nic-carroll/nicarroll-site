# Team Dashboard with Section Level Editing

Build one interactive dashboard for a course team, grade level team, administrative team, or whole school team. Share it with Google Workspace sharing, and let each group edit only its own sections.

## What it looks like

One page with a card for each section:

1. Quick links
2. Weekly focus
3. Team tasks with checkboxes
4. Important dates
5. Meeting notes and action items
6. Ideas parking lot

Each person sees an Add box only on the sections they are allowed to edit. Everything else shows as view only.

## How the access works

* Each section is one tab in a Google Sheet.
* The Sheet owner protects each tab and chooses who may edit it.
* The dashboard runs as the person viewing it, so it follows those rules for every visitor.
* No one manages a separate list of permissions inside the tool. Sheets sharing is the only control.

## Step 1: Set up the Sheet

1. Create a Google Sheet named for the team, for example `Grade 9 Team Dashboard Data`.
2. Create six tabs: `Links`, `Focus`, `Tasks`, `Dates`, `Notes`, `Ideas`.
3. Add headers in row 1 of each tab:
   * Links: `Title`, `URL`
   * Focus: `Week Of`, `Focus`
   * Tasks: `Task`, `Owner`, `Due`, `Done`
   * Dates: `Date`, `Event`
   * Notes: `Date`, `Summary`, `Action Item`, `Owner`
   * Ideas: `Idea`, `Added By`
4. Add a few fake rows to each tab for building.

## Step 2: Build the dashboard in Canvas

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

Refine it in plain words until the team likes it.

## Step 3: Connect it to the Sheet with editing

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

Follow the deployment steps in `05_live_data_prompts.md`.

## Step 4: The owner sets who can edit what

1. Click Share on the Sheet.
   * People who only read the dashboard: **Viewer**.
   * People who add or change anything: **Editor**.
   * Use Google Groups where you can, for example a grade level team group.
2. Click the gear icon in the Share window and turn off **Editors can change permissions and share**.
3. For each tab: choose Data, then Protect sheets and ranges, then Add a sheet or range, then Sheet.
4. Pick the tab, click Set permissions, and choose **Restrict who can edit this range**, then **Custom**.
5. Check only the people or groups who should edit that tab. Click Done.
6. Repeat for all six tabs. A tab with no protection can be edited by every Editor.

## Example access plan

* **Links:** team lead edits. Everyone else views.
* **Focus:** team lead and administrators edit.
* **Tasks:** team lead and team members edit.
* **Dates:** team lead and administrators edit.
* **Notes:** team lead and team members edit.
* **Ideas:** everyone with Editor access edits.

## Step 5: Publish and test

1. Publish in Google Sites as a Full page embed. See `06_publish_and_share.md`.
2. Test as a team member: the Add box appears only on Tasks, Notes, and Ideas.
3. Test as a viewer: no Add boxes appear.
4. Test as someone the Sheet is not shared with: no data appears.

## Good to know

* Tab protection controls editing, not viewing. Anyone the Sheet is shared with can read every tab. Keep sensitive data in a separate Sheet.
* To change who can edit a section, the owner changes the tab's protection. No code changes are needed.
* A no code alternative for adding items: link a Google Form to a tab. Anyone with the Form can add a row without having edit access to the Sheet.
* This team dashboard is for team resources and planning. Do not store student records in it.
