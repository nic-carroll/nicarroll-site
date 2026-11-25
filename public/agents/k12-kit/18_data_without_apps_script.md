# Save Your Data in Google Sheets, No Apps Script Needed

Every tool in this kit is a dashboard on top of a Google Sheet. The Sheet is the notebook where the data is kept. The dashboard is the easy way to see it and change it.

This file shows three ways to connect the two **without writing or installing any script**, plus how to link more Sheets later.

> **Read this first.** These steps were written from Google's own help pages. They have not yet been run start to finish in a school account. One person in your district should follow them once, fix anything that looks different on your screen, and then share them with staff.

## Step 0: Find your path

Ask your IT department one question: **"Which Google Workspace for Education edition do we have, and do I have an AI Pro license?"**

* **Path 1, every school, free:** build the dashboard inside Google Sheets. Works in every edition.
* **Path 2, Education Standard or Education Plus:** turn the Sheet into an app with AppSheet. No code. Adults only.
* **Path 3, Google AI Pro for Education:** ask Gemini to build a Sheets canvas. One prompt makes an app on top of your Sheet.

Not sure? Start with Path 1. It always works, and you can move up later without losing any data.

Apps Script is still an option when you need a fully custom page. It takes more setup, so a tech coach should do it once and share the result. Teachers should not have to.

## The one rule that makes everything easy

**One row is one thing. One column is one kind of information.**

1. Row 1 has the column names. Nothing above it.
2. Every row below is one student, one task, one ticket, or one lesson.
3. No blank rows in the middle.
4. No merged cells.

If your Sheet follows this rule, every path below works with it.

## Path 1: A dashboard inside Google Sheets

You will end with two tabs: one named `Data` where the information lives, and one named `Dashboard` that shows the totals, filters, and charts.

### Part A: Get the Sheet ready

1. Open Google Sheets and click **Blank spreadsheet**.
2. Click the name at the top left. Type a name, such as `Reading Groups`.
3. At the bottom, double click the tab named `Sheet1`. Type `Data`. Press Enter.
4. In row 1, type your column names, one per cell.
5. Type a few rows of pretend data. **You should see** a small table.

### Part B: Ask Gemini for the dashboard

1. Open the Gemini app in a new browser tab.
2. Copy this prompt. Change the parts in brackets. Paste it in and press Enter.

```text
I have a Google Sheet with a tab named Data. Row 1 has these column names: [list them in order].
I want a second tab named Dashboard that shows: [say what you want to see, such as how many students are in each group].

Give me the exact formulas to paste, one at a time.
For each one tell me: which cell to click, what to paste, and what I should see when it works.
Use only regular Google Sheets formulas. No Apps Script. No add ons.
Write the steps for someone who has never used a formula.
```

3. Go back to your Sheet. At the bottom left, click the **+** to add a tab. Name it `Dashboard`.
4. Follow Gemini's steps one at a time. After each one, check that you see what Gemini said you would see.
5. If a cell shows an error, copy the error word, go back to Gemini, and type: `Cell [B2] shows [the error]. What do I fix?`

### Part C: Add a chart

1. Click the `Data` tab.
2. Click any cell inside your table.
3. Click **Insert**, then **Chart**.
4. **You should see** a chart. To move it, cut it and paste it on the `Dashboard` tab.

### Part D: Add a filter people can click

1. Click the `Dashboard` tab and click your chart once.
2. Click **Data**, then **Add a slicer**.
3. In the panel on the right, pick the column to filter by, such as Grade.
4. **You should see** a filter button. Click it to show only some rows.

### Part E: Let people add data the easy way

Typing in the Sheet works. A form is easier and stops mistakes.

1. In your Sheet, click **Tools**, then **Create a new form**.
2. Add one question for each column.
3. Click **Send** and share the form link.
4. **You should see** a new tab with every answer. Point your dashboard formulas at that tab.

## Path 2: An app with AppSheet

AppSheet turns your Sheet into an app with buttons for add, edit, and delete. It comes with Education Standard and Education Plus. Google does not allow users under 18 to use it with school accounts.

