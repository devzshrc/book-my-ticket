# Book My Ticket

This project now uses a modular Express backend structure so you can build the assignment features on top of a clean foundation instead of a single growing file.

## Current Structure

```text
.
├── public/
│   └── index.html
├── src/
│   ├── app.mjs
│   ├── server.mjs
│   ├── config/
│   │   ├── db.mjs
│   │   └── env.mjs
│   ├── constants/
│   │   └── app.constants.mjs
│   ├── controllers/
│   │   ├── booking.controller.mjs
│   │   ├── page.controller.mjs
│   │   └── seat.controller.mjs
│   ├── middlewares/
│   │   ├── error.middleware.mjs
│   │   └── not-found.middleware.mjs
│   ├── repositories/
│   │   └── seat.repository.mjs
│   ├── routes/
│   │   ├── booking.routes.mjs
│   │   ├── health.routes.mjs
│   │   ├── index.mjs
│   │   ├── page.routes.mjs
│   │   └── seat.routes.mjs
│   ├── services/
│   │   ├── booking.service.mjs
│   │   └── seat.service.mjs
│   └── utils/
│       ├── async-handler.mjs
│       └── http-error.mjs
├── .env.example
├── index.mjs
├── package.json
└── package-lock.json
```

## Layer Responsibilities

- `src/server.mjs`: starts the HTTP server
- `src/app.mjs`: creates and configures the Express app
- `src/routes/`: declares endpoint paths
- `src/controllers/`: handles request and response orchestration
- `src/services/`: business logic
- `src/repositories/`: database queries
- `src/middlewares/`: shared request pipeline behavior
- `src/config/`: environment and database setup
- `src/utils/`: small reusable helpers

## Existing Working Endpoints

- `GET /`
- `GET /health`
- `GET /seats`
- `PUT /:id/:name`

These are preserved so you can continue building from the starter behavior.

## Recommended Next Modules For The Assignment

When you start implementing auth and protected bookings, add these next:

- `src/routes/auth.routes.mjs`
- `src/controllers/auth.controller.mjs`
- `src/services/auth.service.mjs`
- `src/repositories/user.repository.mjs`
- `src/middlewares/auth.middleware.mjs`
- `src/repositories/booking.repository.mjs`
- `src/controllers/booking.controller.mjs`:
  extend with authenticated booking handlers

## Suggested Build Order

1. Add user and booking tables
2. Add register route
3. Add login route
4. Add auth middleware
5. Add protected `POST /bookings`
6. Add `GET /bookings` for the logged-in user
7. Reuse the transaction pattern already in `booking.service.mjs`

## Run Locally

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

The server entrypoint is still the root [index.mjs](/Users/maccyyy/Desktop/book-my-ticket/index.mjs), but it now delegates to `src/server.mjs`.
