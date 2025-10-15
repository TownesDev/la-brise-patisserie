# 🤝 Contributing Guide

Welcome to **La Brise Pâtisserie** — a TownesDev project.  
We follow a **collaborative, branch-based workflow** with strict rules for consistency and code quality.

---

## 🧭 Core Principles

- **One feature = one branch.**
- **No direct pushes to `main`.**
- **All merges via Pull Request (PR).**
- **PRs must pass CI (lint, typecheck, build).**
- **Always rebase before merging.**

## 🪜 Workflow Overview

1. **Create a new branch** from `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/your-feature
   ```

2. **Commit changes with conventional messages**:

   ```c
    feat(ui): add cake card component
    fix(payments): resolve webhook validation error
    chore(ci): update lint workflow
   ```

3. **Push and open a PR against `main`**:
    - Assign reviewers.
    - Include screenshots or short Loom video for UI changes.
    - Link related issues.

   ```bash
    git push origin feat/your-feature
    ```

4. **Before Merging**:
    - Ensure all checks pass.
    - Rebase your branch on the latest main:

    ```bash
    git fetch origin
    git rebase origin/main
    ```

    - Resolve conflicts cleanly (see below).

## 🧩 Lockfile & Dependency Rule

- **Lockfile**: Always commit the `package-lock.json` or `yarn.lock` file.
- **Dependencies**: Use `npm install` or `yarn add` to manage dependencies.

If no dependency changes were made, prefer keeping main’s lockfile during conflict resolution.

After rebasing:

```bash
git checkout --theirs package-lock.json
git add package-lock.json
npm ci
```

## 🧹 Code Quality

- Run npm lint before committing.
- Run npm format to apply Prettier.
- Keep commits atomic and readable.
- Avoid large mixed “fix + feature” commits.

## 🧾 Review Standards

- At least one approving review required.
- Screenshots for UI or visual changes.
- PR description must state:
  - What changed
  - Why it was done
  - Any known caveats
  - Delete your branch after merge.

## 🚫 Main Branch Protection

main is protected:

- No direct pushes
- Require PRs
- Require CI status checks
- Require review before merge

## 🧁 Local Testing Checklist

- Lint passes (pnpm lint)
- TypeScript compiles (pnpm build)
- No console warnings in browser
- Core flows tested: browse → add to cart → checkout → review

## 🪪 Licensing

All contributions are under the [MIT License](../LICENSE).

> “Whimsy with discipline — fun doesn’t mean sloppy.” 💫
>
>— TownesDev
