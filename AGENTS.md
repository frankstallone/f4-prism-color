# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router routes (`page.tsx`, `layout.tsx`, route folders like `palettes/[id]/edit`).
- `components/`: Shared UI components, including `components/ui/` primitives (Base UI-based).
- `src/engine/`: Palette/scale generation logic and algorithms.
- `src/lib/`: Client utilities (e.g., palette persistence).
- `src/store/`: Zustand state stores.
- `public/`: Static assets.
- `app/globals.css`: Tailwind v4 styles and global utilities.

## Build, Test, and Development Commands

- `npm run dev`: Start the Next.js dev server.
- `npm run build`: Production build (type-check + bundle).
- `npm run start`: Run the production server after build.
- `npm run lint`: Run ESLint.
- `npm run test`: Run Vitest test suite once.
- `npm run test:watch`: Watch mode for Vitest.
- `npm run format`: Prettier format all files.

## Coding Style & Naming Conventions

- TypeScript + React 19 + Next.js 16. Use modern React patterns and hooks.
- Formatting is enforced by Prettier and ESLint; follow existing style (2‑space indent, single quotes, no semicolons).
- Component names use `PascalCase`; hooks use `useSomething`.
- App Router files follow Next.js conventions (`page.tsx`, `layout.tsx`).
- Prefer shared UI primitives in `components/ui/` before adding new patterns.

## Testing Guidelines

- Tests use Vitest; current tests live in `src/engine/__tests__/`.
- Naming: `*.test.ts` (e.g., `palette.test.ts`).
- Add tests for engine logic changes and ensure `npm run test` is green.

## Commit & Pull Request Guidelines

- Commit messages are short, imperative, sentence case (examples: “Optimize palette editor updates”, “Fix lint warnings”).
- PRs should include a clear summary, linked issue (if any), and screenshots for UI changes.
- Ensure `npm run lint`, `npm run build`, and `npm run test` pass before requesting review.

## Configuration Notes

- Tailwind v4 is configured via `app/globals.css` and `postcss.config.mjs`.
- Local storage persistence lives in `src/lib/palettes.ts`; be careful with SSR-safe access (`typeof window`).
