# nicarroll-site

My resume and project site. Hosted on Google Cloud Run in project `claude-503801`, redeployed automatically on every push to `main`.

## Update the resume

Everything on the page comes from **`public/resume.json`**. Edit it on GitHub (pencil icon), commit, and the site redeploys in about two minutes.

* `intro`: the big headline at the top
* `experience`: jobs, newest first
* `highlights`: the Impact section
* `projects`: the "Things I'm building" section. Set `"featured": true` on the one you want shown large with a live preview.
* `certifications`, `education`, `boards`, `skills`

The **Download resume** button serves `public/Nic_Carroll_Resume.pdf`, built in the original two column navy resume format from `resume-pdf/resume.html`. To change the PDF, edit the `R` data at the top of that file's script and run `python3 resume-pdf/build.py` (needs Playwright), then commit the new PDF.

## Host something you built

1. Put the files in `public/projects/<name>/` (needs an `index.html`; plain HTML, CSS, and JavaScript work as is; for React or Vite apps, commit the built `dist` output).
2. Add an entry to `projects` in `resume.json` with `"url": "/projects/<name>/"`.
3. Push. It is live at `https://<your-site>/projects/<name>/`.

`public/projects/example/` shows the pattern; delete it when you add your first real project.

## How deploys work

Every push to `main` runs `.github/workflows/deploy.yml` in GitHub Actions: it signs in to Google Cloud with keyless Workload Identity Federation (set up once by `setup-github-deploy.sh`), builds the container, deploys to Cloud Run, and checks the live site. Progress shows on the repo's **Actions** tab.

`cloudbuild.yaml` (manual fallback: `gcloud builds submit --config cloudbuild.yaml --region us-east1`) builds the container (`Dockerfile` + `nginx.conf`), pushes it to Artifact Registry, and deploys it to the Cloud Run service `nicarroll-site` in `us-east1`.

## One time Google Cloud setup

1. Open the [Cloud Console](https://console.cloud.google.com/welcome?project=claude-503801) and click the Cloud Shell icon (top right).
2. Run:
   ```bash
   git clone https://github.com/nic-carroll/nicarroll-site.git && cd nicarroll-site && ./setup-gcp.sh
   ```
3. Create the trigger: **Cloud Build > Triggers > Connect repository**, choose GitHub, sign in, pick `nic-carroll/nicarroll-site`. Then **Create trigger**: event *Push to a branch*, branch `^main$`, configuration *Cloud Build configuration file*, location `cloudbuild.yaml`, region `us-east1`, service account: the default compute service account.
4. Click **Run** on the trigger once for the first deploy. The site URL appears under **Cloud Run > nicarroll-site**.

## Custom domain (later)

When you buy a domain such as `nicarroll.org` (Cloudflare, Squarespace Domains, or Google Cloud Domains), map it in **Cloud Run > Manage custom domains**, or put Firebase Hosting in front of the service for free managed SSL.
