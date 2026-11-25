# Saving, Sync, and Working Offline

Every tool saves in two steps, so work is never lost when the Sheet cannot be reached.

1. **On this device, right away.** Every change is kept in the browser the moment you make it.
2. **To your Google Sheet, when it can.** If the Sheet cannot be reached, the changes wait on the device and go up by themselves later.

> The saving and sync steps were tested against a stand in for Google, not inside a real school account. The script in Part 4 has not been run inside Google yet. Run the ten checks in `19_test_before_you_share.md` before you share a tool.

## Part 1. What the status label means

Look at the label near the top of the tool.

* **Saved to your Sheet.** Everything is in the linked Sheet.
* **Saving to your Sheet.** It is sending now.
* **Offline. 3 changes kept on this device.** You have no internet. Keep working. The changes go up when you are back online.
* **Sheet not reached. 3 changes safe on this device.** The Sheet was moved, deleted, or you lost access. Your work is safe on this device. See Part 3.
* **No Sheet linked.** The tool has nowhere to save yet. Link a Sheet using `26_link_sheets_and_back_up.md`.
* **Saved on this device.** This is an example tool that is not signed in to Google. It saves in this browser only.
* **Not saving on this device.** The page it sits on blocks saving. A red bar at the top tells you to download a backup before you leave.

## Part 2. Working offline

1. Open the tool while you have internet at least once.
2. Leave the tab open. If the internet drops, keep working.
3. The label changes to **Offline** and counts your changes.
4. When the internet comes back, the tool sends the changes by itself. You do not have to click anything.

Each tool is one file that loads nothing from the internet, which is why it keeps working with no connection.

### Make the Google Sheet itself work offline

This is a Google setting, and it works in the Chrome browser.

1. Open Google Drive.
2. Click the gear at the top right, then **Settings**.
3. Find **Offline** and tick the box.
4. Open the Sheet once while online so it is copied to the device.

Some districts turn this setting off. If you do not see it, ask your technology department.

## Part 3. The Sheet is gone or you need a new one

Your work is still on the device. Do this from the same device and browser.

1. In the tool, click **Data and backup**.
2. Click **Download a backup** first, to be safe.
3. Find the Sheet marked **Reads and saves** and click the pencil.
4. Click **Change link** and paste the link to the new Sheet.
5. Tick the tabs and click **Save**.

The tool sends everything to the new Sheet. The label changes to **Saved to your Sheet**.

### Opening the tool on a different device

1. Open the tool and link the same Sheet.
2. The tool loads the newest copy from the Sheet.

### Which copy wins

* If this device has changes that have not gone up yet, those changes win and are sent to the Sheet.
* If this device has nothing waiting, and the Sheet has a newer copy, the tool loads the copy from the Sheet.

This protects offline work. It also means two people editing the same tool at the same moment can overwrite each other. For tools that a team edits together, use a Google Form or type in the Sheet directly, as the tool guides describe.

## Part 4. The one time setup that makes sync work

A tech coach does this once. It is the same web app setup described in `18_data_without_apps_script.md`, with three functions added. The script runs as the person using the page, so it can only open Sheets that person can already open.

```
var DATA_TAB = 'App Data';

function sheetInfo(url) {
  var ss = SpreadsheetApp.openByUrl(url);
  return {
    name: ss.getName(),
    tabs: ss.getSheets().map(function (s) { return s.getName(); })
  };
}

function saveState(url, tool, json, stamp) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = dataTab_(url);
    var row = findRow_(sheet, tool) || sheet.getLastRow() + 1;
    var parts = json.match(/[\s\S]{1,40000}/g) || [''];
    var need = parts.length + 3;
    if (sheet.getMaxColumns() < need) {
      sheet.insertColumnsAfter(sheet.getMaxColumns(), need - sheet.getMaxColumns());
    }
    sheet.getRange(row, 1, 1, sheet.getMaxColumns()).clearContent();
    sheet.getRange(row, 1, 1, need).setNumberFormat('@');
    sheet.getRange(row, 1, 1, 3).setValues([[tool, String(stamp), new Date().toISOString()]]);
    sheet.getRange(row, 4, 1, parts.length).setValues([parts]);
    return { ok: true };
  } finally {
    lock.releaseLock();
  }
}

function loadState(url, tool) {
  var sheet = dataTab_(url);
  var row = findRow_(sheet, tool);
  if (!row) return null;
  var values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
  return { stamp: Number(values[1]), json: values.slice(3).join('') };
}

function dataTab_(url) {
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = ss.getSheetByName(DATA_TAB) || ss.insertSheet(DATA_TAB);
  if (sheet.getLastRow() === 0) sheet.appendRow(['Tool', 'Stamp', 'Saved at', 'Data']);
  return sheet;
}

function findRow_(sheet, tool) {
  var last = sheet.getLastRow();
  if (last < 2) return 0;
  var names = sheet.getRange(2, 1, last - 1, 1).getValues();
  for (var i = 0; i < names.length; i++) {
    if (names[i][0] === tool) return i + 2;
  }
  return 0;
}
```

### What this script saves

It saves each tool as one saved copy on a tab named `App Data`. That copy is what lets a tool sync, move to a new Sheet, or open on another device. It is not laid out as readable rows. The readable tabs, such as `Roster` or `Lessons`, are the ones you build by following each tool's own guide.

## Part 5. Three layers of backup

1. **The device.** Every change, right away.
2. **The Sheet.** The synced copy, plus Google's own version history.
3. **A file.** Click **Download a backup** in the tool at the end of each grading period.
