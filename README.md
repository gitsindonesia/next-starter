# GITS Next Starter

This is Next Starter, using version 13 that you can see [here](https://beta.nextjs.org/docs)

## Batteries Included

- [shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- Conventional Commits

---

## Folder Structure

Project structure for this Next starter

```javascript
|__mocks__                 // Contain all mocks for test
|__tests__                 // Contain all test inside the project
|
|app                       // Entry point for the app.
|
|assets                    // Assets, images, fonts, styles, etc.
|   |___images
|   |______icon            // Contain icon for the project.
|   |______{another}       // Another related to images.
|
|components                // Contain global components or specific for some features.
|   |___base               // Contain base components or specific for some features.
|   |___{another}          // Another related to images.
|
|store                     // Contain redux / state management.
|   |___{feature-name}     // Contain base components or specific for some features.
|   |______rtk             // Contain rtk for specific feature.
|   |______slice           // Contain slice for specific feature.
|
|types                     // Contain types definition for the app.
|   |___{app}              // Contain types definition for the app feature.
|   |______api.type.ts     // Type definition for the API (response from Back-End).
|   |______common.type.ts  // Type definition common things inside Front-End.
|   |___{feature-name}     // Contain types definition for specific feature.
|
|{another}                 // Another folder that have specific purpose.
```

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
