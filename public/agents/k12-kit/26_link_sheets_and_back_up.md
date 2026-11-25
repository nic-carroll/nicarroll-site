# Link Sheets and Back Up

Every tool in this playbook uses a Google Sheet as its database. This file shows how to link another Sheet, how to choose which tabs to use, and how to back everything up.

> These steps have not been tested inside a school Google account yet. Run the ten checks in `19_test_before_you_share.md` before you share a tool.

## Part 1. Link a Sheet in three steps

This is the same in every tool.

1. **Paste the link.** Open the Sheet you want to link. Copy the address from the top of the browser. In the tool, click **Data and backup**, then **Link a Sheet**, and paste it.
2. **Check the name.** The tool shows the name of the Sheet it found. If it is the wrong Sheet, click **Change link**.
3. **Tick the tabs.** The tool lists every tab in that Sheet. Tick the ones this tool should use, then click **Save**.

### Why the example tools ask you to type the name and tabs

The example tools in the gallery are previews. They are not signed in to Google, so they cannot open your Sheet. They ask you to type the name and the tab names instead, or to try a sample Sheet. Your own copy fills these in by itself.

## Part 2. What makes step 2 and step 3 automatic

Reading a Sheet's name and its list of tabs takes a page that is signed in as you. There are three ways to get that. Pick the first one your school allows.

1. **AppSheet.** When you add a table, AppSheet opens a file picker, then lists the tabs for you to choose. Nothing to set up. Included with Education Standard and Education Plus.
2. **A custom page, set up once.** Your tool's page asks Google for the name and tabs. A tech coach adds the short function below one time, and every tool can reuse it. See `18_data_without_apps_script.md` for where it goes.
3. **Inside Google Sheets, with no setup at all.** A Sheet cannot list another Sheet's tabs by itself. So you type the tab name once, into the formula in Part 3.

The function for choice 2. It only reads the name and the tab names. It runs as the person using the page, so it can only open Sheets that person can already open.

```
function sheetInfo(url) {
  var ss = SpreadsheetApp.openByUrl(url);
  return {
    name: ss.getName(),
    tabs: ss.getSheets().map(function (s) { return s.getName(); })
  };
}
```

## Part 3. Pull a tab from another Sheet with one formula

Use this to bring a roster, a calendar, or a standards list into your tool's Sheet. It stays up to date by itself.

1. In your tool's Sheet, click the **+** at the bottom left to add a tab. Name it for what it holds, such as `Roster`.
2. Click cell **A1**.
3. Paste this, then change the two parts in capitals:

```
=IMPORTRANGE("LINK TO THE OTHER SHEET", "TAB NAME!A:Z")
```

4. Press **Enter**. You will see **#REF!** This is normal.
5. Click the cell, then click **Allow access**. The data appears.
6. On your `Sources` tab, add a row with the Sheet name, the link, the tab, and what it feeds.

If the tab name has a space in it, put single quotes around it, like this: `"'1st Period'!A:Z"`

The tool writes these formulas for you. After you link a reference Sheet, look under the Data sources table and click **Copy**.

### One roster for every tool

Keep one Sheet named `Class Roster` with one tab per class period. Link it into every tool with the steps above. When a student joins or leaves, you change one Sheet and every tool updates.

## Part 4. Back up your tool

The Google Sheet is the database. If the Sheet is safe, the tool is safe.

1. **Make a copy each grading period.** In the Sheet, click **File**, then **Make a copy**. Add the date to the name. Put it in a folder named `Backups`.
2. **Roll back a mistake.** Click **File**, then **Version history**, then **See version history**. Pick an earlier day and click **Restore this version**.
3. **Keep a copy outside Google.** Click **File**, then **Download**, then **Microsoft Excel**. Save it where your district allows.
4. **Protect the headings.** Select row 1, then click **Data**, then **Protect sheets and ranges**. This stops a heading from being changed by accident.

The example tools also have **Download a backup** and **Restore from a backup** buttons. Those save and load one file that holds everything in the tool.

## Part 5. When you leave or change schools

1. Move the Sheet into a shared drive, or make your team lead an owner.
2. Add the tool to the tool register described in `10_keep_tools_alive.md`.
