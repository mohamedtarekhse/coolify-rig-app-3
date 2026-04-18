# Rigways Asset & Certificate Management System (ACM)

A comprehensive asset and certificate management system built with Node.js/Express backend and MySQL database.

## Features

- **Asset Management**: Track and manage assets with full lifecycle support
- **Certificate Management**: Manage certificates with expiration tracking and history
- **Client Management**: Multi-client support with isolated data
- **Inspector Management**: Track inspectors and their certifications
- **Functional Locations**: Hierarchical location management
- **Notifications**: Automated alerts for certificate expirations
- **Reports**: Generate comprehensive reports
- **User Management**: Role-based access control

## Tech Stack

- **Backend**: Node.js 20+, Express.js
- **Database**: MySQL 8.0
- **Authentication**: JWT-based authentication
- **File Uploads**: Multer for handling file uploads

## Quick Start with Docker Compose

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rigways-acm
```

2. Configure environment variables (optional):
```bash
cp .env.example .env
# Edit .env with your custom values
```

3. Start the application:
```bash
docker-compose up -d
```

4. Access the application:
- Backend API: http://localhost:3000
- Health Check: http://localhost:3000/health

### Default Credentials

After initial setup, use the seeded demo data or create users via the API.

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register new user

### Assets
- `GET /api/assets` - List all assets
- `POST /api/assets` - Create asset
- `GET /api/assets/:id` - Get asset by ID
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset

### Certificates
- `GET /api/certificates` - List all certificates
- `POST /api/certificates` - Create certificate
- `GET /api/certificates/:id` - Get certificate by ID
- `PUT /api/certificates/:id` - Update certificate
- `DELETE /api/certificates/:id` - Delete certificate

### Clients
- `GET /api/clients` - List all clients
- `POST /api/clients` - Create client
- `GET /api/clients/:id` - Get client by ID
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Inspectors
- `GET /api/inspectors` - List all inspectors
- `POST /api/inspectors` - Create inspector
- `GET /api/inspectors/:id` - Get inspector by ID
- `PUT /api/inspectors/:id` - Update inspector
- `DELETE /api/inspectors/:id` - Delete inspector

### Functional Locations
- `GET /api/functional-locations` - List all functional locations
- `POST /api/functional-locations` - Create functional location
- `GET /api/functional-locations/:id` - Get functional location by ID
- `PUT /api/functional-locations/:id` - Update functional location
- `DELETE /api/functional-locations/:id` - Delete functional location

### Notifications
- `GET /api/notifications` - List notifications
- `PUT /api/notifications/:id/read` - Mark notification as read

### Reports
- `GET /api/reports/certificates/expiring` - Get expiring certificates report
- `GET /api/reports/assets/status` - Get asset status report

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `3000` |
| `DB_HOST` | Database host | `mysql` |
| `DB_PORT` | Database port | `3306` |
| `DB_USER` | Database user | `rigways_user` |
| `DB_PASSWORD` | Database password | `rigways_password` |
| `DB_NAME` | Database name | `rigways_acm` |
| `JWT_SECRET` | JWT signing secret | *(required)* |
| `JWT_EXPIRES_SEC` | JWT token expiration | `86400` |
| `CORS_ORIGIN` | Allowed CORS origins | `*` |
| `UPLOAD_DIR` | File upload directory | `/app/uploads` |
| `MAX_FILE_SIZE` | Max file size in bytes | `10485760` |

## Development

### Running Locally

1. Install dependencies:
```bash
cd backend
npm install
```

2. Set up environment variables:
```bash
cp ../.env.example .env
```

3. Start MySQL (or use existing):
```bash
docker-compose up -d mysql
```

4. Run the server:
```bash
npm run dev
```

### Database Migrations

The database schema is automatically initialized when the MySQL container starts using the SQL files in the `/sql` directory.

## Deployment on Coolify

This application is configured for deployment on Coolify:

1. Push code to your Git repository
2. In Coolify, create a new service from Git
3. Select `docker-compose.yml` as the build method
4. Configure environment variables in Coolify UI
5. Deploy

**Important**: Dockerfiles must be in the root directory (already configured).

## Project Structure

```
rigways-acm/
├── Dockerfile              # Backend container
├── Dockerfile.mysql        # MySQL container
├── docker-compose.yml      # Docker Compose configuration
├── .env.example            # Environment variables template
├── .dockerignore           # Docker ignore rules
├── backend/
│   ├── package.json        # Node.js dependencies
│   └── src/
│       ├── server.js       # Main application entry
│       ├── lib/
│       │   ├── db.js       # Database connection
│       │   └── password.js # Password hashing utilities
│       ├── middleware/
│       │   └── auth.js     # Authentication middleware
│       └── routes/         # API route handlers
├── sql/                    # Database initialization scripts
└── docs/                   # Documentation
```

## License

MIT

## Support

For issues and questions, please open an issue on the repository.
