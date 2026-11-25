# Live Data: Connect the Tool to Your Sheet

Use this path when the tool shows student or staff records, or when the data changes often. The tool becomes a Google Apps Script web app attached to your Sheet. It reads the Sheet each time it opens, and it only shows data to people the Sheet is shared with.

If your district has turned off Apps Script, stop here and talk to IT. Do not put student records in a snapshot tool as a workaround.

## Prompt 1: Convert the tool

Run this in the same Gemini chat where you built the tool.

```text
Convert this dashboard into a Google Apps Script web app that is attached to my Google Sheet.

Give me exactly two files:
1. Code.gs
2. Index.html

Requirements for Code.gs:
* A doGet function that serves Index.html.
* Allow the page to be embedded in Google Sites by setting the X Frame Options mode to ALLOWALL.
* A function named getRows that reads the tab named "[tab name]" from the active spreadsheet, uses row 1 as headers, and returns the rows as a list of objects.
* Read only. No function may write to the Sheet.

Requirements for Index.html:
* The same dashboard as now, with the built in sample data removed.
* On load, call getRows with google.script.run, show a loading message, then draw the dashboard.
* If the call fails, show this message: "You do not have access to this data. Contact [owner role]."

After the code, give me numbered beginner steps to add the files and deploy.
```

## Steps: add the code to your Sheet

1. Open your real data Sheet with your district account.
2. Choose Extensions, then Apps Script. A new tab opens.
3. Delete anything in `Code.gs` and paste the Code.gs that Gemini wrote.
4. Click the plus sign next to Files, choose HTML, and name it `Index`.
5. Delete what is there and paste the Index.html that Gemini wrote.
6. Click the save icon.

## Steps: deploy with owner controlled access

1. Click Deploy, then New deployment.
2. Click the gear icon and choose Web app.
3. Description: the tool name and today's date.
4. **Execute as:** choose **User accessing the web app**.
5. **Who has access:** choose **Anyone within [your district]**.
6. Click Deploy. Approve the permission request when asked.
7. Copy the Web app URL. You will paste it into Google Sites.

Why these two settings matter: the tool runs as the person looking at it. If the Sheet is not shared with that person, the tool shows them an access message and no data. The Sheet owner stays in control.

Do not choose "Execute as: Me" for student data. That setting shows your full view of the Sheet to every visitor.

## First visit for each user

Each person approves the tool once. If the page looks blank inside Google Sites the first time, have the person open the Web app URL directly, approve it, then return to the Site.

## When you change the tool later

1. Paste the updated code into the Apps Script editor and save.
2. Click Deploy, then Manage deployments.
3. Click the pencil icon, set Version to New version, and click Deploy.
4. The URL stays the same, so the Site keeps working.

## Prompt 2: Fix an error

```text
I followed the deployment steps and got this error:

[paste the exact message]

It happened at this step: [step]
Explain the cause in one sentence, then give me the fix as numbered steps. Change as little code as possible.
```

## Prompt 3: Limit what each role sees (optional)

```text
Update the web app so it shows fewer columns by default.
Only these columns are sent to the page: [list].
All other columns are never read by getRows.
Give me the updated Code.gs and tell me what changed.
```
