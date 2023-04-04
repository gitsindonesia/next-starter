# GITS Next Starter

This is Next Starter, using version 13 that you can see [here](https://beta.nextjs.org/docs)

## Batteries Included

- [shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Storybook](https://storybook.js.org/)
- Conventional Commits

---

## Folder Structure

Project structure for this Next starter

```javascript
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
