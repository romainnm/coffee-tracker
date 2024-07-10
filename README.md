# Coffee Tracker (Node/Express API)

## Table of Contents
1. [Description](#description)
2. [Features & Requirements](#features--requirements)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Dependencies](#dependencies)
6. [Installation](#installation)
8. [Endpoints](#endpoints)
9. [Get started](#get-started)

## Description
This API allows users to track their collection and consumption of coffee beans, including details such as brand, name, and status.

## Features & Requirements
- View coffee bean collection
- Add new coffee beans to collection
- Update existing coffee beans
- Delete coffee beans
- Users must be logged in to perform any actions.

## Tech Stack
- **Backend:** Node.js (Express Framework)
- **Database:** MongoDB Atlas (NoSQL)
- **API Testing:** Postman
- **API Documentation:** Swagger UI

## Project Structure

- `/coffee-tracker-express-api`
  - `/configs`       *Configuration files (e.g., DB connection)*
  - `/controllers`   *Controller files*
  - `/models`        *Mongoose models*
  - `/routes`        *Route definitions*
  - `/middlewares`   *Middleware functions (e.g., error handling)*
  - `/utils`         *Utility functions (optional)*
  - `main.js`        *Application entry point*
  - `package.json`   *Project dependencies*
  - `.gitignore`     *Files to be ignored by Git*
  - `.env`           *Add environment variables*

## Dependencies
_**TODO**: Security and Swagger packages to be added._
### Core Dependencies
- Express
- Mongoose
- Dotenv
- JSON Web Token (JWT)

### Dev Dependencies
- Nodemon

## Endpoints
### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login a user

### Coffee Beans
- `GET /beans` - Get all coffee beans
- `POST /beans` - Add a new coffee bean
- `GET /beans/:id` - Get a single coffee bean
- `PATCH /beans/:id` - Update a coffee bean
- `DELETE /beans/:id` - Delete a coffee bean


## Get started
```bash
npm install && npm start
```

## DEV tasks
1. Create app structure
2. Add dependencies
3. Set basic server
4. Set connection to DB + .env to manage secret var
5. Configure router and routes
6. Initialize beans controllers
7. Initialize auth controllers
8. Configure endpoints + Postman
9. Set error handling - Request and Server errors




