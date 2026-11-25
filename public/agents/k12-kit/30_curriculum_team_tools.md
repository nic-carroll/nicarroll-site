# Curriculum Team Tools

Four tools for the curriculum department: the executive director, the curriculum director, instructional specialists, and coaches. Each one is a Google Sheet the department owns, kept in a shared drive so it outlives any one person.

**AI needed:** none. You follow the steps below.

> These steps have not been tested inside a school Google account yet. Run the ten checks in `19_test_before_you_share.md` before you share a tool.

## Who uses which tool

1. **Curriculum Warehouse.** Teachers find approved lessons. Specialists review them. The director approves them and watches for standards with no lesson.
2. **Pacing Guide.** The director sets units by week. Each school marks the unit it is teaching.
3. **Coaching Cycle Tracker.** Coaches log cycles, visits, and next steps.
4. **Instructional Materials Review.** The executive director tracks products from request to board vote.

## Tool 1. Curriculum Warehouse

### Make the Sheet

1. In the curriculum shared drive, click **New**, then **Google Sheets**. Name it `Curriculum Warehouse`.
2. Make these tabs and type the headings in row 1, one per cell:
   * `Lessons`: `Lesson ID | Title | Grade | Subject | Standards | Minutes | Author | School | Summary | Link | Status | Reviewer note | Times used`
   * `Standards`: `Code | Grade | Subject | Statement`
   * `Reviews`: `Date | Lesson ID | Reviewer | Decision | Note`
   * `Sources`: `Sheet name | Link | Tabs used | What it feeds`
3. Fill the `Standards` tab. See `31_georgia_standards.md`.

### Make Status a dropdown

1. On the `Lessons` tab, click the letter at the top of the Status column.
2. Click **Data**, then **Data validation**, then **Add rule**.
3. Choose **Dropdown** and type these five choices: `Submitted`, `Recommended`, `Approved`, `Needs changes`, `Retired`.
4. Click **Done**.

### Let teachers submit

1. Click **Tools**, then **Create a new form**.
2. Add these questions: Title, Grade, Subject, Standards, Minutes, Your name, School, Summary, Link to the lesson file.
3. For the Standards question, choose **Checkboxes** and paste the codes from the `Standards` tab.
4. Send the Form link to teachers. New lessons arrive with no status. A specialist sets it to `Submitted`.

### The approval path

1. A teacher submits. Status is `Submitted`.
2. A specialist checks the lesson against the standard and sets `Recommended` or `Needs changes` with a note.
3. The director sets `Approved`.
4. Teachers only ever see lessons marked `Approved`.

### Give teachers the approved list only

1. Add a tab named `Approved`.
2. In cell A1, paste: `=QUERY(Lessons!A:M, "select * where K = 'Approved'", 1)`
3. Make a second Sheet named `Approved Lessons`. In its cell A1, pull the `Approved` tab in with the formula in `26_link_sheets_and_back_up.md`.
4. Share `Approved Lessons` with teachers as Viewer. Do not share the main Sheet with them.

### Find the gaps

1. Add a tab named `Coverage`.
2. In A2, paste: `=Standards!A2:A`
3. In B2, paste: `=COUNTIFS(Lessons!E:E, "*"&A2&"*", Lessons!K:K, "Approved")` and drag it down.
4. Any standard with a 0 has no approved lesson.

### Share it

* Director and specialists: Editor on `Curriculum Warehouse`.
* Teachers: Viewer on `Approved Lessons` only.

## Tool 2. Pacing Guide

1. Make a Sheet named `Pacing Guides` with these tabs:
   * `Courses`: `Course`
   * `Units`: `Course | Unit | Start week | Weeks | Standards`
   * `School Progress`: `School | Course | Unit teaching now | Updated`
2. Type one row per unit. Start week 1 is the first week of the semester.
3. On `School Progress`, make one row per school and course.
4. Protect each school's rows. Select the rows, click **Data**, then **Protect sheets and ranges**, and allow only that school's contact to edit.
5. A school is behind when the unit it is teaching ended before this week.

## Tool 3. Coaching Cycle Tracker

1. Make a Sheet named `Coaching Cycles` with these tabs:
   * `Teachers`: `Teacher | Grade | School`
   * `Cycles`: `Cycle ID | Teacher | Focus | Goal | Start | Stage`
   * `Visits`: `Date | Cycle ID | Kind | What happened | Next step`
2. Make Stage a dropdown: `Planning`, `Observing`, `Reflecting`, `Complete`.
3. Each visit is one new row.
4. Share with the coach as owner. Share one teacher's rows with that teacher by sending a filtered copy, not the whole Sheet.
5. Coaching notes are for growth. Do not copy them into an evaluation record.

## Tool 4. Instructional Materials Review

1. Make a Sheet named `Materials Review` with these tabs:
   * `Materials`: `Product | Publisher | Subject | Grades | Stage | Cost per student | Students | Privacy review | Notes`
   * `Scores`: `Date | Product | Reviewer | Standards match | Rigor | Supports | Ease of use | Evidence`
2. Make Stage a dropdown: `Requested`, `Committee review`, `Pilot`, `Board approval`, `Adopted`, `Not adopted`.
3. Make Privacy review a dropdown: `Not started`, `In review`, `Passed`, `Failed`.
4. Protect the Privacy review column so only the technology department can edit it.
5. The rule: a product does not move to `Board approval` until Privacy review says `Passed` and every rubric criterion has a score.
6. Committee members score through a Google Form linked to the `Scores` tab.

## Back up all four

Follow Part 4 of `26_link_sheets_and_back_up.md` at the end of each semester.
