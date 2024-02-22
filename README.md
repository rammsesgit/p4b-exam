# React developer exam

This project uses Turborepo as incremental bundler and build system for monorepos.

## What's inside?

This turborepo uses [pnpm](hhttps://pnpm.io/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `@repo/web`: a [Next.js](https://nextjs.org/) app
- `@repo/api`: an [Express](https://expressjs.com/) server
- `@repo/ui`: ui: a React component library
- `@repo/eslint-config-custom`: `eslint` configurations for client side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/eslint-config-custom-server`: `eslint` configurations for server side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `scripts`: Jest configurations
- `@repo/logger`: Isomorphic logger (a small wrapper around console.log)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Docker

This repo is configured to be built with [Docker](https://docs.docker.com/engine/install/), and Docker compose. To build all apps in this repo:

```
# Start prod in detached mode
docker-compose up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker-compose down --remove-orphans
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
