# GitHub Actions CI/CD Workflows

This directory contains automated workflows for continuous integration and deployment.

## Workflows

### 🔄 CI Pipeline (`ci.yml`)

Runs on every push and pull request to the master branch. Includes:

- **Lint**: ESLint code quality checks
- **Validate Content**: JSON schema validation for content files
- **Build**: Production build verification
- **Smoke Tests**: Critical functionality checks including:
  - File existence verification
  - HTML structure validation
  - Asset reference integrity
  - JSON validity
  - Bundle size monitoring
- **Preview Server**: Tests that the built app serves correctly
- **Quality Gate**: Final check that all stages passed

### 🔍 PR Checks (`pr-checks.yml`)

Additional validation for pull requests:

- **PR Validation**: Title and size checks
- **Sensitive Data Scan**: Detects potential secrets in changes
- **Debug Statement Check**: Warns about console.log statements
- **Dependency Security**: npm audit for vulnerabilities
- **Code Quality Metrics**: Complexity and duplication analysis

## Local Testing

Before pushing, run the full check suite:

```bash
npm run check
```

This runs:
- ESLint
- Content validation

To test the build locally:

```bash
npm run build
npm run preview
```

## Setting Up Branch Protection

To enforce these checks on GitHub:

1. Go to **Settings** → **Branches**
2. Add a branch protection rule for `master`
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
4. Select required status checks:
   - `Lint Code`
   - `Validate Content Files`
   - `Build Application`
   - `Smoke Tests`
   - `Preview Server Test`
   - `Quality Gate`

## Monitoring

- **Build artifacts** are saved for 7 days
- Failed checks will block PR merges
- All checks must pass for the Quality Gate to succeed

## Troubleshooting

### Build fails locally but passes on CI
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node version matches CI (v20)

### Smoke tests failing
- Verify all critical files are in the build output
- Check that asset paths are correct
- Run `npm run build` and inspect `dist/` directory

### Content validation errors
- Check JSON syntax in `src/data/*.json`
- Verify required fields per schema in `scripts/validate-content.js`
