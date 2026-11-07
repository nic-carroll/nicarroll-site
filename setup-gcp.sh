#!/usr/bin/env bash
# One time setup for project claude-503801.
# Run this in Google Cloud Shell (the >_ icon at the top of the Cloud Console).
set -euo pipefail

PROJECT_ID="claude-503801"
REGION="us-east1"
REPO="web"

gcloud config set project "$PROJECT_ID"

echo "Enabling services..."
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

echo "Creating the container registry..."
gcloud artifacts repositories describe "$REPO" --location="$REGION" >/dev/null 2>&1 || \
  gcloud artifacts repositories create "$REPO" --repository-format=docker --location="$REGION" \
    --description="Website images"

PROJECT_NUMBER=$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')
BUILD_SA="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"
CB_SA="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"

echo "Granting Cloud Build permission to deploy..."
for SA in "$BUILD_SA" "$CB_SA"; do
  for ROLE in roles/run.admin roles/iam.serviceAccountUser roles/artifactregistry.writer roles/logging.logWriter; do
    gcloud projects add-iam-policy-binding "$PROJECT_ID" --member="serviceAccount:${SA}" \
      --role="$ROLE" --condition=None --quiet >/dev/null 2>&1 || true
  done
done

echo "Done. Next: connect GitHub and create the trigger (see README, step 3)."
