# Turborepo Design System Starter

This guide explains how to use a React design system starter powered by:

-   🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
-   🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
-   🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
-   📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting
-   [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
-   [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing
-   [Jest](https://github.com/facebook/jest) for unit testing
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing react applications

## Using this example

Clone the design system example locally or [from GitHub](https://github.com/domzic/mango.git):

```bash
git clone https://github.com/domzic/mango.git
cd mango
pnpm install
```

### Useful Commands

-   `pnpm build` - Build all packages, including the Storybook site
-   `pnpm dev` - Run all packages locally and preview with Storybook
-   `pnpm lint` - Lint all packages
-   `pnpm changeset` - Generate a changeset
-   `pnpm test` - Run unit tests
-   `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Turborepo

[Turborepo](https://turbo.build/repo) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifes managing your design system monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

## Apps & Packages

This Turborepo includes the following packages and applications:

-   `apps/docs`: Component documentation site with Storybook
-   `packages/config`: Shared configs (eslint, ts, jest, etc.) used throughout the monorepo
-   `packages/ui`: Shared react components packages

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `pnpm add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like `node_modules` used to store your dependencies.

## Storybook

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example preconfigures Storybook to:

-   Use Vite to bundle stories instantly (in milliseconds)
-   Automatically find any stories inside the `stories/` folder
-   Support using module path aliases like `@mango-ui` for imports
-   Write MDX (TSX) for component documentation pages

For example, here's the included Story for our `Carousel` component:

```js:apps/docs/stories/Carousel.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from '@mango-ui/carousel';
import { ThemeProvider, GlobalStyles } from '@mango-ui/theme';

export default {
    title: 'Carousel',
    component: Carousel,
    decorators: [
        (Story) => (
            <ThemeProvider>
                <GlobalStyles />
                <div style={{ maxWidth: 1024, margin: '0 auto' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Carousel>;
```

This example includes a few helpful Storybook scripts:

-   `pnpm dev`: Starts Storybook in dev mode with hot reloading at `localhost:6006`
-   `pnpm build`: Builds the Storybook UI and generates the static HTML files
-   `pnpm preview-storybook`: Starts a local server to view the generated Storybook UI

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.
