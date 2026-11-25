# PBIS Points Board

Give points for your school expectations, let students trade points for rewards, and send family reports. It works like a class points app, but the data sits in a Google Sheet that you or your school own.

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
2. Click the title at the top left and type: `PBIS Points Board Data`
3. Look at the bottom of the screen. You will see one tab named **Sheet1**.

## Step 2. Make the tabs

You need one tab for each line below. The tab names must match exactly.

1. Double click **Sheet1** and rename it `Roster`. In row 1, type these headings, one per cell, from left to right: `Student`
2. Click the **+** at the bottom left to add a tab, then name it `Expectations`. In row 1, type these headings, one per cell, from left to right: `Expectation | Points`
3. Click the **+** at the bottom left to add a tab, then name it `Awards`. In row 1, type these headings, one per cell, from left to right: `Date | Student | Expectation | Points`
4. Click the **+** at the bottom left to add a tab, then name it `Rewards`. In row 1, type these headings, one per cell, from left to right: `Reward | Cost`
5. Click the **+** at the bottom left to add a tab, then name it `Redeemed`. In row 1, type these headings, one per cell, from left to right: `Date | Student | Reward | Cost`

6. Add one more tab named `Sources`. In row 1 type: `Sheet name | Link | Tabs used | What it feeds`. This is where you list any other Sheet this tool reads.

## Step 3. Bring in your roster

Do one of these. The first is fastest.

1. **You have a Class Roster Sheet already.** Follow `26_link_sheets_and_back_up.md` to link it. Your names fill in by themselves and stay up to date.
2. **You do not.** Type or paste your student names into the `Roster` tab, one per row, starting in row 2.

## Step 4. How the tool works

1. On the Expectations tab, type the words from your school PBIS matrix, one per row. Put 1 in the Points column for each.
2. To give a point, add one row to the Awards tab: today's date, the student, the expectation, and the points.
3. A student's total is every Awards row for that student, minus every Redeemed row for that student.

## Step 5. Check it worked

1. Add one test row.
2. Close the Sheet and open it again. The row should still be there.
3. Delete the test row.

## Step 6. Share it

Share the Sheet with a co teacher as Editor. Share with an administrator as Viewer. Do not share the whole Sheet with families. Send the family report instead.

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

The working example of this tool is in the playbook gallery under **PBIS Points Board**. It uses invented sample data and saves in your browser only.
