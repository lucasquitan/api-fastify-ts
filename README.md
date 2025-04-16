# Fastify TypeScript API

A modern, fast, and type-safe API built with Fastify, TypeScript, and SQLite.

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [SQLite](https://www.sqlite.org/)
- [Knex.js](https://knexjs.org/)
- [Docker](https://www.docker.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerization)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/api-fastify-ts.git
cd api-fastify-ts
```

2. Install dependencies:
```bash
npm install
```

3. Create your environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in the `.env` file:
```env
NODE_ENV='development'
DATABASE_URL='./db/app.db'
DATABASE_CLIENT='sqlite3'
```

## 🚀 Running the Application

### Development Mode

To run the application in development mode with hot-reload:

```bash
npm run dev
```

### Production Mode

1. Build the application:
```bash
npm run build
```

2. Start the server:
```bash
npm run start
```

### Using Docker

1. Build the Docker image:
```bash
docker build -t api-fastify-ts .
```

2. Run the container:
```bash
docker run -d -p 3333:3333 --name app api-fastify-ts
```

## 📦 Available Scripts

- `npm run dev`: Starts the development server with hot-reload
- `npm run build`: Builds the application for production
- `npm run start`: Starts the production server
- `npm run lint`: Runs ESLint to check code quality
- `npm run knex`: Runs Knex.js CLI commands
- `npm run test`: Runs the test suite

## 🗄️ Database Migrations

To run database migrations:

```bash
npm run knex migrate:latest
```

## 🧪 Testing

To run the test suite:

```bash
npm run test
```

## 📝 Project Structure

```
.
├── src/              # Source files
├── db/               # Database files and migrations
├── build/            # Compiled files
├── .env.example      # Example environment variables
├── Dockerfile        # Docker configuration
└── package.json      # Project dependencies and scripts
```

## 📄 License

This project is under the ISC license. See the [LICENSE](LICENSE) file for more details.
