---
name: k12-gemini-click-by-click-directions
title: Click by Click Directions for Building With Gemini
type: playbook
description: What to click, in order, to build an agent, a dashboard, and a live tool with the free Gemini app in Google Workspace for Education.
---

# Click by Click Directions for Building With Gemini

By Nic Carroll. Part of the Gemini Tool Builder Playbook at https://niccarroll.org/k12-directions.html

Everything here uses the free Gemini app that comes with Google Workspace for Education. **Bold** words are the exact thing to click. Words in `code` are the exact thing to type.

Button names were checked against Google's help pages in November 2026. Google moves buttons from time to time, so each step also says what you should see.

## Before You Start

Time: 5 minutes

Three quick checks. Everything here uses the free Gemini app that comes with Google Workspace for Education. No paid license, no API key, no outside account.

### Step 1: Sign In With Your School Account

1. Open Chrome and go to `gemini.google.com`.
2. Look at the round picture or letter at the **top right**. Click it.
3. Check that the email shown is your **school email**. If it is a personal account, click **Switch account** and pick your school account.

**You should see:** The Gemini home screen with a text box at the bottom that says something like Ask Gemini.

**Good to know:** If you see a message that Gemini is not available for your account, your IT department has to turn on the Gemini app. Send them this page.

### Step 2: Check That You Have Canvas

1. Look just **below the text box** at the bottom of the screen.
2. Find a button labeled **Canvas**. On some screens it is inside **Tools** or behind the **plus** button next to the text box.

**You should see:** A Canvas choice you can click. You will use it in Build 2.

**Good to know:** Google moves this button from time to time. If you cannot find it, type `open a canvas` in the text box and press Enter.

### Step 3: Check That You Have Gems

1. Look at the **left side** of the screen. If the menu is closed, click the **three lines** at the top left to open it.
2. Find **Explore Gems**. On some screens it says **Gems** or **Gem manager**.

**You should see:** A page listing Gems made by Google, with a **New Gem** button.

**Good to know:** No Gems choice means your district has it turned off. You can still do Build 2 and Build 3.

## Build 1: An Agent (a Gem)

Time: 10 minutes

In Gemini, an agent you build is called a Gem. It is a helper with standing instructions, so you never retype them. You will build Family Message Helper, which turns rough notes into a clear message for families.

### Step 1: Open the Gem Builder

1. Go to `gemini.google.com`.
2. On the left, click **Explore Gems**.
3. Click **New Gem**.

**You should see:** A builder page with a **Name** box and an **Instructions** box on the left, and a **Preview** chat on the right.

### Step 2: Name Your Gem

1. Click the **Name** box.
2. Type `Family Message Helper`.

**You should see:** The name shows at the top of the page.

### Step 3: Give It Instructions

1. Click the **Copy** button on the block below.
2. Click inside the **Instructions** box.
3. Press **Ctrl + V** to paste. On a Mac press **Command + V**.

**Instructions to Paste**

```text
You are Family Message Helper, a writing partner for school staff.

YOUR JOB
Turn my rough notes into a clear, warm message for families.

HOW YOU WORK
1. Ask me who the message is for and what families need to do, if I did not say.
2. Write the message at a 6th grade reading level, under 150 words.
3. Put the date, time, place, and the action families must take near the top.
4. Give me two versions: an email and a short text message.
5. Offer a Spanish version after the English one.

RULES YOU ALWAYS FOLLOW
* Never include a student's name, grades, health, or discipline details. If my notes contain them, remove them and tell me you did.
* Never invent a date, time, cost, or policy. If one is missing, ask me.
* Keep the tone respectful and plain. No jargon, no slang.
```

**You should see:** The full instructions in the box, starting with You are Family Message Helper.

**Good to know:** Want Gemini to polish your own instructions? Click the **magic wand** at the bottom of the Instructions box.

### Step 4: Add Knowledge (Optional)

1. Under **Knowledge**, click **Add files**.
2. Pick a public file, such as your school calendar or family handbook.
3. Click **Open**.

**You should see:** The file name listed under Knowledge.

**Good to know:** Never upload student records, rosters, or anything with names and grades. Only add files you would hand to any parent.

### Step 5: Test It Before You Save

1. On the right, click the **Preview** text box.
2. Copy the test note below, paste it, and press **Enter**.
3. Read the answer. Did it ask for anything missing? Did it give an email and a text version?

