#!/usr/bin/env bash
# One time cost guardrails for project claude-503801. Run in Cloud Shell.
set -euo pipefail
PROJECT_ID="claude-503801"; REGION="us-east1"
gcloud config set project "$PROJECT_ID" >/dev/null

echo "Keeping only the 3 newest site images (older ones are deleted automatically)..."
cat > /tmp/policy.json <<'JSON'
[
  {"name":"keep-recent","action":{"type":"Keep"},"mostRecentVersions":{"keepCount":3}},
  {"name":"delete-old","action":{"type":"Delete"},"condition":{"olderThan":"7d"}}
]
JSON
gcloud artifacts repositories set-cleanup-policies web --location="$REGION" --policy=/tmp/policy.json --no-dry-run

echo "Removing the old Cloud Build trigger (GitHub Actions deploys now)..."
for t in $(gcloud builds triggers list --region="$REGION" --format='value(name)'); do
  gcloud builds triggers delete "$t" --region="$REGION" --quiet
done

echo "Done. Next: set a \$5 budget alert in Billing > Budgets & alerts."
