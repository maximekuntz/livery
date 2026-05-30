# Releasing Livery

This guide explains how to publish a new version of `@maximekuntz/livery` to GitHub Packages.

The repository is configured to publish automatically when a GitHub Release is published.

## How Publishing Works

- The workflow at `.github/workflows/publish.yml` runs on `release: published`.
- It checks that the release tag version matches `package.json`.
- It runs `npm ci` and then `npm publish` to `https://npm.pkg.github.com`.
- `prepublishOnly` runs `npm run build`, so the package is built before publishing.

## Preconditions

Before releasing:

- You are on branch `main` with the latest changes merged.
- CI is green for the commit you want to release.
- `package.json` version is updated to the target version.
- Changes for that version are merged and ready.

## Versioning Rules

Use semantic versioning:

- Patch: bug fixes (`0.1.2` -> `0.1.3`)
- Minor: backward compatible features (`0.1.2` -> `0.2.0`)
- Major: breaking changes (`0.1.2` -> `1.0.0`)

Important:

- The GitHub release tag must be `v<package.json version>`.
- Example: if `package.json` is `0.1.3`, the tag must be `v0.1.3`.

## Step-by-Step Release Process

1. Update version in `package.json`.
2. Run checks locally:

```bash
npm install
npm run test
npm run build
```

3. Commit and push version changes to `main`.
4. In GitHub, open the repository Releases page and create a new release.
5. Set:
   - Tag: `vX.Y.Z` (must match `package.json` version)
   - Target: `main`
   - Release title: `vX.Y.Z`
   - Notes: summary of changes
6. Click Publish release.
7. Wait for the `Publish to GitHub Packages` workflow to complete.

## Verify the Publish

After workflow success:

- Confirm new package version appears in GitHub Packages for `@maximekuntz/livery`.
- Smoke test in a consumer app:

```bash
npm install @maximekuntz/livery@X.Y.Z
```

- Verify components and `dist/livery.css` import as expected.

## Troubleshooting

### Release tag mismatch error

Symptom: workflow fails with a message that the release tag does not match package version.

Fix:

1. Ensure `package.json` has the intended version.
2. Ensure release tag is exactly `v<that version>`.
3. Delete and recreate the release/tag if needed.

### Publish/authentication failure

Symptom: `npm publish` fails in Actions.

Fix:

- Confirm workflow permissions include `packages: write`.
- Confirm package name scope and registry settings are unchanged.
- Re-run the workflow after correcting config.

## Quick Checklist

- [ ] Version bumped in `package.json`
- [ ] Local tests pass
- [ ] Local build passes
- [ ] Changes merged to `main`
- [ ] GitHub Release tag is `vX.Y.Z`
- [ ] Publish workflow completed successfully
- [ ] New version verified in GitHub Packages