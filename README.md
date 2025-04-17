# 🧠 Code Review App — Frontend

# Code Review Application

A web-based application for code review management. This project uses a **React** front-end and a **Node.js/Express** back-end.

## Features

- **Front-End**: 
  - Interactive user interface built with React.
  - Syntax highlighting for various programming languages using PrismJS.
  
- **Back-End**:
  - A RESTful API built with Express to handle data and business logic.
  - Endpoint(s) to retrieve and submit code reviews.

## Tech Stack

- **Frontend**: React, Vite, PrismJS (for syntax highlighting)
- **Backend**: Node.js, Express
- **Database**: (Add any database you're using, like MongoDB, PostgreSQL, etc.)
- **Others**: Axios (for HTTP requests in React), CORS, dotenv

## Installation

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/knownstranger-Tapasya/code-review.git
2. Navigate to the project folder:
- cd code-review/frontend

3. Install the necessary dependencies:
- npm install

4. Start the React development server:
- npm run dev

This will start the front-end app locally at http://localhost:5173.

### Backend Setup

1. Navigate to the back-end directory:
- cd code-review/backend

2. Install the necessary dependencies:
- npm install

3. Create a .env file in the root directory and add your environment variables

4. Start the Node.js server:
- npm start
This will start the Express server on port 5000 (or the port specified in the .env file).

### Running Both Servers Locally
Make sure both the front-end and back-end servers are running in different terminal windows or tabs:

The front-end will be running on http://localhost:5173.

The back-end will be running on http://localhost:3000.
