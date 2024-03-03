# iCodeMas

Christmas Shop built with [Vue3 in Vite](https://vuejs.org/guide/quick-start.html), [Drizzle ORM with Neon](https://orm.drizzle.team/learn/tutorials/drizzle-with-frameworks/drizzle-nextjs-neon), pushed to [Vercel](https://vercel.com/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

### 1. Install npm packages

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
pnpm test:unit:dev # or `pnpm test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### 2. Drizzle Setup

```sh
// drizzle.config.ts

import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();


export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.VITE_NEON_DATABASE_URL!,
  },
} satisfies Config;
```

#### Environment Variables

Please prepend **VITE\_** to the variable in order to use .env variables. >> [Vite .env](https://stackoverflow.com/questions/74168587/how-to-use-an-env-variable-in-vite-with-typescript)

```sh
# .env

VITE_NEON_DATABASE_URL="(connection string from NEON)"

```
