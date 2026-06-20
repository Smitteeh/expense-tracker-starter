# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React expense tracker starter. Application code lives in `src/`:

- `src/main.jsx` mounts the React app.
- `src/App.jsx` contains the main expense tracker UI and state logic.
- `src/App.css` and `src/index.css` hold component and global styles.
- `src/assets/` stores static assets imported by React components.
- `public/` stores static files served directly by Vite.

There is currently no dedicated `tests/` directory. Add tests beside the component they cover or under `src/__tests__/` if test coverage is introduced.

## Build, Test, and Development Commands

Run these commands from the repository root:

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local Vite development server, usually at `http://localhost:5173`.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally for verification.
- `npm run lint` runs ESLint across the project.

No `npm test` script is configured yet.

## Coding Style & Naming Conventions

Use modern React with functional components and hooks. Keep component names in PascalCase, such as `ExpenseList`, and use camelCase for variables, functions, and event handlers, such as `handleDeleteExpense`.

Use two-space indentation in JSX, JavaScript, and CSS. Prefer clear, small functions over large inline blocks, especially in `App.jsx`. Keep styling class names descriptive and tied to UI intent, for example `.expense-form` or `.summary-total`.

ESLint is configured in `eslint.config.js`; run `npm run lint` before submitting changes.

## Testing Guidelines

No testing framework is installed. If tests are added, prefer Vitest with React Testing Library because this project already uses Vite and React. Name test files with `.test.jsx`, for example `App.test.jsx`, and focus on user-visible behavior: adding an expense, deleting an expense, validating inputs, and calculating totals.

## Commit & Pull Request Guidelines

The git history currently contains only `Initial commit`, so no detailed commit convention has been established. Use short, imperative commit messages, for example `Add expense validation` or `Improve summary styling`.

Pull requests should include a concise description, screenshots for UI changes, steps to test locally, and any linked issue or course task. Mention known limitations if a change intentionally leaves cleanup or follow-up work.

## Security & Configuration Tips

Do not commit `node_modules/`, build output, local logs, or secrets. Keep dependency updates intentional, and review `npm audit` output before applying automated fixes that may change major versions.
