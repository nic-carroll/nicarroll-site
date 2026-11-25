# Class Poll

Ask a live question and watch the answers come in as a chart, a rating, a word cloud, or a list of student questions.

**Time to set up:** about 15 minutes, one time.
**AI needed:** none. You follow the steps below.
**Tech person needed:** no.

> These steps have not been tested inside a school Google account yet. Run the ten checks in `19_test_before_you_share.md` before you share the tool.

## Before you start

1. Sign in to your school Google account.
2. Open Google Drive.
3. Have your class list ready.

## Step 1. Make the Sheet

1. In Google Drive, click **New**, then **Google Sheets**.
2. Click the title at the top left and type: `Class Poll Data`
3. Look at the bottom of the screen. You will see one tab named **Sheet1**.

## Step 2. Make the tabs

You need one tab for each line below. The tab names must match exactly.

1. Double click **Sheet1** and rename it `Polls`. In row 1, type these headings, one per cell, from left to right: `Question | Kind | Choices | Open | Show results`
2. Click the **+** at the bottom left to add a tab, then name it `Responses`. In row 1, type these headings, one per cell, from left to right: `Timestamp | Question | Answer`

3. Add one more tab named `Sources`. In row 1 type: `Sheet name | Link | Tabs used | What it feeds`. This is where you list any other Sheet this tool reads.

## Step 3. Bring in your roster

Do one of these. The first is fastest.

1. **You have a Class Roster Sheet already.** Follow `26_link_sheets_and_back_up.md` to link it. Your names fill in by themselves and stay up to date.
2. **You do not.** Type or paste your students into the `Roster` tab, one per row, starting in row 2. Fill in the student number or the student email, whichever your school uses. You need at least one of them.

## Step 4. How the tool works

1. Make one Google Form with your question. In the Form, choose Responses, then Link to Sheets, and pick this Sheet. The Form creates the Responses tab for you.
2. Post the Form link in Google Classroom. Students answer there. They do not need an account with any outside service.
3. For a chart, select the answer column and choose Insert, then Chart. The chart updates as answers arrive.

## Step 5. Check it worked

1. Add one test row.
2. Close the Sheet and open it again. The row should still be there.
3. Delete the test row.

## Step 6. Share it

Students only ever see the Form. Share the Sheet with a co teacher as Editor. In the Form settings, turn off Collect email addresses if you want answers to be anonymous.

1. Click **Share** at the top right.
2. Type the names of the people or the Google Group.
3. Pick **Viewer** or **Editor** for each one.
4. Under General access, leave it on **Restricted**.

## Step 7. Back it up

1. At the end of each grading period, click **File**, then **Make a copy**. Add the date to the name.
2. If something goes wrong, click **File**, then **Version history**, then **See version history**. Pick an earlier day and click **Restore this version**.

## If something looks wrong

* **A tab is missing data.** Check the tab name. A space at the end of a name breaks the link.
* **You see #REF!** Click the cell, then click **Allow access**. This is normal the first time one Sheet reads another.
* **Someone cannot open it.** Click **Share** and check that their name is on the list.

## Try the example

The working example of this tool is in the playbook gallery under **Class Poll**. It uses invented sample data and saves in your browser only.
