# API Specification

## Base URL
```
http://localhost:8080/api
```

## Response Format
All responses are in JSON format.

### Success Response (200, 201)
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "description": "Developer",
  "createdAt": "2024-02-11T10:30:00",
  "updatedAt": "2024-02-11T10:30:00"
}
```

### Error Response
```json
{
  "error": "Error message",
  "status": 400,
  "timestamp": "2024-02-11T10:30:00"
}
```

## Endpoints

### 1. Get All Users
```
GET /api/users
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Admin User",
    "email": "admin@example.com",
    "description": "Administrator account",
    "createdAt": "2024-02-11T00:00:00",
    "updatedAt": "2024-02-11T00:00:00"
  },
  {
    "id": 2,
    "name": "John Doe",
    "email": "john@example.com",
    "description": "Developer",
    "createdAt": "2024-02-11T01:00:00",
    "updatedAt": "2024-02-11T01:00:00"
  }
]
```

**Status Codes:**
- `200 OK` - Successfully retrieved users

---

### 2. Get User by ID
```
GET /api/users/{id}
```

**Parameters:**
- `id` (path) - User ID (required)

**Response:**
```json
{
  "id": 1,
  "name": "Admin User",
  "email": "admin@example.com",
  "description": "Administrator account",
  "createdAt": "2024-02-11T00:00:00",
  "updatedAt": "2024-02-11T00:00:00"
}
```

**Status Codes:**
- `200 OK` - User found
- `404 Not Found` - User not found

**Example:**
```bash
curl http://localhost:8080/api/users/1
```

---

### 3. Get User by Email
```
GET /api/users/email/{email}
```

**Parameters:**
- `email` (path) - User email (required)

**Response:**
```json
{
  "id": 1,
  "name": "Admin User",
  "email": "admin@example.com",
  "description": "Administrator account",
  "createdAt": "2024-02-11T00:00:00",
  "updatedAt": "2024-02-11T00:00:00"
}
```

**Status Codes:**
- `200 OK` - User found
- `404 Not Found` - User not found

**Example:**
```bash
curl http://localhost:8080/api/users/email/admin@example.com
```

---

### 4. Create User
```
POST /api/users
```

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "description": "Designer"
}
```

**Required Fields:**
- `name` (string, max 100) - User name
- `email` (string, max 100, unique) - User email

**Optional Fields:**
- `description` (string, max 500) - User description

**Response (201 Created):**
```json
{
  "id": 3,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "description": "Designer",
  "createdAt": "2024-02-11T12:00:00",
  "updatedAt": "2024-02-11T12:00:00"
}
```

**Status Codes:**
- `201 Created` - User successfully created
- `400 Bad Request` - Invalid input data
- `409 Conflict` - Email already exists

**Example:**
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "description": "Designer"
  }'
```

---

### 5. Update User
```
PUT /api/users/{id}
```

**Parameters:**
- `id` (path) - User ID (required)

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "description": "Senior Designer"
}
```

**Fields:**
- `name` (string, max 100) - Updated name
- `email` (string, max 100) - Updated email
- `description` (string, max 500) - Updated description

**Response (200 OK):**
```json
{
  "id": 3,
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "description": "Senior Designer",
  "createdAt": "2024-02-11T12:00:00",
  "updatedAt": "2024-02-11T12:30:00"
}
```

**Status Codes:**
- `200 OK` - User successfully updated
- `400 Bad Request` - Invalid input data
- `404 Not Found` - User not found
- `409 Conflict` - Email already exists (for different user)

**Example:**
```bash
curl -X PUT http://localhost:8080/api/users/3 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "description": "Senior Designer"
  }'
```

---

### 6. Delete User
```
DELETE /api/users/{id}
```

**Parameters:**
- `id` (path) - User ID (required)

**Response:** (No Content)

**Status Codes:**
- `204 No Content` - User successfully deleted
- `404 Not Found` - User not found

**Example:**
```bash
curl -X DELETE http://localhost:8080/api/users/3
```

---

## Health Check Endpoints

### Health Check (Simple)
```
GET /health
```

**Response:**
```
Backend is running!
```

**Status Codes:**
- `200 OK` - Backend is healthy

---

### Health Check (JSON)
```
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Backend API is healthy"
}
```

**Status Codes:**
- `200 OK` - Backend is healthy

---

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | OK | Successful GET request |
| 201 | Created | Successful POST request (resource created) |
| 204 | No Content | Successful DELETE request |
| 400 | Bad Request | Invalid request body or parameters |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists (e.g., duplicate email) |
| 500 | Internal Server Error | Server error |

---

## Validation Rules

### Name
- Required
- Max length: 100 characters
- Must not be empty

### Email
- Required
- Max length: 100 characters
- Must be valid email format
- Must be unique in the database

### Description
- Optional
- Max length: 500 characters

---

## Rate Limiting

Currently no rate limiting is implemented. In production, consider adding:
- Rate limiting per IP
- Rate limiting per user (if authentication added)
- Use middleware like `spring-cloud-gateway`

---

## Authentication & Authorization

Currently, the API has no authentication. For production:
1. Implement JWT tokens
2. Add role-based access control
3. Secure sensitive endpoints
4. Use HTTPS

---

## CORS Policy

Allowed origins:
- `http://localhost:3000`
- `http://frontend:3000`

Allowed methods:
- GET, POST, PUT, DELETE, OPTIONS

---

## Testing the API

### Using cURL

```bash
# Get all users
curl -i http://localhost:8080/api/users

# Create a user
curl -i -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","description":"Test"}'

# Update a user
curl -i -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated User","email":"updated@example.com"}'

# Delete a user
curl -i -X DELETE http://localhost:8080/api/users/1
```

### Using Postman

1. Import the API base URL: `http://localhost:8080/api`
2. Create requests for each endpoint
3. Use the provided request body examples
4. Test different status codes

---

**Version:** 1.0.0  
**Last Updated:** 2024-02-11
