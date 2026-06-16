# Perfect Preparation

A lightweight interview preparation app with a Node.js backend and a Vite-powered React frontend. This repository contains two folders: `Backend` (API, auth, interview services) and `Frontend` (React + Vite UI, features for auth and interviews).

**Purpose:** Provide a simple platform to create, manage, and review mock interviews with AI-assisted services.

**Table of Contents**

- **Project Overview**
- **Repository Structure**
- **Requirements**
- **Backend - Setup & Workflow**
- **Frontend - Setup & Workflow**
- **Environment Variables**
- **Development Workflow**
- **Testing & Linting**
- **Contributing**

**Project Overview**

This project is split into a backend API and a frontend app. The backend handles authentication, interview data storage, and AI-assisted services. The frontend is a Vite React app providing pages for login, registration, creating interviews, and reviewing reports.

**Repository Structure**

- `Backend/`
  - `server.js` - Backend entry point
  - `src/` - Application code
    - `controllers/` - Route handlers (`auth.controller.js`, `interview.controller.js`)
    - `models/` - Mongoose/ORM models (`user.model.js`, `interviewReport.model.js`, `blacklist.model.js`)
    - `routes/` - Route definitions (`auth.routes.js`, `interview.routes.js`)
    - `services/` - Business logic and external integrations (e.g. `ai.service.js`)
    - `middlewares/` - Middleware (auth, file handling)

- `Frontend/`
  - `index.html`, `src/` - Vite React app
  - `src/features/auth/` - Auth pages, hooks, components
  - `src/features/interview/` - Interview pages, context, APIs

**Requirements**

- Node.js (recommended >= 16.x)
- npm (or yarn)
- MongoDB (or other DB configured in `Backend/src/config/database.js`)

Optional: an OpenAI-compatible API key or other AI provider keys if `ai.service.js` uses an external AI service.

**Backend - Setup & Workflow**

1. Open a terminal and change to the backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (see the **Environment Variables** section below). Create a `.env` file at `Backend/` root if needed.

4. Start the server (choose one depending on scripts):

```bash
# if a start script exists
npm start

# or run directly
node server.js
```

5. The API exposes auth and interview endpoints. Example routes are defined in `src/routes/auth.routes.js` and `src/routes/interview.routes.js`.

Common backend tasks:
- Register/login users
- Use protected routes through the auth middleware (`src/middlewares/auth.middleware.js`)
- Create and fetch interview reports via `interview.controller.js`

**Frontend - Setup & Workflow**

1. Open a terminal and change to the frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server (Vite):

```bash
npm run dev
```

4. The app uses features located under `src/features/`:
- `auth` — login/register pages, auth context and hooks
- `interview` — home and interview pages, interview context and API calls

5. To build for production:

```bash
npm run build
```

**Environment Variables**

Suggested variables for `Backend/.env`:

- `PORT` — port to run the server (default: `3000` or similar)
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret used to sign JWT tokens
- `AI_API_KEY` — (optional) API key for any AI provider used by `ai.service.js`

Suggested variables for `Frontend/.env` (if used):

- `VITE_API_URL` — base URL for the backend API (e.g., `http://localhost:3000/api`)

**Development Workflow**

- Start the backend and frontend locally in separate terminals.
- Implement API changes in `Backend/src/` and corresponding UI changes in `Frontend/src/`.
- Use the auth context (`src/features/auth/auth.context.jsx`) in the frontend to persist login state and access protected routes (see `Protected.jsx`).
- For adding features, create new service functions in `services/` and wire them into controllers/pages.

Example local run (two terminals):

```bash
# Terminal 1 - backend
cd Backend
npm install
npm start

# Terminal 2 - frontend
cd Frontend
npm install
npm run dev
```

