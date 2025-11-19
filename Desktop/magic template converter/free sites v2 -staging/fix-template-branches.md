# Template Branch Cleanup Instructions

## Current Status

✅ **Template v1 (site-template-1):**
- Local `dev` branch: DELETED ✅
- `main` branch: Fully synced with all changes ✅
- Remote `dev` branch: Still exists (can't delete - it's the default)

✅ **Template v3 (site-template-3):**
- Local `dev` branch: DELETED ✅
- `main` branch: Fully synced with all changes ✅
- Remote `dev` branch: Still exists (can't delete - it's the default)

## Required Action

Both repositories have `dev` set as the default branch on GitHub. To complete the cleanup:

### Option 1: Via GitHub Web Interface (Easiest)

For each repository (`site-template-1` and `site-template-3`):

1. Go to: https://github.com/Cash-Tows-Org/site-template-1/settings/branches
2. Under "Default branch", click the switch icon
3. Select `main` as the default branch
4. Click "Update"
5. Confirm the change
6. Repeat for `site-template-3`

Then run:
```bash
cd "template v1"
git push origin --delete dev

cd "../template v3"
git push origin --delete dev
```

### Option 2: Via GitHub API (Automated)

If you have a GitHub Personal Access Token with `repo` permissions, I can create a script to do this automatically.

## After Changing Default Branch

Once `main` is the default, the `dev` branches can be deleted remotely.