**Test Note to Paste**

```text
picture day moved to thurs nov 19 bc of the assembly. same times. forms due wed. retakes in january
```

**You should see:** A short email and a short text message for families. It should ask about anything you left out instead of making it up.

**Good to know:** If the answer is not right, change the words in the Instructions box and test again. The preview does not save your Gem.

### Step 6: Save Your Gem

1. At the top right, click **Save**.

**You should see:** A message that your Gem was saved, and the Gem listed under **Your Gems**.

### Step 7: Use Your Gem

1. On the left, click **Explore Gems**.
2. Under **Your Gems**, click **Family Message Helper**.
3. Type your rough notes and press **Enter**.

**You should see:** A new chat with your Gem's name at the top.

### Step 8: Share It With Your Team

1. On the left, click **Explore Gems**.
2. Next to your Gem, click **Share**.
3. Type a coworker's school email, or a staff group.
4. Choose **Viewer** so they can use it, or **Editor** so they can change it.
5. Click **Send** or **Done**.

**You should see:** Your coworker gets the Gem in their own Gem list.

**Good to know:** No Share button means your district has Gem sharing turned off. Send coworkers the instructions block and they can build their own in two minutes.

## Build 2: A Dashboard in Canvas

Time: 15 minutes

Canvas is where Gemini builds a working page while you watch. You will build a Chromebook Repair Tracker with made up data. This is your practice copy. No real records go in here.

### Step 1: Start a New Chat With Canvas

1. Go to `gemini.google.com`.
2. At the top left, click **New chat**.
3. Below the text box, click **Canvas**. It may be inside **Tools** or behind the **plus** button.

**You should see:** The word Canvas highlighted near the text box.

### Step 2: Paste the Build Prompt

1. Click the **Copy** button on the block below.
2. Click the text box in Gemini and paste.
3. Press **Enter**, or click the **arrow** button to send.

**Build Prompt to Paste**

```text
Build a one page dashboard called Chromebook Repair Tracker as a single HTML file with its CSS and JavaScript included. Do not use any outside libraries, accounts, or keys.

Use this sample data. The first row is the column headers.

Ticket | Date In | Building | Asset Tag | Issue | Status | Tech
1001 | 11/02/2026 | Oakhaven Elementary | OCS20417 | Cracked screen | Waiting on part | Rivera
1002 | 11/03/2026 | Oakhaven Middle | OCS20988 | Will not charge | In repair | Chen
1003 | 11/03/2026 | Oakhaven High | OCS21544 | Missing keys | Ready for pickup | Rivera
1004 | 11/05/2026 | Oakhaven Elementary | OCS20102 | Will not turn on | New | 
1005 | 11/06/2026 | Oakhaven High | OCS21730 | Cracked screen | In repair | Patel
1006 | 11/09/2026 | Oakhaven Middle | OCS20655 | Trackpad not working | Waiting on part | Chen
1007 | 11/10/2026 | Oakhaven High | OCS21203 | Wi Fi drops | New | 
1008 | 11/12/2026 | Oakhaven Elementary | OCS20319 | Hinge broken | Ready for pickup | Patel

The page must show, top to bottom:
1. A title and a row of four number tiles: Total Open, New, Waiting on Part, Ready for Pickup.
2. A Building filter, a Status filter, and a search box that searches every column.
3. A table of the matching rows, sorted by Date In with the oldest first.
4. A small bar chart of tickets by Status.

Make it easy to read on a phone and a laptop, with large text and strong color contrast.
```

**You should see:** Gemini starts writing. A panel opens on the right side. This takes about a minute.

### Step 3: Open the Preview

1. Wait until Gemini stops writing.
2. At the top of the right panel, click **Preview**. If you see lines of code, you are on the Code view. Preview is next to it.

**You should see:** A working dashboard with four number tiles, two filters, a search box, a table, and a chart.

### Step 4: Try Every Control

1. Click the **Building** filter and pick `Oakhaven High`.
2. Click the **Status** filter and pick `New`.
3. Type `screen` in the search box.
4. Check that the number tiles match what you count in the table.

**You should see:** The table changes each time. With Oakhaven High and New picked, you should see one row, ticket 1007.

**Good to know:** If a number looks wrong, tell Gemini exactly what you saw and what you expected.

### Step 5: Ask for Changes, One at a Time

