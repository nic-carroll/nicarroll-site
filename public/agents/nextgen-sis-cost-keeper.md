# Cost Keeper

**Product:** NextGen SIS  
**Runs:** Every night, fifth in the chain

> A scheduled agent playbook by Nic Carroll. This is the working outline of the agent's standing instructions, with private IDs removed.

## Job
Keep the hosting cost shown to districts accurate and current.

## How the cost works
* One file holds every cloud list price used, each with its source page and the date it was checked.
* One file holds how much of each part a small, medium, and large district uses.
* A script computes every line and writes the estimate and the cost slides. Tests fail if the slides do not match the model.

## Every run
1. Design check: if hosting changed (instance sizes, servers kept on, billing mode, new services, storage, backups, regions), update the sizing to match and say why.
2. Price check, when it is due or the design changed: open each provider page and confirm every price and discount. Change only values confirmed on the provider's own page. Never guess. If a page cannot be read, keep the old value and say so.
3. Run the cost model and the tests. Render the cost slides and look at them.
4. If anything changed, open a pull request with a table of line, size, old, new, and the reason.

## Rules
Skip the price check when it is not due and nothing changed. One pull request per run.
