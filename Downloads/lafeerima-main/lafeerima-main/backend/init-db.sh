#!/bin/bash

# Initialization script for PostgreSQL database

set -e

echo "Creating initial schema..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE IF NOT EXISTS users (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        description VARCHAR(500),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "$POSTGRES_USER";
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "$POSTGRES_USER";

    INSERT INTO users (name, email, description) VALUES
        ('Admin User', 'admin@example.com', 'Administrator account'),
        ('John Doe', 'john@example.com', 'Developer'),
        ('Jane Smith', 'jane@example.com', 'Designer')
    ON CONFLICT (email) DO NOTHING;
EOSQL

echo "Database initialization complete!"
