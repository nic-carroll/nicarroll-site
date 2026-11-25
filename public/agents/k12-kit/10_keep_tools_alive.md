# Keep Tools Alive: Building and Sharing So Nothing Gets Lost

A tool that lives in one person's account disappears when that person changes schools, changes roles, or leaves. These practices make every tool belong to the school or district, not to an employee.

## The five rules

1. **The organization owns it.** Every file lives in a shared drive, never in someone's My Drive.
2. **Roles get access, not people.** Share with Google Groups such as `grade9-team` or `hs-admin`, so access follows the job.
3. **Two people can always fix it.** Every tool has an owner and a backup, and both can manage the shared drive.
4. **The build is written down.** The prompts, the code, and the setup steps are saved with the tool.
5. **It is on the register.** The district keeps one list of every tool, where it lives, and who is responsible.

## Where each piece must live

* **Data Sheet:** in the tool's shared drive folder. The Apps Script code attached to the Sheet travels with it.
* **Google Form:** in the same folder.
* **Google Site:** in the same folder. Sites can be moved into a shared drive like any other file.
* **Build notes:** a Google Doc in the same folder holding the final prompts and a copy of the final code.
* **User guide:** a one page Google Doc in the same folder.

### What does not carry over on its own

* **Gemini chats and Canvas builds** stay in the builder's own Gemini history. Copy the final prompts and final code into the Build notes Doc.
* **Gems** belong to the person who made them. Keep the Gem instructions in the Build notes Doc so anyone can recreate it.
* **Anything in My Drive** can be deleted with the account. Move it to the shared drive.
* **Timed triggers in Apps Script** run as the person who created them and stop when that account closes. Avoid them, or list them in the Build notes so the next owner can recreate them.

## Folder template

Create one folder per tool inside a shared drive named for the school or department.

```text
Shared drive: Oakhaven HS Staff Tools
  Flex Scheduling Dashboard
    01 Data (Google Sheet, with the Apps Script attached)
    02 Intake Form
    03 Site
    04 Build Notes (prompts, code copy, deployment settings)
    05 User Guide
    06 Archive
```

## Shared drive roles

* **Manager:** the owner, the backup, and one IT contact. At least two people at all times.
* **Content manager:** staff who maintain the data.
* **Viewer or Commenter:** everyone else, through a Google Group.

## What goes in the Build Notes Doc

1. What the tool is for, in two sentences
2. Who uses it and who owns the data
3. The Sheet tabs and what each column means
4. Who can edit which tab (the protection settings)
5. The final prompts used to build it, in order
6. A copy of the final `Code.gs` and `Index.html`
7. Deployment settings: Execute as, Who has access, and the web app address
8. How to make a change and redeploy
9. Known limits and things to check each semester
10. Change log: date, what changed, who changed it

### Prompt: have Gemini write the Build Notes

Run this in the chat where you built the tool.

```text
Write the Build Notes for this tool so a colleague with no coding background could take it over.
Include: what the tool is for, who uses it, the Sheet tabs and columns, the final prompts we used in order, the deployment settings, how to make a change and redeploy, and a short troubleshooting list.
Use plain language and numbered steps. Leave a blank change log table at the end.
```

## Deployment choices that survive staff changes

* Deploy the web app with **Execute as: User accessing the web app**. It does not depend on the builder's account to read the data.
* Avoid **Execute as: Me**. The tool then runs on one person's permissions and breaks when that account is suspended.
* After any change of owner, open the tool as a regular user and confirm it still loads. If it does not, the new owner creates a new deployment and updates the Site embed.

## The tool register

One Google Sheet for the district or school, kept by IT or the tool approver. One row per tool:

* Tool name
* Purpose
* School or department
* Owner (role and name)
* Backup (role and name)
* Shared drive folder link
* Site link
* Data type: none, staff, or student records
* Who has access (group names)
* Date launched
* Last reviewed
* Status: active, needs owner, retired

## Handoff checklist: when the owner changes roles or leaves

* [ ] New owner and backup are named in the register
* [ ] New owner is a Manager on the shared drive
* [ ] Every file for the tool is in the shared drive folder, with nothing left in My Drive
* [ ] Build Notes are current, including the latest prompts and code copy
* [ ] The departing person walks the new owner through one change and one redeploy
* [ ] Tab protection and sharing lists are reviewed and the departing person is removed
* [ ] The tool is opened as a regular user and works
* [ ] IT confirms nothing for this tool depends on the departing account before it is closed

## For IT: the safety nets

* Limit who can create shared drives if needed, and make sure staff builders have one to use.
* Before deleting any account, use the Admin console to transfer that user's Drive files to a manager.
* Review the tool register each semester. Any tool marked "needs owner" gets one or gets retired.
* Retire tools on purpose: unpublish the Site, move the folder to Archive, and note it in the register.

## Each semester

* [ ] Owner and backup are still correct
* [ ] Access groups are still correct
* [ ] The tool still solves a real problem. If not, retire it.
* [ ] Build Notes match what is actually deployed
