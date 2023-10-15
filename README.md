# GITS Next Starter

This is Next Starter, using version 13 that you can see [here](https://beta.nextjs.org/docs)

## Batteries Included

- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand State Management](https://github.com/pmndrs/zustand/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commit Linter](https://commitlint.js.org/#/)

---

## Folder Structure

Project structure for this Next starter

```javascript
.husky                         // Contain husky configuration
.ide                           // Contain Jetbrains configuration
.next                          // Contain Next framework configuration
.storybook                     // Contain storybook configuration
.vscode                        // Contain vscode configuration to force local
.cache                         // Contain jest cache
.coverage                      // Contain jest coverage
node_modules                   // Contain modules / third parties
public                         // Contain public assets & etc
__mocks__                      // Contain all mocks for test
__tests__                      // Contain all test inside the project
app                            // Entry point for the app.
├── __mocks__                  // Contain mocks for jest
├── __tests__                  // Contain test for the app features
├── _api                       // Contain api for integration to back-end
├── _assets                    // Contain assets for features
├── _components                // Contain all base components or reusable
│   ├── base                   // Contain all reusable components
│   └── {another-folder}       // Your desired reusable component folder name
├── _plugins                   // Contain all plugins config for your app
├── _store                     // Contain all state management things using Zustand
├── _types                     // Contain type definitions for core app
├── _utils                     // Contain utilities / helpers for app
├── {feature-name-folder}      // Contain your feature files, the the structure same as app folder (but isolated functionality)
├── error.tsx                  // File for rendering error (app error)
├── layout.tsx                 // File for rendering layout (app layout)
├── loading.tsx                // File for rendering loading (app loading)
└── page.tsx                   // File for rendering page (app (/) main page)
.dockerignore                  // File for ignoring file to be inside image
.env.development               // File for environment for develpoment stage
.eslint.json                   // File config for eslint
.prettierrc                    // File config for prettier
commitlint.config.js           // File config for commitlint
docker-compose-dev.yml         // File config for docker command
Dockerfile                     // File config for dockerfile
.env.d.ts                      // File config for type definition
jest.config.js                 // File config for jest
jest.setup.js                  // File config for setuping jest entry point
next-env.d.ts                  // File config for type definition
next.config.js                 // File config for next framework
package.json                   // File config for your project
postcss.config.js              // File config for postcss
README.md                      // File for documentation (HEY YOU READING ME NOW!)
tailwind.config.js             // File config for tailwind
yarn.lock                      // File config for locking project packages (READONLY FILE!)
```

Ref: [Next Project Structure](https://nextjs.org/docs/getting-started/project-structure)

If you want to create folder outside declared above, you can create, but, don't forget to update this docs.

---

## Installation

1; Install dependencies using yarn

```shell
yarn
```

---

## Available commands for build

Build next app

```shell
yarn build
```

---

## Available commands for linting

Run linter and will search for problems, but will not fix

```shell
yarn lint
```

Run linter and will search and try to fix the problems.

```shell
yarn lint:fix
```

Run linter and will call prettier to fix the code style.

```shell
yarn lint:format
```

---

## Available commands for versioning

Upgrade patch semantic versioning 0.0.(0 <-- this)

```shell
yarn version:patch
```

Upgrade minor semantic versioning 0.(0 <--- this).0

```shell
yarn version:minor
```

---

Upgrade major semantic versioning (0 <--- this).0.0

```shell
yarn version:major
```

---

## Available commands for testing

It will go through all the test files and execute them. This command will also be used in pre-hooks and CI checks.

```shell
yarn test
```

This will watch all the test files. It is very useful while writing tests and quickly seeing results.

```shell
yarn test:watch
```

This command will update snapshots for all the presentational components. If the snapshot is not there, it will create it for you.

```shell
yarn test:update
```

As the name suggests, this command will generate a coverage report.

```shell
yarn test:coverage
```
