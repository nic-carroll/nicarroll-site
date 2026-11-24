# Gemini Tool Builder Playbook: The Nine Step Workflow

> Part of the Gemini Tool Builder Playbook for K12 by Nic Carroll. For staff using Google Workspace for Education. Practical guidance, not legal advice. Your district privacy lead owns the final reading of FERPA and state law.

Describe a school problem in plain words and Gemini builds the tool: a dashboard, a tracker, a scheduler. Everything stays inside the Google tools your district already has.

## Three Ground Rules

1. **Stay inside Workspace.** Gemini, Sheets, Forms, Sites, Apps Script. No APIs, no connectors, no personal accounts.
2. **Build with fake data.** Real records go in only after the tool works and sharing is set.
3. **The data owner decides.** Whoever owns the Sheet controls who sees the data, at every layer.

## The Steps

### Step 1: Define the problem

*Who uses it, and why.* Kit file: `01_tool_brief.md`

Write one sentence that names the user and the decision the tool supports. Fill in the tool brief before you open Gemini.

* Name the role, not a person
* List what the user needs to see first
* Write down what the tool must never show

### Step 2: Set up the Sheet

*One owner, clean rows.* Kit file: `02_data_sheet_setup.md`

The tool is only as good as the Sheet behind it. Ten minutes of cleanup here saves an hour later.

* One header row, one record per row
* One kind of information per column
* Name the data owner on an About tab

### Step 3: Make a practice copy

*Fake names only.* Kit file: `02_data_sheet_setup.md`

Copy the Sheet and replace real names and IDs with invented ones. Gemini needs your columns and a few sample rows, never real students.

* Keep the same columns and value types
* 10 to 30 rows is plenty
* Gemini can generate the fake rows for you

### Step 4: Prompt Gemini in Canvas

*Plan, then build.* Kit file: `04_build_prompts.md`

Open the Gemini app with your district account and turn on Canvas. Ask for a plan first, then ask for the build.

* Paste your tool brief and sample rows
* Approve the plan before any code is written
* Ask for one HTML file with no outside services

### Step 5: Test and refine

*Ask in plain words.* Kit file: `04_build_prompts.md`

Use the preview like a real user would. Ask for changes the way you would ask a colleague.

* "Add a filter for grade level"
* "Show full sessions in red"
* Run the privacy check and the break it test

### Step 6: Connect the data

*Snapshot or live.* Kit file: `05_live_data_prompts.md`

This step has the one choice that matters. Pick a path.

**6a. Snapshot.** The data is pasted inside the tool. It is fast to set up and does not update. Everyone who can open the tool sees all of it.

* Use for bell schedules, room lists, totals without names
* Do not use for student or staff records
* Skip to step 7

**6b. Live data.** Gemini converts the tool into an Apps Script web app attached to the Sheet. It reads the Sheet each time it opens and respects the Sheet's sharing.

* Deploy with Execute as: User accessing the web app
* Limit access to people in your district
* If Apps Script is turned off, talk to IT before going further

### Step 7: Publish in Google Sites

*Full page embed.* Kit file: `06_publish_and_share.md`

Add a Full page embed page in Google Sites and paste the web app address or the HTML. Staff reach the tool like any other district page.

* No install and no new login
* Publish as Restricted, never Public
* Add the page to a staff site people already use

### Step 8: Owner sets sharing and tests

*Sheet, tool, and page.* Kit file: `06_publish_and_share.md`

The data owner sets sharing on all three layers, then proves it works by testing with an account that should be blocked.

* Share the Sheet with named people or groups
* Open the page as an outsider and confirm no data shows
* If the test fails, fix sharing and test again

### Step 9: Launch and maintain

*Owner and review date.* Kit file: `06_publish_and_share.md`

Record the owner, a backup person, and a review date. Add the tool to the district tool register.

* Keep every file in a shared drive, never My Drive
* Save the final prompts and code in a Build Notes Doc
* Review the sharing list each semester