1. Click the text box on the left side.
2. Type one change and press **Enter**. Wait for it to finish. Then ask for the next one.
3. Try: `Make tickets older than 7 days stand out with a red label.`
4. Try: `Add a button that prints the current table.`

**You should see:** The preview rebuilds after each request.

**Good to know:** Ask for one thing at a time. Five changes in one message is how tools break.

### Step 6: If Something Breaks

1. Type `The preview shows an error. Find the cause and fix it.` and press **Enter**.
2. Still broken? Type `Go back to the last version that worked.`

**You should see:** A working preview again.

### Step 7: Get the Code

1. At the top of the right panel, click **Code**.
2. Click the **Copy** icon at the top right of the panel.
3. Open a new Google Doc, paste, and name it `Repair Tracker Build Notes`. You need this in Build 3.

**You should see:** The whole page as code, starting with a line that says DOCTYPE html.

### Step 8: Stop Here Before You Share

1. Find the **Share** button at the top right of Canvas. Do not use it for real data.
2. For a practice copy with made up data, sharing the link is fine.
3. For anything with real records, go to **Build 3**. That path lets the owner of the data decide who sees it.

**You should see:** You understand the rule: Canvas for practice, Build 3 for real.

**Good to know:** A Canvas link carries the data inside the page. Anyone with the link sees all of it. That is why real records never go in Canvas.

## Build 3: A Live Tool on a Google Sheet

Time: 30 minutes

Now make it real. The data lives in a Google Sheet. The tool reads the Sheet as the person looking at it, so anyone who cannot open the Sheet sees nothing. Then you put it on a Google Site.

### Step 1: Make the Sheet

1. In a new tab, go to `sheets.new`.
2. Click **Untitled spreadsheet** at the top left and type `Chromebook Repairs`.
3. At the bottom, double click the tab named **Sheet1**, type `Repairs`, and press **Enter**.

**You should see:** A blank Sheet named Chromebook Repairs with one tab named Repairs.

**Good to know:** The tab name must be exactly Repairs. The tool looks for that name.

### Step 2: Paste the Practice Data

1. Click the **Copy** button on the block below.
2. In the Sheet, click cell **A1**.
3. Press **Ctrl + V** to paste.

**Practice Data to Paste**

```text
Ticket	Date In	Building	Asset Tag	Issue	Status	Tech
1001	11/02/2026	Oakhaven Elementary	OCS20417	Cracked screen	Waiting on part	Rivera
1002	11/03/2026	Oakhaven Middle	OCS20988	Will not charge	In repair	Chen
1003	11/03/2026	Oakhaven High	OCS21544	Missing keys	Ready for pickup	Rivera
1004	11/05/2026	Oakhaven Elementary	OCS20102	Will not turn on	New	
1005	11/06/2026	Oakhaven High	OCS21730	Cracked screen	In repair	Patel
1006	11/09/2026	Oakhaven Middle	OCS20655	Trackpad not working	Waiting on part	Chen
1007	11/10/2026	Oakhaven High	OCS21203	Wi Fi drops	New	
1008	11/12/2026	Oakhaven Elementary	OCS20319	Hinge broken	Ready for pickup	Patel
```

**You should see:** Seven column headers in row 1 and eight repairs under them, each value in its own cell.

**Good to know:** If everything landed in column A, click **Data**, then **Split text to columns**.

### Step 3: Open Apps Script

1. In the Sheet menu, click **Extensions**.
2. Click **Apps Script**. A new tab opens.
3. Click **Untitled project** at the top, type `Repair Tracker`, and click **Rename**.

**You should see:** A code editor with a file named **Code.gs** on the left.

**Good to know:** No Apps Script in the menu means your district has it turned off. Ask IT to allow Apps Script for staff.

### Step 4: Paste the Sheet Reader

1. Click inside the code area.
2. Press **Ctrl + A** to select everything, then **Delete**.
3. Click the **Copy** button on the block below and paste it in.

**Code.gs to Paste**

```text
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Chromebook Repair Tracker')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Reads the Repairs tab as the person who is looking at the tool.
// If that person cannot open the Sheet, they get nothing.
function getRows() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Repairs');
  var values = sheet.getDataRange().getDisplayValues();
  var headers = values.shift();
  return values
    .filter(function (row) { return row.join('') !== ''; })
    .map(function (row) {
      var item = {};
      headers.forEach(function (h, i) { item[h] = row[i]; });
      return item;
    });
}
```

