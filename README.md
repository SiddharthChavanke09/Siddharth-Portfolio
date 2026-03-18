# Portfolio Website

A full-stack portfolio website built with React, Node.js, and MongoDB.

## Features

- Responsive design with Tailwind CSS
- Showcase of experience, skills, and projects
- Contact form with message storage
- Modern and clean UI

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── assets/        # Images and static files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── server/                # Node.js backend
    ├── models/            # MongoDB models
    ├── routes/            # API routes
    ├── config/            # Configuration
    ├── server.js
    └── package.json
```

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or connection string

### Client Setup

```bash
cd client
npm install
npm start
```

The client will run on `http://localhost:3000`

### Server Setup

```bash
cd server
npm install
npm start
```

The server will run on `http://localhost:5000`

## Environment Variables

Create a `.env` file in the `server` directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

## API Endpoints

- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create a new message
- `GET /api/messages/:id` - Get a specific message
- `DELETE /api/messages/:id` - Delete a message

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other**: Mongoose, CORS

## License

MIT
