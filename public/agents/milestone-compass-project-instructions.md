# CLAUDE.md: Standards-Aligned Practice Platform (Planning Doc)

> **Status: demo UI, pivoted toward "Milestone Compass" 2026-08-18.**
> `index.html` + `app.js` + `data.js` are a working, click-through prototype
> covering both the original student flow and a first slice of Milestone
> Compass's vision (real Domain→Standard→Element hierarchy, Georgia's 4
> achievement levels, mastery-state growth tracking, a teacher dashboard, and
> a simplified adaptive practice mode), still vanilla JS, zero build step, no
> backend. Every integration in the "External Standards / Integrations"
> section is still a stand-in: `data.js` is 100% hand-authored sample content
> (real-looking Georgia standard codes/domains/elements, ~34 hand-written
> questions), not a live OneRoster/CASE/QTI feed, and login is a name-only
> stand-in for real district auth/LTI, see that file's header comment.
> Update this file as decisions get made, replace "OPEN QUESTION" markers
> with actual answers as they're resolved, don't leave stale placeholders
> once a decision is made.

## Running the First Draft
```bash
cd standards-practice-platform
python3 -m http.server 5173
# → http://localhost:5173
```
No build step. `index.html` loads `data.js` then `app.js` via plain `<script>`
tags. Progress/practice-set history is tracked client-side in
`localStorage` (keys prefixed `spp.`), there is no backend and no per-district
data isolation yet (see Compliance section below before this goes anywhere
beyond a local demo).

## What the First Draft Actually Does
Implements the full flow in "Core User Flow" below, plus the three requests
added after the initial planning pass:
- **Webb's Depth of Knowledge (DOK 1 to 4)** is a first-class property of every
  question (not of a standard, a standard can be assessed at any DOK level).
  The builder lets a student filter by DOK level; badges, chart colors, and
  the "My Progress" DOK breakdown all use a fixed 4-color mapping (blue/
  orange/aqua/yellow) independent of any future district branding, the same
  "fixed identity color, never brand-tied" pattern the sibling GOSA repo uses
  for its Elementary/Middle/High chart colors.
- **Per-choice explanations after grading**: every multiple-choice and
  select-all-that-apply question shows a ✓/✗ explanation under *every*
  option (not just the one picked) once submitted, why the correct answer
  is correct and why each distractor is wrong. Fill-in-the-blank shows the
  accepted answer + explanation; matching shows a correct-pair explanation
  per row. All four question formats (`mc`, `multiselect` as the
  technology-enhanced type, `fill`, `matching`) are implemented and gradable.
- **A disabled "Related skill" stub** appears after every graded question
  (labelled "coming soon"), the intentional placeholder for the future
  short-instructional-material link called for in the original ask; it does
  not link anywhere yet.
- **Short-set framing, not backend-enforced**: the builder defaults to 5
  questions, offers 1/3/5/10 quick-picks plus a custom count, and shows a
  soft advisory (not a hard cap) above 15 questions, "best testing
  practice" is nudged via UI copy, per the user's explicit "we don't want
  200-question tests" direction, not by refusing a large count outright.
- **Progress tracking** persists per-standard and per-DOK-level
  correct/total counts across practice sets (`localStorage`, single-browser,
  not per-student-account, see Compliance), rendered as horizontal bar
  charts on "My Progress" (sequential blue for by-standard magnitude, fixed
  DOK colors for by-DOK identity) plus a session history table.

