# Use Node.js LTS version as base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Provide the environment variables
ENV NODE_ENV=production
ENV DATABASE_URL=/app/db/app.db
ENV DATABASE_CLIENT=sqlite3

# Run migrations
RUN npm run knex migrate:latest

# Expose the port the app runs on
EXPOSE 3333

# Start the application
CMD ["npm", "run", "start"] 