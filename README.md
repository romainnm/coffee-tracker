# Coffee Tracker (Node/Express API)

**Branches:**

-   main: https://github.com/romainnm/coffee-tracker-express-api
-   dev: https://github.com/romainnm/coffee-tracker-express-api/tree/dev

## Table of Contents

1. [Description](#description)
2. [Features & Requirements](#features--requirements)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Dependencies](#dependencies)
6. [Installation](#installation)
7. [Endpoints](#endpoints)
8. [Get started](#get-started)

## Description

This API allows users to track their collection and consumption of coffee beans, including details such as brand, name, and status.

## Features & Requirements

-   View coffee bean collection
-   Add new coffee beans to collection
-   Update existing coffee beans
-   Delete coffee beans
-   Users must be logged in to perform any actions.

## Tech Stack

-   **Backend:** Node.js (Express Framework)
-   **Database:** MongoDB Atlas (NoSQL)
-   **API Testing:** Postman
-   **API Documentation:** Swagger UI

## Project Structure

-   `/coffee-tracker-express-api`
    -   `.github` _Github pipeline config_
    -   `/configs` _Configuration files (e.g., DB connection)_
    -   `/controllers` _Controller files_
    -   `/interfaces` _Interface files_
    -   `/models` _Mongoose models_
    -   `/routes` _Route definitions_
    -   `/tests` _Jest Unit Tests files_
    -   `/middlewares` _Middleware functions (e.g., error handling)_
    -   `/mocks` _Mocks files for testing and UI integration_
    -   `/utils` _Utility functions (optional)_
    -   `/enums` _Enum files_
    -   `main.js` _Application entry point_
    -   `package.json` _Project dependencies_
    -   `.gitignore` _Files to be ignored by Git_
    -   `.env` _Add environment variables_
    -   `.eslint.config.mjs` _ESLint configuration_
    -   `jest.config.ts` _Jest configuration_
    -   `.prettierrc` _Prettier configuration_
    -   `tsconfig.json` _TypeScript configuration_

## Dependencies

_**TODO**: Security and Swagger packages to be added._

### Core Dependencies

-   Express
-   Mongoose
-   Dotenv
-   JSON Web Token (JWT)

### Dev Dependencies

-   Nodemon
-   TypeScript (npm install typescript ts-node @types/node --save-dev && npx tsc --init)
-   ESLint (npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev && npx eslint --init)
-   Prettier

## Endpoints

### Authentication

-   `POST /auth/register` - Register a new user
-   `POST /auth/login` - Login a user

### Coffee Beans

-   `GET /beans` - Get all coffee beans
-   `POST /beans` - Add a new coffee bean
-   `GET /beans/:id` - Get a single coffee bean
-   `PATCH /beans/:id` - Update a coffee bean
-   `DELETE /beans/:id` - Delete a coffee bean

## Usage

### Start application in local

```bash
npm install && npm run dev
```

### Check linting with ESLint

```bash
npm run lint
npm run lint:success (optional)
```

### Check formating with Prettier

```bash
npm run prettier:check
npm run prettier:fix
```

## DEV tasks

1. ~~Create app structure~~ - DONE
2. ~~Add dependencies~~ - DONE
3. ~~Set basic server~~ - DONE
4. ~~Set connection to DB + .env to manage secret var~~ - DONE
5. ~~Configure router and routes~~ - DONE
6.  - ~~Set Linting and TypeScript~~ - DONE;
    - ~~Fix ESLint and TypeScript errors~~ - DONE
    - ~~Set Prettier~~ - DONE
    - ~~Set CICD pipeline~~ - DONE
    - ~~Initialize testing (Trying Jest)~~ - DONE
7. ~~Initialize beans endpoints controllers~~ - DONE
8. ~~Initialize auth endpoints controllers~~ - DONE
9. ~~Create collection + Configure endpoints in Postman~~ - DONE
10. ~~Set error handling - Request and Server errors + 404 errors~~ - DONE
11. ~~Write unit test for Coffee controllers~~ - DONE
12. Initialize Mongoose and create Schemas
13. Write unit test for Auth Controller

## Troubleshooting / MEMO

### TypeScript installation

-   npm install typescript ts-node @types/node @types/express --save-dev
-   npx tsc --init (creates a tsconfig.json)
-   (optinonal) Update project structure
-   Update package.json scripts
    -   run in dev with "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
    -   build with "build": "tsc"
    -   start the built app with "start": "node dist/index.js",
-   Change all imports (if target changed to es2016, etc)

### ESLint installation

-   npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
-   npx eslint --init? (Note: there are different format of config .eslintrc.json, eslint.config.mjs. Here the one generated was a mjs)
-   Configure rules
-   Update package.json scripts
-   run lint - "lint": "eslint ."
-   (optional) Add successful linting message

### Nodemon installation

-   npm install nodemon typescript ts-node @types/node --save-dev
-   create a nodemon.json (not necessary?)
-   change the dev script - "dev": "nodemon",

### Fix Dotenv linting issues

-   "process" and "console" not recognized (ESLint does not recognized Node.js global variables)
-   globals: globals.node (Add this line to include Node.js globals in eslint.config.mjs)

### Prettier installation

-   npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
-   Update package.json script
-   add .prettierrc
