# Classroom Quiz Show: Game Style Practice with Georgia Milestones Item Types

A quiz game a teacher builds with Gemini and shares in Google Classroom. The teacher edits. Students play. Questions are tagged to Georgia standards and use the technology enhanced item types students will see on Georgia Milestones.

## What it does

**Teacher view**

* Pick a Georgia standard from a list, or add any standard from SuitCASE
* Choose item types and how many questions
* Copy a ready made prompt, paste it into Gemini, then paste Gemini's answer back to add the questions
* Add, edit, delete, and reorder questions by hand

**Student view**

* One question at a time with a timer, points, bonus for speed, and streaks
* A practice mode with no timer
* An explanation after every question
* Results by standard at the end, so students see what to review

## Item types

1. **Multiple choice:** one correct answer
2. **Multi select:** more than one correct answer
3. **Two part:** Part A, then Part B that supports it
4. **Drop down:** menus inside a sentence
5. **Drag and drop:** sort items into groups
6. **Keypad input:** type a number or a fraction

Graphing items are not included. Partly correct answers earn part of the points.

## Step 1: Get your standard from SuitCASE

1. Open Georgia's SuitCASE site and find your subject and grade.
2. Copy the standard code and its wording, including the learning objectives under it.
3. Paste that wording into the prompt where it says to. Gemini writes much better questions with the official wording than with a code alone.

## Step 2: Build the tool in Canvas

```text
Build a classroom quiz game in Canvas as a single HTML file with the CSS and JavaScript included.

It has two views.

Teacher view:
* A list of questions with add, edit, delete, and reorder.
* Each question has a type, a standard code, a time limit, and an explanation.
* A box to paste a JSON array of questions and add them to the quiz.

Student view:
* A start screen, then one question at a time with a timer bar, points, and a streak counter.
* Up to 600 points for a correct answer plus up to 400 bonus points for speed. Partly correct answers earn part of the points.
* After each answer, show whether it was correct, the right answer, and the explanation.
* At the end, show the score and percent correct for each standard.
* A practice mode with no timer.

Question types: multiple choice, multi select, two part (Part A and Part B), drop down menus inside a sentence, drag and drop items into groups, and keypad number entry.

Style: Material Design 3, large touch targets, high contrast, works on a Chromebook and a phone, fully usable with a keyboard. Drag and drop must also work by tapping an item and then tapping a group. No outside services.
Start with 8 sample Grade 3 math questions that use every question type.
```

## Step 3: Have Gemini write the questions

The tool builds this prompt for you. This is the pattern it follows.

```text
You are writing practice questions for students in Georgia.

Standard code: [code]
Official wording from SuitCASE: [paste the standard and its learning objectives here]
Lesson focus: [optional]

Write [number] questions aligned to this standard. Use a mix of these Georgia Milestones style item types: [types].

Rules:
1. Match the grade level and the depth of the standard.
2. Every question has a clearly correct answer. Check the math or facts twice.
3. Wrong choices come from common student mistakes.
4. Use short, clear wording. No real student names.
5. Add a one sentence explanation a student can learn from.

Return ONLY a JSON array with no other text.
```

**Always read every question before students see it.** Gemini makes mistakes, especially with answer keys. The teacher is the expert.

## Step 4: Connect it to your Sheet

Create a Google Sheet with these tabs. Row 1 is headers.

* `Quizzes`: QuizID, Title, Class
* `Questions`: ID, QuizID, Order, Type, Standard, Seconds, Stem, Data, Explanation
* `Standards`: Code, Wording (paste from SuitCASE)

The `Data` column holds the choices, groups, or answer for that question as JSON text.

```text
Convert this quiz game into a Google Apps Script web app attached to my Google Sheet.
The Sheet has tabs named Quizzes, Questions, and Standards. Row 1 of each tab is headers.

Code.gs requirements:
* doGet serves Index.html and allows embedding in Google Sites (X Frame Options mode ALLOWALL).
* getQuiz(quizId) returns the quiz title and its questions in order.
* canEdit returns true only if the current user can edit the Questions tab.
* addQuestion, updateQuestion, deleteQuestion, and reorderQuestions change the Questions tab.

Index.html requirements:
* If canEdit is true, show the teacher view and the student view.
* If canEdit is false, show only the student view.
* The link can include a quiz ID so one tool serves many quizzes.

Then give me numbered beginner steps to deploy with Execute as set to "User accessing the web app" and access limited to people in my school domain.
```

## Step 5: Share it in Google Classroom as view only

1. Share the Sheet with your class group as **Viewer**. You stay the only Editor, or add a co teacher.
2. In Google Classroom, create a Material or Assignment and add the web app link.
3. Students open the link and see the student view only. They cannot change questions because they have view rights on the Sheet.
4. Play it together on the board, or assign it for independent practice.

## About scores

As written, the tool does not save student scores. Each student sees their own results at the end. That keeps student data out of the tool and keeps setup simple.

If you want scores collected, choose one:

* **Simplest:** students type their score into a Google Form linked in the same Classroom post.
* **Automatic:** ask Gemini to add a `Scores` tab and a submit step. This needs a different deployment setting and stores student records, so get your data owner and IT to approve it first.

## Keep it fair and safe

* This is practice, not an official test. Do not copy secure Georgia Milestones questions into it.
* No student names in questions.
* Follow `10_keep_tools_alive.md`: keep the Sheet in a shared drive so the question bank outlives any one teacher.
