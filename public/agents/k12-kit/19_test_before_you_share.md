# Test Before You Share

A tool that breaks in front of a class costs more time than it saves. Run these checks before anyone else uses a tool. They take about ten minutes and need no technical skill.

## The ten checks

Do them in order. If one fails, stop and fix it before going on.

1. **It opens.** Open the tool link. You see the tool, not an error or a blank page.
2. **It shows your data.** The numbers and names match what is in the Google Sheet.
3. **Add works.** Add one pretend item. It shows up in the tool.
4. **Add saved.** Open the Sheet. The pretend item is there as a new row.
5. **Edit works.** Change the pretend item in the tool. The Sheet shows the change.
6. **Delete works.** Delete the pretend item in the tool. It is gone from the Sheet.
7. **It remembers.** Close the browser tab. Open the tool again. Everything is still there.
8. **The right people can use it.** Ask one person who should have access to open it. They see the data.
9. **The wrong people cannot.** Ask one person who should not have access to open it. They see no data.
10. **It works on the real device.** Open it on the device people will actually use: a Chromebook, the classroom board, or a phone.

Write the date and your name on the tool's Sources tab when all ten pass.

## Check again when anything changes

Run checks 1 to 7 again whenever:

* you link a new Sheet
* you rename a tab or a column
* a new school year starts
* the tool gets a new owner

## What has been tested so far

The example tools in this kit were tested on November 25, 2026, as single web pages in the Chrome browser.

All eleven passed every check below:

* opens with no errors
* add, edit, and delete work
* changes are still there after the page is reloaded
* a new Google Sheet can be linked in the Data sources panel, and the link is kept
* the page makes no requests to any outside website, font, or service
* nothing is cut off at desktop, tablet, or phone width

The eleven tools: Flex Period Scheduling, Grade Level Team Dashboard, Chromebook Repair Tracker, Classroom Quiz Show, Station Rotation Board, Weekly Lesson Planner, Group Maker and Picker, Standards Mastery Tracker, Class Agenda Board, Rubric Grader, My Classroom Hub.

## What has not been tested yet

* The example tools save in the browser. They have not been connected to a real Google Sheet in a school account.
* The steps in `18_data_without_apps_script.md` for Google Sheets, AppSheet, and Sheets canvas have not been run start to finish in a school account.
* The Apps Script prompts in the other kit files have not been run in Gemini.

Before training staff, one person should build each tool once in your district's Google account, run the ten checks, and correct any step that looks different on your screens.
