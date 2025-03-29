# Backend - Coffee Shop Management System

This directory contains the backend code for the Coffee Shop Management System.

## Structure

- `src/` - Contains the source code for the backend.
  - `config/` - Configuration files.
  - `controllers/` - Controllers for handling requests.
  - `models/` - Mongoose models.
  - `routes/` - API routes.
  - `middlewares/` - Middleware functions.
  - `app.js` - Express app setup.
  - `server.js` - Entry point for the server.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `MONGO_URI` - MongoDB connection string.
- `API_URL` - External API URL.
- `API_KEY` - API key for external API.
- `PORT` - Port for the Express server.
- `NODE_ENV` - Node environment (development/production).
- `ADMIN_USERNAME` - Admin username.
- `ADMIN_PASSWORD` - Admin password.

## License

This project is licensed under the MIT License.