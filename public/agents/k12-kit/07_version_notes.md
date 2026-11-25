# Version Notes

Every version ends with the same finished tool. Paid access removes manual steps.

Google changes what each edition includes several times a year. Confirm with your IT department before training staff.

## Version A: Gemini app only

For Education Fundamentals or Education Standard with no add on.

* Build everything in the Gemini app with Canvas.
* Clean your Sheet by hand, using the structure check prompt in `02_data_sheet_setup.md`.
* Build Google Forms by hand.
* For live data, copy the code Gemini writes into the Apps Script editor yourself.
* For errors, paste the exact message back into the Gemini app.

Everything in this kit is written for Version A.

## Version B: Education Plus or the Teaching and Learning add on

You will see a Gemini icon inside Sheets and Forms. Use it for these shortcuts.

### In Sheets, open the Gemini side panel

```text
Review this tab. Find inconsistent values in each column and list them. Do not change anything yet.
```

```text
Split the column "[name]" into separate columns for [parts]. Put the results in new columns to the right.
```

```text
Create a summary tab that counts rows by [column] and by [column].
```

### In Forms

```text
Create a form that collects: [fields]. Make [fields] required. Use dropdowns for [fields] with these options: [options].
```

Link the form to your data Sheet so new responses appear as new rows.

Everything else follows Version A.

## Version C: Google AI Pro for Education

All Version B shortcuts apply, with higher limits and stronger models in the Gemini app.

### In the Apps Script editor, open the Gemini side panel

```text
Explain what this script does in plain language, one function at a time.
```

```text
This deployment gives this error: [paste error]. Find the cause and fix it.
```

```text
Add a function that returns only these columns: [list]. Keep the script read only.
```

Gemini in the Apps Script editor is a beta feature. If you do not see it, follow Version A for that step.

## If Gemini is turned off

Ask your IT department whether the Gemini app can be turned on for staff. Share this kit's ground rules with them: district accounts only, fake data while building, no APIs or connectors, and sharing controlled by the data owner.
