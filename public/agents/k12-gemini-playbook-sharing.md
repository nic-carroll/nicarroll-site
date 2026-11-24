# Gemini Tool Builder Playbook: Data Owner Controlled Sharing

> Part of the Gemini Tool Builder Playbook for K12 by Nic Carroll. For staff using Google Workspace for Education. Practical guidance, not legal advice. Your district privacy lead owns the final reading of FERPA and state law.

## Three Layers, One Control Point

On the live path the tool runs as the person viewing it, so it can never show more than the Sheet allows. Remove a person from the Sheet and the tool shows them nothing.

### Layer 1, the Control Point: The Google Sheet

* Owner shares with named people or groups
* General access stays Restricted
* Viewers cannot download, print, or copy
* Sensitive columns live on a separate tab

### Layer 2: The Tool

* Apps Script web app attached to the Sheet
* Execute as: User accessing the web app
* Access: people in the district only
* Never "Execute as me" for student data

### Layer 3: The Google Site

* Published to named people or the district
* Never public on the web
* A front door only. It grants no data access

## Let Each Group Edit Only Its Part

Use this for course teams, grade level teams, administrators, and school teams that share one dashboard. All of it is set with Google Sheets sharing, with no extra tools.

1. Give each dashboard section its own tab in the Sheet.
2. Share the Sheet: people who only read get Viewer, people who add anything get Editor.
3. On each tab choose Data, then Protect sheets and ranges, then Restrict who can edit this range.
4. Pick the people or Google Groups allowed to edit that tab.
5. In Share settings, turn off "Editors can change permissions and share."
6. Deploy the tool to run as the user accessing it. It then follows those rules for every visitor.

### Example Access Plan

| Sheet tab | Team lead | Team members | Administrators |
|---|---|---|---|
| Links | Edit | View | View |
| Focus | Edit | View | Edit |
| Tasks | Edit | Edit | View |
| Dates | Edit | View | Edit |
| Notes | Edit | Edit | View |
| Ideas | Edit | Edit | Edit |

Tab protection controls editing, not viewing. Anyone the Sheet is shared with can read every tab, so keep sensitive data in a separate Sheet.

## Owner Checklist Before Launch

- [ ] The Sheet is shared only with named people or Google Groups
- [ ] General access on the Sheet is Restricted
- [ ] Viewers and commenters cannot download, print, or copy
- [ ] The web app runs as the user accessing it
- [ ] Web app access is limited to people in the district
- [ ] The published Site is restricted, not public
- [ ] A person with access opened the page and saw the data
- [ ] A person without access opened the page and saw no data
- [ ] Owner, backup person, and review date are recorded
