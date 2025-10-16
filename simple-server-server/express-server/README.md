# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
express-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # NPM configuration file
├── Dockerfile          # Docker configuration file
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Docker (for building and running the Docker container)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with Nodemon, run:

```
yarn start
```

The server will be available at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run:

```
docker build -t express-server .
```

### Running the Docker Container

To run the Docker container, use the following command:

```
docker run -p 8001:8001 express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.