**You should see:** Two functions in Code.gs: doGet and getRows.

### Step 5: Add the Page

1. On the left, next to **Files**, click the **plus** button.
2. Click **HTML**.
3. Type `Index` and press **Enter**. Do not type .html.
4. Press **Ctrl + A**, then **Delete**.
5. Click the **Copy** button on the block below and paste it in.
6. Click the **Save** icon at the top, or press **Ctrl + S**.

**Index.html to Paste**

```text
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<style>
  body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f6f9; color: #14233a; }
  h1 { margin: 0 0 16px; font-size: 26px; }
  .tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 16px; }
  .tile { background: #14233a; color: #fff; border-radius: 14px; padding: 16px; }
  .tile b { display: block; font-size: 34px; }
  .bar { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
  select, input { font-size: 16px; padding: 10px 12px; border: 1px solid #9aa7b8; border-radius: 10px; background: #fff; }
  input { flex: 1 1 220px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 14px; overflow: hidden; }
  th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #e1e6ee; font-size: 15px; }
  th { background: #e4eef8; }
  .wrap { overflow-x: auto; }
  #msg { padding: 12px 0; }
</style>
</head>
<body>
<h1>Chromebook Repair Tracker</h1>
<div class="tiles" id="tiles"></div>
<div class="bar">
  <select id="building" aria-label="Building"></select>
  <select id="status" aria-label="Status"></select>
  <input id="search" type="search" placeholder="Search every column" aria-label="Search">
</div>
<p id="msg">Loading the repairs.</p>
<div class="wrap"><table id="table"></table></div>
<script>
  var rows = [];
  var COLS = ['Ticket', 'Date In', 'Building', 'Asset Tag', 'Issue', 'Status', 'Tech'];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fill(id, label, key) {
    var seen = {}, list = [];
    rows.forEach(function (r) { if (r[key] && !seen[r[key]]) { seen[r[key]] = 1; list.push(r[key]); } });
    document.getElementById(id).innerHTML = '<option value="">' + label + '</option>' +
      list.sort().map(function (v) { return '<option>' + esc(v) + '</option>'; }).join('');
  }
  function count(status) { return rows.filter(function (r) { return r.Status === status; }).length; }
  function draw() {
    var b = document.getElementById('building').value, s = document.getElementById('status').value;
    var q = document.getElementById('search').value.toLowerCase();
    var shown = rows.filter(function (r) {
      return (!b || r.Building === b) && (!s || r.Status === s) &&
        (!q || COLS.map(function (c) { return r[c]; }).join(' ').toLowerCase().indexOf(q) > -1);
    });
    var open = rows.filter(function (r) { return r.Status !== 'Ready for pickup'; }).length;
    document.getElementById('tiles').innerHTML =
      [[open, 'Total Open'], [count('New'), 'New'], [count('Waiting on part'), 'Waiting on Part'], [count('Ready for pickup'), 'Ready for Pickup']]
        .map(function (t) { return '<div class="tile"><b>' + t[0] + '</b>' + t[1] + '</div>'; }).join('');
    document.getElementById('table').innerHTML =
      '<tr>' + COLS.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>' +
      shown.map(function (r) { return '<tr>' + COLS.map(function (c) { return '<td>' + esc(r[c] || '') + '</td>'; }).join('') + '</tr>'; }).join('');
    document.getElementById('msg').textContent = shown.length + ' of ' + rows.length + ' repairs shown.';
  }
  function start(data) {
    rows = data;
    fill('building', 'All Buildings', 'Building');
    fill('status', 'All Statuses', 'Status');
    draw();
  }
  ['building', 'status', 'search'].forEach(function (id) { document.getElementById(id).addEventListener('input', draw); });
  google.script.run
    .withSuccessHandler(start)
    .withFailureHandler(function () { document.getElementById('msg').textContent = 'You do not have access to this data. Ask the owner of the Sheet.'; })
    .getRows();
</script>
</body>
</html>
```

**You should see:** Two files on the left: Code.gs and Index.html.

**Good to know:** Want your own Canvas design from Build 2 instead? Use the convert prompt in the next step.

### Step 6: Use Your Own Design (Optional)

1. Go back to your Gemini chat from Build 2.
2. Copy the prompt below, paste it, and press **Enter**.
3. Click **Code**, copy the result, and paste it over everything in **Index.html**.
4. Click **Save**.

