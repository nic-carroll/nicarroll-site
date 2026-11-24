# Data Update Checker

**Product:** Georgia Educational Analytics  
**Runs:** Once a week

> A scheduled agent playbook by Nic Carroll. This is the working outline of the agent's standing instructions, with private IDs removed.

## Job
Run the weekly data update checker for the state's public education data and record what changed.

## Every run
1. Run the checker script. It reads the state's public downloads page, downloads any file not already recorded, files it in the right category, and writes a summary report.
2. Raw data files stay out of version control on purpose. Only the manifest and the report are tracked.
3. Some older files are blocked at the source. The script tracks those with a retry cooldown. Do not try to get around the block.
4. If the manifest or report changed, commit with a message that says how many new files were found and in which categories. If nothing changed, do not commit.

## Report
How many new files were found and which categories and years they belong to, how many links are blocked at the source, and any gap in coverage that the source block does not explain, since that may be a real, fixable gap.
