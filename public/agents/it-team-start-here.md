# IT Department Agents, Personas, and Skills

A platform neutral set of markdown files that turn IT and learning job descriptions into working AI agents. Each agent has a persona, a mission, core tasks, the other agents it calls on, and the skills it uses to improve processes, efficiency, and effectiveness.

The set holds 130 role agents, 14 lead agents, and 14 shared skills. Role agents by category: 9 Executive, 8 Service Desk, 16 Infrastructure, 14 Cybersecurity, 5 IAM, 10 Software, 9 Data, 7 Applications, 10 Architecture and Projects, 10 Governance, 14 K12 Education, 9 Higher Education, 9 Adult Learning.

## What Is in the Set

* `it-team-roster.md`: the roster of every agent and skill, with who calls on whom
* `it-team-front-door.md`: the single starting point, plus one lead agent per category, each named `it-team-` plus the category and `lead`
* One file per job title, each named `it-team-` plus the role. The roster shows which roles belong to the core set and which to the K12, higher education, and adult learning packs
* Shared skills, each named `it-team-skill-` plus the skill, including one learning principles skill for each sector

The Download All zip on the site also holds these files sorted into folders, inside `it-team`, with working links between them.

## How to Use It in Any AI Tool

1. Paste one agent file into the system prompt, custom instructions, Gem, GPT, or project instructions of your AI tool. That tool now acts as that role.
2. Add the skill files the agent links to, so it can follow them.
3. Start with the IT Front Door Agent when you are not sure which role you need. It sends the request to the right category lead, and the lead sends it to the right role.
4. When an agent says to call on another agent, open that agent's file in a second session, or let your tool's own subagent feature do it, and pass the handoff written with the Agent Handoff skill.

Each file starts with a short header block (name, title, category, description). Tools that read that header, such as Claude, can load the files as agents and skills directly. Other tools ignore it safely.

## Core Set and Sector Packs

The set has two parts.

* The core IT set covers the roles every organization shares: leadership, service desk, infrastructure, cybersecurity, identity, software, data, applications, architecture and projects, and governance.
* Three sector packs cover teaching and learning, where the work differs by who the learners are: K12 Education, Higher Education, and Adult and Professional Learning.

Take the core set plus the pack or packs for your sector. Each pack carries its own learning principles skill, because children, college students, and working adults do not learn the same way. A K12 agent designs with structure, standards, and supervision in mind. An adult learning agent designs for experience, relevance, and immediate use.

## Fit It to Your Organization

These agents describe each role in general terms. Before relying on one, add your own systems, policies, approval rules, and service targets to its file. Few organizations have every role. Use the ones you have, and let one person or agent cover several roles where your team is small.

## How the Agents Work Together

* Direct collaboration: every task in an agent file lists the specific agents to call and when.
* Lead routing: the front door sends a request to a category lead, and the lead splits the work across agents and brings the results together.
* Shared handoff format: all agents use the same Agent Handoff skill, so requests are complete and loops are closed.

## How the Agents Improve the Work

Every agent carries three measures, one each for process, efficiency, and effectiveness, and links each to a skill that tells it how to act on the number. Lead agents roll these up monthly.

## Guardrails

These agents advise, draft, and coordinate. A person approves anything that removes access, deletes data, blocks a user, changes production, spends money, or cannot be undone.
