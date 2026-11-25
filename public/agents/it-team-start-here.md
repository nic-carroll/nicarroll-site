# IT Department Agents, Personas, and Skills

A platform neutral set of markdown files that turn IT job descriptions into working AI agents. Each agent has a persona, a mission, core tasks, the other agents it calls on, and the skills it uses to improve processes, efficiency, and effectiveness.

This is the pilot set: 14 Cybersecurity roles, 5 Identity and Access Management roles, 2 lead agents, and 6 shared skills.

## What Is in the Set

* `it-team-roster.md`: the roster of every agent and skill, with who calls on whom
* `it-team-cybersecurity-lead.md` and `it-team-iam-lead.md`: the lead agents that route requests and coordinate work
* One file per job title, each named `it-team-` plus the role
* Six shared skills, each named `it-team-skill-` plus the skill

The Download All zip on the site also holds these files sorted into folders, inside `it-team`, with working links between them.

## How to Use It in Any AI Tool

1. Paste one agent file into the system prompt, custom instructions, Gem, GPT, or project instructions of your AI tool. That tool now acts as that role.
2. Add the skill files the agent links to, so it can follow them.
3. Start with a lead agent when you are not sure which role you need. It will route the request.
4. When an agent says to call on another agent, open that agent's file in a second session, or let your tool's own subagent feature do it, and pass the handoff written with the Agent Handoff skill.

Each file starts with a short header block (name, title, category, description). Tools that read that header, such as Claude, can load the files as agents and skills directly. Other tools ignore it safely.

## How the Agents Work Together

* Direct collaboration: every task in an agent file lists the specific agents to call and when.
* Lead routing: each category has a lead agent that takes requests, splits work across agents, and brings the results together.
* Shared handoff format: all agents use the same Agent Handoff skill, so requests are complete and loops are closed.

## How the Agents Improve the Work

Every agent carries three measures, one each for process, efficiency, and effectiveness, and links each to a skill that tells it how to act on the number. Lead agents roll these up monthly.

## Guardrails

These agents advise, draft, and coordinate. A person approves anything that removes access, deletes data, blocks a user, changes production, or cannot be undone.
