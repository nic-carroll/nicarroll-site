# Put a Tool on Google Sites

Any tool in this playbook is one file of code. A teacher can copy it and place it on a Google Site as a full page. No script, no install, and it works with the free edition of Google Workspace for Education.

> These steps were tested with the tools running inside a locked down frame, the same kind Google Sites uses. They have not been tested on a real Google Site yet. Run the short test in each part.

## The short version

* **Teachers: paste and go.** Three minutes. The tool works right away and remembers its data on that device.
* **Want it to save to Google Sheets? Your district turns that on once.** One person sets up one link. After that, every teacher just adds the link to their site. Teachers never open a script.

## Part 1. Paste and go

This is all a teacher needs to do.

1. Open the tool's `.html` file in a text editor such as Notepad or TextEdit.
2. Select everything and copy it.
3. In Google Sites, click **Pages**, hover over the plus button, and click **Full page embed**.
4. Name the page, then click **Add embed**, then **Embed code**.
5. Paste, click **Next**, then click **Insert**.
6. Click **Publish**.

### Check it worked

1. Open the published page. Look at the label near the top of the tool.
2. **Saved on this device** means it remembers your work in this browser.
3. A red bar that says **This page cannot save on this device** means Google Sites is blocking saving. The tool still runs. Use **Download a backup** before you leave, and ask about Part 2.
4. Change one thing, reload the page, and check the change is still there.

### What to know

* The data stays in the browser on that one device. A second computer or a phone starts fresh.
* Click **Data and backup**, then **Download a backup**, at the end of each week. That file can restore everything.
* A pasted tool is not signed in to Google, so it cannot open or write to your Google Sheets by itself. Part 2 adds that.

## Part 2. Save to Google Sheets, with nothing for teachers to set up

One person in the district does the setup in Part 3, one time per tool, and gets a link. Then each teacher does this:

1. Open the link once in a new browser tab. Click **Allow** when Google asks. This happens one time.
2. In Google Sites, click **Pages**, hover over the plus button, and click **Full page embed**.
3. Name the page, click **Add embed**, stay on the **By URL** tab, paste the link, and click **Insert**.
4. Click **Publish**.

That is all. Inside the tool, the teacher clicks **Data and backup**, then **Link a Sheet**, and picks **Search My Google Drive** or **Create a New Sheet**. The tool saves to that teacher's own Sheet. The label near the top reads **Saved to your Sheet**.

Every teacher uses the same link, and every teacher's data goes to their own Sheet. The tool can only reach Sheets that the signed in teacher can already open.

## On a phone

1. Open your Google Site in the phone's browser. The tool fits the screen and works by touch.
2. With Part 1, the phone keeps its own copy of the data. It does not match your laptop.
3. With Part 2, the phone reads the same Sheet as your laptop.
4. To make it feel like an app, open the browser menu and choose **Add to Home screen**.

## Does this work on the free edition

Yes. Google Sites, Google Sheets, and the script service used in Part 3 are all part of Education Fundamentals, the free edition. A district administrator can turn any of them off, so if a step is missing on your screen, ask your technology department.

## Part 3. For the one person who sets it up

This part is for a tech coach or the technology department. Teachers can skip it.

### Make the project

1. Go to `script.google.com` and click **New project**. Name it after the tool.
2. Click the plus next to **Files**, then **HTML**. Name it `Index`. Delete what is there and paste in the whole tool `.html` file.
3. Click `Code.gs`. Delete what is there and paste all of this:

```
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Classroom Tool')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

var DATA_TAB = 'App Data';

function sheetInfo(url) {
  var ss = SpreadsheetApp.openByUrl(url);
  return {
    name: ss.getName(),
    tabs: ss.getSheets().map(function (s) { return s.getName(); })
  };
}

function sheetHeaders(url, tab) {
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(tab);
  if (!sheet || sheet.getLastColumn() === 0) return [];
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    .map(function (v) { return String(v).trim(); })
    .filter(function (v) { return v; });
}

function searchSheets(query) {
  var q = 'mimeType = "application/vnd.google-apps.spreadsheet" and trashed = false';
  if (query) q += ' and title contains "' + String(query).replace(/["\\]/g, '') + '"';
  var files = DriveApp.searchFiles(q);
  var out = [];
  while (files.hasNext() && out.length < 20) {
    var f = files.next();
    out.push({
      name: f.getName(),
      url: f.getUrl(),
      updated: 'Updated ' + Utilities.formatDate(f.getLastUpdated(), Session.getScriptTimeZone(), 'MMMM d')
    });
  }
  return out;
}

function createSheet(name, tabs) {
  var ss = SpreadsheetApp.create(name);
  var names = [];
  (tabs || []).forEach(function (tab, i) {
    var sheet = i === 0 ? ss.getSheets()[0] : ss.insertSheet();
    sheet.setName(tab.name);
    names.push(tab.name);
    if (tab.cols && tab.cols.length) {
      sheet.getRange(1, 1, 1, tab.cols.length).setValues([tab.cols]).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
  });
  if (!names.length) names.push(ss.getSheets()[0].getName());
  return { name: ss.getName(), url: ss.getUrl(), tabs: names };
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

### Publish it

1. Click **Deploy**, then **New deployment**.
2. Click the gear next to **Select type** and choose **Web app**.
3. Under **Execute as**, choose **User accessing the web app**. This is the setting that keeps each teacher's data in that teacher's own Sheets.
4. Under **Who has access**, choose your district.
5. Click **Deploy** and approve the prompt.
6. Copy the **Web app URL**. That is the link teachers use in Part 2.

### Test it

1. Open the link, then add it to a test Google Site by URL.
2. Use **Create a New Sheet** inside the tool, then change one thing. The label should read **Saved to your Sheet**.
3. Open that Sheet. A tab named `App Data` holds the tool's saved copy.
4. Open the page on a second device, link the same Sheet, and check the change is there.

### Good to know

* Deploying inside the district means teachers do not see an unverified app warning.
* When a tool is updated, paste the new `.html` into `Index`, then click **Deploy**, **Manage deployments**, the pencil, and choose **New version**. The link stays the same.
* Some districts limit who can deploy web apps. That is a setting in the Google Admin console.

## Size

Each tool is about 88,000 to 142,000 characters. Testers report that Google Sites allows about 6,000,000 characters on a page, so one tool uses about 2 percent. Google does not publish that limit.
