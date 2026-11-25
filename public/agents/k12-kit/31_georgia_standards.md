# Georgia Standards in Every Tool

Teachers should click a standard, not type one. This file shows how to get the Georgia standards into one Sheet that every tool reads.

## The idea

1. The district keeps one Sheet named `Georgia Standards`, with a tab named `Standards`.
2. Every tool links to that Sheet as a reference, using `26_link_sheets_and_back_up.md`.
3. In a tool, the teacher picks a grade and a subject. Only those standards show, and the teacher ticks the ones to use.

The Curriculum Warehouse example already works this way. Open it, click **Submit a lesson**, and change the grade and subject.

## What a teacher does, in three steps

1. In any tool, click **Data and backup**, then **Choose my grades and subjects**. Tick the grades and subjects you teach, then click **Save**. You do this once.
2. In the Lesson Planner, Mastery Tracker, Quiz Show, or Curriculum Warehouse, click **Pick standards for this tool**.
3. Tick the standards you want and click **Use these**. They show up in the tool's standard lists, and the prompts fill in the wording for you.

## Load the official list into an example tool

The example tools start with a sample list. To see the state's wording:

1. Open this address in a new browser tab: `https://case.georgiastandards.org/ims/case/v1p1/CFPackages/e9dd7229-3558-4df2-85c6-57b8938f6180`
2. Hold Ctrl and press S to save the page as a file. On a Mac, hold Command.
3. In the tool, click **Data and backup**, then **Choose my grades and subjects**.
4. Under **Load the official list from the state**, choose the file you saved.
5. Tick your grades and click **Save**.

That address is the mathematics list. Each subject has its own address. The list is kept in your browser, so each example tool is loaded separately. In a real setup the district loads it once into the shared `Georgia Standards` Sheet, using Option A.

I tested the loader with a test file built in the same format the state uses. I have not yet loaded the real state file through it.

## Where the standards come from

Georgia publishes its standards on the state SuitCASE site at `https://case.georgiastandards.org/`. Behind the site is a public data feed. A request for one item on that feed worked from outside the state network with no sign in on November 25.

Each framework on the site has an ID. The ID for the K to 12 mathematics standards is `e9dd7229-3558-4df2-85c6-57b8938f6180`. You can see a framework's ID in the address bar when you open it on the site. It is the first long code after the site name.

## Option A. Load the standards with a one time script

This is a job for a tech coach, done once for the whole district. Teachers never see it.

> The feed address in this script answered on November 25 and returned the mathematics framework, about 3 MB. The script itself has not been run inside Google yet. Test it on a blank Sheet first.

1. Open the `Georgia Standards` Sheet.
2. Click **Extensions**, then **Apps Script**.
3. Delete what is there and paste this:

```
function loadGeorgiaStandards() {
  var frameworks = {
    'Math': 'e9dd7229-3558-4df2-85c6-57b8938f6180'
  };
  var rows = [['Code', 'Grade', 'Subject', 'Type', 'Statement', 'Identifier']];
  Object.keys(frameworks).forEach(function (subject) {
    var url = 'https://case.georgiastandards.org/ims/case/v1p1/CFPackages/' + frameworks[subject];
    var pkg = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    pkg.CFItems.forEach(function (item) {
      rows.push([
        item.humanCodingScheme || '',
        (item.educationLevel || []).join(', '),
        subject,
        item.CFItemType || '',
        item.fullStatement || '',
        item.identifier
      ]);
    });
  });
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName('Standards') || ss.insertSheet('Standards');
  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
}
```

4. Click **Run**. Approve the permission prompt the first time.
5. Go back to the Sheet. The `Standards` tab now lists every item in the framework.
6. To add another subject, add a line to the `frameworks` list with that subject's ID, then run it again.
7. Run it again each summer to pick up changes from the state.

## Option B. No script

1. Open the framework on the SuitCASE site.
2. Use the site's export or print option to save the framework.
3. Open the file in Google Sheets and copy the code, grade, and statement columns into the `Standards` tab.

I could not confirm which export options the site offers, because the site would not load for me. Check this on the site.

## Clean up the list

1. The feed includes four kinds of rows: `Domain`, `Course`, `Content Standard`, and `Element`. Keep `Content Standard` and `Element` for teachers to pick from.
2. Add a filter: click **Data**, then **Create a filter**.
3. Share the Sheet with all staff as Viewer.

## One thing to know about the example tools

The example tools use the real Georgia codes with short sample labels. They do not show the official wording. Once the `Standards` tab is loaded, the tools show the state's wording.

## Other states

The same company that runs the Georgia site hosts a national collection at `https://rosetta.commongoodlt.com/`. I have not checked whether it offers the same feed. If it does, the script above should work for another state by changing the site address and the framework ID.