**Convert Prompt to Paste**

```text
Here is my dashboard code from Canvas. Rewrite it for Google Apps Script as one file named Index.html.
Remove the built in sample data. Load the rows by calling google.script.run.withSuccessHandler(start).getRows() and draw the page inside start.
The rows arrive as a list of objects whose keys are my column headers: Ticket, Date In, Building, Asset Tag, Issue, Status, Tech.
If the call fails, show the message: You do not have access to this data. Ask the owner of the Sheet.
Do not use any outside libraries, accounts, or keys.
```

**You should see:** Your own dashboard design, now reading from the Sheet.

### Step 7: Deploy the Tool

1. At the top right, click **Deploy**.
2. Click **New deployment**.
3. Next to **Select type**, click the **gear**, then click **Web app**.
4. In **Description**, type `First version`.
5. Under **Execute as**, pick **User accessing the web app**.
6. Under **Who has access**, pick **Anyone within** your school or district.
7. Click **Deploy**.

**You should see:** A box asking you to authorize access.

**Good to know:** Never pick Execute as Me for student or staff records. That setting shows your data to everyone who opens the tool.

### Step 8: Allow Access and Copy the Link

1. Click **Authorize access**.
2. Pick your school account.
3. Click **Allow**.
4. Under **Web app**, click **Copy** next to the URL.
5. Click **Done**.

**You should see:** A long link that ends in /exec.

### Step 9: Test the Tool

1. Open a new tab, paste the link, and press **Enter**.
2. Try the filters and the search box.
3. Go to the Sheet, change the Status on ticket 1004 to `In repair`, then reload the tool.

**You should see:** The tool shows the change you just made in the Sheet.

**Good to know:** Stuck on Loading the repairs? Check that the tab is named Repairs and that both files are saved, then deploy a new version (last step on this page).

### Step 10: Set Who Can See the Data

1. Go back to the Sheet.
2. At the top right, click **Share**.
3. Type the people or the staff group who should see the tool. Set each to **Viewer**.
4. Under **General access**, keep **Restricted**.
5. Click the **gear** at the top of the Share box and uncheck **Viewers and commenters can see the option to download, print, and copy**.
6. Click **Done**.

**You should see:** Only the people you named are listed.

**Good to know:** This is the control point. Remove a person from the Sheet and the tool shows them nothing.

### Step 11: Put It on a Google Site

1. In a new tab, go to `sites.new`.
2. Click **Untitled site** and type a name, such as `Technology Tools`.
3. On the right, click **Insert**, then **Embed**.
4. Click **By URL**, paste your tool link, and click **Insert**.
5. Drag the blue corners to make the box as wide and tall as the page.

**You should see:** Your tool inside the Site page.

**Good to know:** For a tool that fills the whole page: click **Pages**, hover over the **plus** button, click **New full page embed**, and paste the link.

### Step 12: Publish the Site

1. At the top right, click **Publish**.
2. Type a short web address, such as `techtools`.
3. Next to **Who can view my site**, click **Manage**.
4. Under **Published site**, pick your school or **Restricted**. Never pick Public.
5. Click **Done**, then **Publish**.

**You should see:** A link to your live Site.

**Good to know:** The Site is only a front door. It gives no one access to the data. The Sheet does that.

### Step 13: Test as Someone Who Should Be Blocked

1. Ask a coworker who is **not** on the Sheet to open the Site.
2. Ask a coworker who **is** on the Sheet to open it too.

**You should see:** The first person sees the no access message. The second sees the tool. If so, you are ready for real data.

**Good to know:** The first time, each person is asked to allow access. If the box on the Site stays blank, have them open the tool link in its own tab once and click **Allow**.

### Step 14: Change the Tool Later

1. Edit **Index.html** or **Code.gs** and click **Save**.
2. Click **Deploy**, then **Manage deployments**.
3. Click the **pencil** to edit.
4. Under **Version**, pick **New version**.
5. Click **Deploy**.

**You should see:** The same link now shows your changes, so the Site keeps working.

**Good to know:** If you click New deployment instead, you get a new link and must update the Site.

## Three Rules That Never Change

* Use your school Google account, never a personal one.
* Build with made up data. Real records go in only after the tool works and sharing is set.
* The person who owns the Sheet decides who sees the data.
