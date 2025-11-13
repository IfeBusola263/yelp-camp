# YelpCamp

YelpCamp is a full‑stack web application (Node.js + Express) that allows users to create, review, and browse campgrounds. This repository contains the server-side application, route controllers, models, views, and utilities used to power the app.

> NOTE: This README was created from the repository structure and typical conventions for a YelpCamp-style project (Express, MongoDB, Cloudinary, Mapbox). Adjust environment variable names, script commands, or features to match your exact implementation if they differ.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run the App](#run-the-app)
- [Development Notes](#development-notes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication (register/login)
- Create, read, update and delete campgrounds
- Upload and serve images (Cloudinary integration)
- Add and manage reviews for campgrounds
- Map integration (Mapbox) for campground locations
- Server-side validation and centralized error handling
- Template-driven UI (EJS or similar view engine)
- Organized MVC-style project structure with controllers, models, routes, and middleware

## Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- EJS (server-side templating) — views in the `views/` folder
- Cloudinary for image hosting (folder: `cloudinary/`)
- Mapbox for maps/geocoding
- Additional utilities and middleware located in `utils/` and `middleware/`

## Repository Structure

Top-level directories and files you will find in this project:

- server.js — application entrypoint
- package.json / package-lock.json — project dependencies
- controllers/ — route handlers and business logic
- routes/ — Express router modules
- models/ — Mongoose models (Campground, Review, User, etc.)
- views/ — server-rendered templates
- public/ — static assets (CSS, client JS, images)
- cloudinary/ — cloudinary configuration and helpers
- middleware/ — authentication and request middleware
- utils/ — helper utilities

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm (comes with Node.js) or yarn
- A MongoDB instance (local or cloud such as MongoDB Atlas)
- Cloudinary account (for image uploads) — optional but required for image upload features
- Mapbox account (for geocoding and maps) — optional but required for map features

### Installation

1. Clone the repository:

   git clone https://github.com/IfeBusola263/yelp-camp.git
   cd yelp-camp

2. Install dependencies:

   npm install

### Environment Variables

Create a `.env` file in the project root (do NOT commit it). Typical environment variables used by YelpCamp-style projects:

- PORT — (optional) port to run the server, e.g. 3000
- DB_URL or MONGODB_URI — MongoDB connection string
- SECRET — session or cookie secret (used for authentication sessions)
- CLOUDINARY_CLOUD_NAME — Cloudinary cloud name
- CLOUDINARY_KEY — Cloudinary API key
- CLOUDINARY_SECRET — Cloudinary API secret
- MAPBOX_TOKEN — Mapbox access token

Example .env (do not use real keys here):

PORT=3000
DB_URL=mongodb://localhost:27017/yelp-camp
SECRET=your_session_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token

### Run the App

Start the server in production mode:

npm start

Start the server in development mode (if nodemon is configured):

npm run dev

Or directly with Node:

node server.js

Visit http://localhost:3000 (or the port you configured) in your browser.

## Development Notes

- Routes are organized under the `routes/` directory and business logic lives in `controllers/`.
- Models define the MongoDB schemas and are located in `models/`.
- Uploads and Cloudinary helpers are located in `cloudinary/`.
- Middleware (authentication, authorization, flash messages, etc.) is under `middleware/`.
- Views use server-side templating in `views/`. Static assets are in `public/`.
- Check `server.js` for central configuration, middleware registration, and database connection code.

## Deployment

To deploy:

1. Ensure environment variables are set on the host (production database URI, Cloudinary keys, Mapbox token, etc.).
2. Build any production assets if your project uses a build step.
3. Start the Node process with a process manager such as PM2 or run inside a container/service (Docker, Heroku, etc.).

If deploying to Heroku:
- Set the environment variables in the Heroku dashboard.
- Use `npm start` as the start command in package.json.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository.
2. Create a descriptive branch: git checkout -b feat/short-description
3. Make changes and write tests where applicable.
4. Open a pull request describing your changes.

Please include clear commit messages and follow the existing code style.

## License

No license file detected in the repository. Add a LICENSE file (for example MIT) if you want to specify usage and contribution terms.

## Contact

Repository: https://github.com/IfeBusola263/yelp-camp

Author: IfeBusola263

If you have questions, improvements, or issues, please open an issue in the repository or submit a pull request.
