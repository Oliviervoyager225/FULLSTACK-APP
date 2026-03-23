.PHONY: help build up down logs clean restart

help:
	@echo "Full Stack App - Makefile Commands"
	@echo "===================================="
	@echo "make build       - Build Docker images"
	@echo "make up          - Start all services"
	@echo "make down        - Stop all services"
	@echo "make logs        - View service logs"
	@echo "make logs-backend - View backend logs"
	@echo "make logs-frontend - View frontend logs"
	@echo "make logs-db     - View database logs"
	@echo "make restart     - Restart all services"
	@echo "make clean       - Remove all containers and volumes"
	@echo "make ps          - List running containers"
	@echo "make shell-backend - Access backend shell"
	@echo "make shell-db    - Access database shell"

build:
	docker-compose build --no-cache

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

logs-backend:
	docker-compose logs -f backend

logs-frontend:
	docker-compose logs -f frontend

logs-db:
	docker-compose logs -f postgres

restart:
	docker-compose restart

clean:
	docker-compose down -v
	docker system prune -f

ps:
	docker-compose ps

shell-backend:
	docker-compose exec backend bash

shell-db:
	docker-compose exec postgres psql -U postgres -d fullstack_db

# Development commands
dev-build:
	docker-compose -f docker-compose.dev.yml build

dev-up:
	docker-compose -f docker-compose.dev.yml up -d

dev-down:
	docker-compose -f docker-compose.dev.yml down

# Production commands
prod-up:
	docker-compose -f docker-compose.prod.yml up -d

prod-down:
	docker-compose -f docker-compose.prod.yml down