**Known limitation to flag if this demo is shown live**: the "generate
practice set" step samples from the small hand-authored bank in `data.js` , 
if a selected standard/DOK/format combination has no matching sample
question, the UI says so honestly ("no sample questions match... in this
demo") rather than fabricating one. This is a deliberate stand-in for
whatever the real generation approach ends up being (see Open Questions
Ledger), don't mistake the demo bank for real coverage.

## What the "Milestone Compass" Pivot Added (2026-08-18)
After sharing the Milestone Compass spec (see Design Reference below), the
user chose to pivot toward its fuller vision rather than stay a student-only
tool, see the approved plan at
`~/.claude/plans/declarative-cuddling-pebble.md` for the full
implementation plan. What actually landed:

- **Standards ontology**: `STANDARDS` in `data.js` is now real
  Domain → Standard → Element shape (`{domain, code, description, crosswalk,
  elements:[{id, description}]}`), matching CASE 2.0's own hierarchy. Every
  question carries an `element` tag, not just a `standard`. Georgia Social
  Studies standards carry no `crosswalk` (state-specific, no national
  framework equivalent), same as Milestone Compass's own SS6G1 example.
- **Achievement levels**: `ACHIEVEMENT_LEVELS` in `data.js` reuses Georgia's
  real 4 Milestones level *names* (Beginning/Developing/Proficient/
  Distinguished Learner) and Milestone Compass's exact colors, but the
  `minPct` thresholds are **this demo's own illustrative binning of raw
  practice-set accuracy, not GA's official Milestones cut scores**, which
  come from a secure standard-setting study on scaled test scores and can't
  be legitimately reproduced here. This caveat is in `data.js`'s header
  comment and should stay visible anywhere achievement levels are surfaced.
- **Mastery state**: `computeMasteryState()` in `app.js` derives one of
  **Not Yet Practiced / Still Building / Mastered** (4+ attempts and ≥80%)
  from real accumulated `standardStats`. Deliberately *not* named the same
  as any achievement level, Milestone Compass's own spec reuses "Developing"
  for both an achievement level and a growth state, which reads as
  confusing in a UI; this project picked distinct wording instead of
  reproducing that collision.
- **Teacher Dashboard**: a new `view-teacher` screen (entry point: "Viewing
  as a teacher instead?" link on the login screen) shows a real student ×
  standard heatmap, colored by achievement level. It only ever lists local
  demo student profiles that have actually practiced a given course in this
  browser, an unpracticed course renders an honest empty state, never a
  placeholder roster.
- **Multi-student storage**: progress moved from flat `spp.*.v1` keys to a
  single `spp.progress.v2` object keyed by student slug
  (`{[slug]: {displayName, sessions, standardStats, dokStats}}`), so
  switching students (existing "Switch" link) produces real separate
  profiles for the teacher view to read. This was a clean break, not a
  migration, no real user data existed to preserve.
- **Simplified adaptive practice mode**: an "Adaptive practice (beta)"
  toggle in the builder, captioned in the UI itself as a simplified
  heuristic (steps DOK up/down by 1 based on the last answer, starting at
  DOK 2), explicitly **not** real IRT/CAT. True IRT calibration needs real
  response data at a scale this demo doesn't have; building a fake
  "calibrated" engine would contradict the very fairness principle Milestone
  Compass itself states ("difficulty is a calibrated IRT parameter, fitted
  from real response data, not an author's guess"). The quiz badge row shows
  the live DOK-step reasoning ("stepped up, last answer correct") so the
  mechanism stays visible rather than a black box.
- **Explicitly still out of scope** (not silently dropped, see the Open
  Questions Ledger): real IRT parameter calibration/CAT ability estimation,
  district/school rollups with small-n suppression (needs real
  multi-school-scale data), a DIF review workflow, real accessibility
  infrastructure, and growth-percentile (SGP) trend modeling.

## Design Reference: "Milestone Compass" Spec
A companion product/technical spec artifact, "Milestone Compass"
(shared 2026-08-18), sketches a larger, adjacent vision: a full adaptive,
IRT-calibrated Georgia Milestones (EOG/EOC) testing platform with teacher and
district personas, not just the student practice tool this repo currently
builds. Treat it as a design reference to pull ideas from deliberately, not
as a backlog to build wholesale, it's a much bigger scope (adaptive CAT
engine, IRT item calibration, district rollups) than anything scoped here so
far. What's actually worth carrying into this project's design:

- **Standards hierarchy is Domain → Standard → Element**, not a flat list , 
  items tag to the Element, the most specific unit GSE defines. This lines up
  well with how CASE 2.0 itself models standards (hierarchical CFItems with
  parent/child associations), so it's a validation of the CASE integration
  plan, not a conflict with it, when the real CASE pull happens, preserve
  the full hierarchy rather than flattening to a single code+description
  (which is all `data.js`'s sample standards currently carry).
- **A crosswalk field** (GSE code ↔ CCSS/NGSS equivalent) so content survives
  a standards revision instead of needing a rebuild, worth adding to
  whatever the real CASE-sourced standard record looks like.
- **Georgia's real 4 achievement levels** (Beginning / Developing /
  Proficient / Distinguished Learner) are a *different axis* from this
  project's DOK tagging: DOK is a per-question cognitive-complexity property
  (already implemented here), achievement level is an aggregate proficiency
  band a student sits in. They're complementary, not competing, if
  aggregate proficiency reporting is ever added here, reuse Georgia's own
  4 level names/definitions rather than inventing a parallel scale, same
  reasoning the spec gives.
- **Growth as mastery state** (Mastered / Developing / Not yet introduced)
  and a Student-Growth-Percentile-style "improved relative to your own
  baseline" framing is richer than this project's current "My Progress"
  view, which only shows raw cumulative % correct per standard. Worth
  revisiting once there's enough real session history to make a trend
  claim meaningful.
- **A teacher dashboard (student × standard heatmap)** is a persona this
  project hasn't scoped at all yet, everything built so far is
  student-facing only. If teacher/district-facing reporting becomes a real
  goal, it's a separate, sizable phase, not an incremental add to the
  current builder/quiz/progress flow.
- **District rollup with GOSA-style small-n suppression** (a cell below a
  minimum-n threshold is shown as suppressed, never estimated or
  interpolated) is the same real-data discipline the sibling GOSA analytics
  repo already follows, reinforces this workspace's general rule (see
  "Generating fake school data" in that repo's CLAUDE.md ledger) rather than
  introducing a new principle.
- **Fairness/integrity practices** (DIF review before an item goes live,
  accessibility as a first-class item-bank property rather than a bolted-on
  mode, no fabricated/interpolated figures anywhere, low-n sessions treated
  as low-confidence rather than feeding high-stakes decisions) are good
  defaults to hold this project to as soon as real student data is involved
, see the Compliance section above.
- Its own footer explicitly flags the GSE codes it shows as illustrative,
  not verified against the live GADOE publication, the same honesty
  convention `data.js`'s header comment already uses here.

**Decided 2026-08-18**: pivot toward Milestone Compass's fuller vision (see
"What the Milestone Compass Pivot Added" above for what's actually built).
Real IRT calibration and district rollups remain explicitly out of scope , 
they need real response/enrollment data at a scale no demo can honestly
fake, and stay tracked in the Open Questions Ledger rather than silently
dropped.

## One-Sentence Description
A white-labelable (per school district) web platform where a student logs in,
sees their real class roster (synced via 1EdTech OneRoster 1.2), opens a
course to see the Georgia standards it covers (pulled from Georgia's CASE 2.0
network), picks a handful of those standards, and generates a custom practice
question set (count + question type of their choosing) aligned to exactly
those standards, with vendor-supplied QTI question banks and LTI tool
launches as the two ways real question/assessment content gets into the
system.

## Core User Flow
1. **Student logs in.** Auth identity must map to a real student record so
   step 2 works, see Auth (OPEN QUESTION) below.
2. **Student sees their classes.** The class list is not hand-entered; it
   comes from a **OneRoster 1.2** sync (courses, sections, class rosters/
   enrollments) run against the district's SIS-connected OneRoster provider.
   What the student sees (subject/content area, course title) is exactly
   what OneRoster imported for them, no fabricated or hardcoded course
   catalog, matching this org's existing house rule of never inventing data
   the platform doesn't actually have.
3. **Student picks a class** (e.g. a specific Social Studies, Science, Math,
   or Language Arts section they're enrolled in).
4. **Student sees the standards for that course**, pulled from the
   **CASE 2.0** standards tree for Georgia, sourced from Georgia's own CASE
   server: https://case.georgiastandards.org/ (link supplied by user;
   confirm the exact CASE REST endpoint / document UUIDs once available , 
   see Standards Source below). The course→standards mapping itself is an
   open design question (see below) since OneRoster doesn't carry standards
   alignment on its own.
5. **Student selects 3 to 4 standards** (exact min/max still to be nailed down
   with the user, "three or four" was said descriptively, confirm before
   hardcoding a limit) from that course's standards list.
6. **Student configures the question set**:
   - **Count**: any number they choose (1, 3, 5, 10, ..., free entry, not a
     fixed preset list).
   - **Standards**: the ones selected in step 5, every generated question
     must be traceable to one of the selected standards, not just "roughly
     the same unit."
   - **Question style/format**: student picks from the available item types
, multiple choice, fill-in-the-blank, matching, and other traditional
     types, plus **technology-enhanced items** (drag-and-drop, hot-spot,
     multi-select, ordering, etc., the modern QTI item-type vocabulary).
7. **Platform generates (or assembles) the question set** aligned to the
   selected standards and requested format(s), and presents it to the
   student.

## External Standards / Integrations This Platform Must Speak
All four of these are real 1EdTech (formerly IMS Global) specs, this
section exists so no future session reinvents a homegrown version of
something that already has a standard.

### 1. OneRoster 1.2 (1EdTech)
- **Purpose**: source of truth for the student's real classes, courses,
  class sections, enrollments, and org/school hierarchy, so "what classes
  does this student see" is never hand-entered.
- **Direction**: this platform is a OneRoster *consumer* (pulls roster data
  in), not a provider, unless a future requirement needs this platform to
  expose grades/rostering back out.
- **Transport**: OneRoster 1.2 supports both a CSV bulk-export mode and a
  REST/JSON API mode, confirm with the user (or with each district's SIS
  vendor, e.g. Infinite Campus, PowerSchool) which mode their OneRoster
  provider actually exposes before building the sync job.
- **OPEN QUESTION**: sync cadence (nightly batch vs. on-demand at login) and
  which OneRoster endpoint/provider each pilot district uses.

### 2. QTI (vendor-supplied question content)
- **Purpose**: accept QTI packages/files from third-party content vendors,
  scoped per course/content area, as one source of real question bank
  content (distinct from platform-generated questions in step 7 above).
- **OPEN QUESTION**: which QTI version, **QTI 3.0** is 1EdTech's current
  spec (item-type vocabulary lines up with "technology-enhanced questions"
  called out in the flow above) vs. the still-widely-deployed **QTI 2.1/2.2**
  many vendors still export. Confirm which version(s) the actual vendor
  exports use before writing a parser, may need to support both.
- Needs: a QTI import/validation pipeline, and a mapping from each imported
  item to the CASE standard(s) it's aligned to (vendor QTI packages
  sometimes carry standards metadata inline, sometimes don't, don't assume).

### 3. LTI (most recent 1EdTech connector)
- **Purpose**: stated as a hard requirement, "we need to use 1EdTech's most
  recent LTI connection connector." The current spec generation is
  **LTI Advantage / LTI 1.3** (built on OAuth2/OIDC, replacing legacy
  LTI 1.1), confirm this is what's meant before building against it.
- **OPEN QUESTION, direction matters and wasn't specified**: does this
  platform act as an **LTI Tool** (launched *from* a district's LMS, e.g.
  Canvas/Schoology, receiving the student identity + course context via LTI
  launch, this would also answer the Auth open question below), or as an
  **LTI Platform** (launching *out to* third-party vendor tools for content),
  or both? This changes the architecture significantly, resolve before
  building.

### 4. CASE 2.0 (Competencies and Academic Standards Exchange)
- **Purpose**: source of the actual Georgia standards students pick from,
  and the alignment target every generated/imported question must map to.
- **Source**: Georgia's CASE server, https://case.georgiastandards.org/
  (URL supplied by user 2026-08-18; treat as authoritative once confirmed
  live, fetch and record its actual CASE REST API base path, e.g.
  `/ims/case/v1p0/...`, and which CFDocuments/subjects are published there,
  before building against it).
- CASE exposes standards as a hierarchical tree (CFDocument → CFItems, with
  parent/child associations), the course→CFDocument mapping (i.e. "this
  OneRoster course = this CASE document/subject/grade") is **not** handed to
  us by either spec automatically and needs its own mapping table, keyed
  probably off OneRoster's course subject/title conventions.

## Question Generation: Design Notes (not yet decided)
- **Format coverage needed**: multiple choice, fill-in-the-blank, matching,
  plus technology-enhanced types (drag-and-drop, hot-spot, ordering,
  multi-select, etc.), this list should end up as literal QTI 3.0
  interaction types if QTI 3.0 is adopted (see above), so generated
  questions can be exported/stored in the same format as vendor QTI content
  rather than a bespoke schema.
- **OPEN QUESTION**: how are questions actually generated? Options implied
  by the ask but not decided: (a) LLM-generated on the fly per
  standard+format+count, (b) drawn/assembled from the vendor QTI item banks
  imported in integration #2, or (c) a hybrid (LLM generates, vendor bank
  used when a matching item already exists). This is probably the single
  biggest architecture decision in the whole project, resolve early.
- Every generated question must carry an explicit link back to the specific
  CASE standard GUID it was generated for, no "close enough" alignment,
  consistent with this workspace's broader house rule of never presenting
  fabricated/approximate data as if it were sourced.

## Branding / Multi-District
Confirmed reusable pattern from the sibling GOSA analytics repo
(`~/Claude`): a `data-brand` attribute + CSS custom property
token set (`--brand-primary/secondary/accent/bg/surface/text-primary/
text-secondary/border/font`) let one static app re-skin per organization
without a build step. Whether that same lightweight approach is right here
(vs. this platform needing real per-tenant auth/data isolation, which is a
backend concern the GOSA app never had) is an **OPEN QUESTION**, this app
has actual student PII and login, which the GOSA app does not.

## Compliance: Read Before Building Auth or Storage
This platform holds real student identities, real class enrollment, and
real per-student question/response data, **this is a materially different
compliance posture than the sibling GOSA analytics repo**, which only ever
touches public aggregate school-level data. FERPA applies. Before any auth
or database design work starts:
- Data minimization: store only what OneRoster/LTI actually hand over.
- No student PII in logs, error messages, or any future public/demo
  deployment (the GOSA repo's GitHub Pages live-demo pattern must **not**
  be reused here without an explicit, separate decision).
- Confirm each pilot district's data-sharing agreement covers this platform
  before syncing real roster data from their SIS.

## Open Questions Ledger
Track unresolved decisions here as they come up, so nothing gets silently
assumed. Move an item out of this list (into the relevant section above)
once it's actually answered.
- [ ] Exact CASE 2.0 REST endpoint(s)/credentials for
      case.georgiastandards.org (user said they'd add the link/details here).
- [ ] QTI version: 3.0, 2.1/2.2, or both.
- [ ] LTI role: Tool, Platform, or both.
- [ ] Auth provider / identity source (district SSO? LTI launch? separate
      login?), depends on the LTI role decision above.
- [ ] Question generation approach: LLM-generated, vendor-QTI-assembled, or
      hybrid.
- [ ] Standard-selection bounds: is 3 to 4 standards a hard cap or just typical?
- [ ] OneRoster transport: CSV bulk export vs. REST API, per district.
- [ ] Course → CASE CFDocument mapping strategy.
- [ ] Tech stack / hosting (nothing chosen yet, this file predates any code).
- [x] ~~Scope: grow toward Milestone Compass or stay student-only?~~ , 
      Decided 2026-08-18: pivot toward the fuller vision. See "What the
      Milestone Compass Pivot Added" above.
- [ ] Real IRT parameter calibration / true CAT ability estimation, needs
      real response data at scale this demo doesn't have.
- [ ] District/school rollups with small-n suppression, needs real
      multi-school-scale data; not meaningful with a handful of local demo
      students in one browser.
- [ ] DIF review workflow, real accessibility infrastructure, and
      growth-percentile (SGP) trend modeling, process/infrastructure pieces
      noted as future work, not faked.
- [ ] Achievement-level `minPct` thresholds in `data.js` are this demo's own
      illustrative binning, if real Milestones cut-score bands ever become
      available, replace them rather than presenting the current values as
      official.