1. Open your Sheet. Make sure it follows the one rule above.
2. Click **Extensions**, then **AppSheet**, then **Create an app**.
3. Wait about a minute. **You should see** a new tab open with a preview of your app on the right.
4. Click around the preview. Try adding a row. Check that the new row shows up in your Sheet.
5. To add another Sheet later: click **Data** on the left, then the **+** to add new data, then **Google Sheets**, then pick the Sheet.
6. To share: click the **Share** icon at the top right and add people by email.

If you do not see AppSheet under Extensions, your district has it turned off or your edition does not include it. Use Path 1.

## Path 3: A Sheets canvas with Gemini

A Sheets canvas is an app that Gemini builds right on top of your Sheet. People with edit access can add, change, and delete from the canvas. People with view access can only look. It needs a Google AI Pro for Education license, a computer, and English as your account language.

1. Open your Sheet on a computer.
2. Click the tab that holds your data. A canvas reads one tab.
3. Click **Insert**, then **Create a canvas**.
4. Type what you want. For example:

```text
Build a dashboard for this data. Show a count at the top for each [group]. Show every row as a card I can click to edit. Add a button to add a new row and a way to filter by [column].
```

5. Press Enter and wait. **You should see** your app.
6. Change one thing in the app. Click **View data** and check that the Sheet changed too.
7. To change the app, type another request, such as `Make the cards larger` or `Add a search box`.
8. To share, share the Sheet the normal way. The canvas uses the same sharing.

Two things to know:

* A canvas may not work if downloading, printing, and copying are turned off for the Sheet. Leave that setting on for Sheets that use a canvas.
* If you do not see **Create a canvas**, your license does not include it yet. Use Path 1 or Path 2.

## Link another Sheet (works on every path)

Use this when the information you need lives in a different Sheet, such as a roster from the office or the district's standards list. Your Sheet will show a live copy that updates by itself.

**You need:** at least view access to the other Sheet.

1. Open the **other** Sheet. Click in the address bar at the top of the browser. Copy the whole link.
2. Look at the bottom of that Sheet. Write down the exact name of the tab you want, such as `Roster`.
3. Open **your** Sheet.
4. At the bottom left, click the **+** to add a new tab. Name it after what it holds, such as `Roster`.
5. Click cell **A1** in the new tab.
6. Type this, with your link and tab name inside the quotes, then press Enter:

```text
=IMPORTRANGE("paste the link here", "Roster!A:Z")
```

7. **You should see** `#REF!` in the cell. **This is normal the first time.**
8. Click the cell once. A small box appears. Click **Allow access**.
9. **You should see** the other Sheet's data fill in. You are done.

Every tool in this kit has a **Data sources** panel. Paste the link there and it writes this formula for you.

### Do not type in a linked tab

The linked tab is a live copy. If you type in it, the copy breaks and shows an error. To change the data, change it in the original Sheet.

## Keep a list: the Sources tab

Add one tab named `Sources` to your main Sheet. It is the tool's memory of where its data comes from, so the next person can find everything.

Row 1: `Name`, `Link`, `Tab`, `What it feeds`, `How it is used`

Add a row each time you link a Sheet. For "How it is used" write either `Reads and saves` or `Reference, read only`.

## Which path fits each tool

* **Station Rotation Board, Weekly Lesson Planner, Class Agenda Board, Team Dashboard, My Classroom Hub:** any path. Path 3 gives the closest match to the examples.
* **Chromebook Repair Tracker, Flex Period Scheduling:** Path 1 with a Google Form for intake, or Path 2 for a full app.
* **Standards Mastery Tracker, Rubric Grader, Group Maker:** Path 1 is the safest because the data never leaves the Sheet. These hold student information, so follow your district's rules.
* **Classroom Quiz Show:** the game screen needs a custom page, so a tech coach sets it up once with Apps Script and shares it. Teachers only edit the question Sheet.

## If something does not work

* **I see `#REF!` and no Allow access button.** You do not have access to the other Sheet. Ask its owner to share it with you as Viewer.
* **I see `#ERROR!`.** A quote mark or comma is missing. Type the formula again exactly as shown, with straight quotes.
* **The linked tab is empty.** The tab name is spelled differently. Copy the tab name exactly, including capital letters and spaces.
* **My dashboard number is wrong.** There is a blank row or a merged cell in the data. Fix the data tab first.
* **I do not see a menu item named in these steps.** Your district has that feature turned off or your edition does not include it. Use Path 1 and tell IT what you were looking for.
