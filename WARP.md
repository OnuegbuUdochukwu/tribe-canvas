# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Tribe Canvas is a full-stack online marketplace for Nigerian artworks built with:
- **Backend**: Spring Boot 3.5.4 with Java 21, PostgreSQL, JWT authentication
- **Frontend**: React 18.2.0 with Create React App
- **Architecture**: Traditional monolithic backend with SPA frontend

## Development Commands

### Backend (Spring Boot)
```bash
# Run backend development server
cd backend
./mvnw spring-boot:run

# Run tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=ArtistControllerIntegrationTest

# Build JAR
./mvnw clean package

# Clean build
./mvnw clean compile
```

### Frontend (React)
```bash
# Run frontend development server
cd frontend
npm start

# Run tests
npm test

# Build for production
npm run build

# Install dependencies
npm install
```

### Full-stack Development
```bash
# Start both services (run in separate terminals)
cd backend && ./mvnw spring-boot:run
cd frontend && npm start
```

## Architecture Overview

### Backend Structure
- **Controllers**: RESTful API endpoints (`/controllers/`)
  - `ArtistController`, `ArtworkController`, `CartController`, `OrderController`, `PaymentController`, `PayoutController`, `UserController`
- **Services**: Business logic layer (`/services/`)
  - Includes external integrations: `PaystackService`, `S3Service`, `DeliveryPartnerService`
- **Models/Entities**: JPA entities (`/models/`)
  - Core entities: `User`, `Artist`, `Artwork`, `Cart`, `Order`, `Payout`
- **Repositories**: Data access layer using Spring Data JPA (`/repositories/`)
- **Security**: JWT-based authentication with Spring Security
- **Config**: `WebSecurityConfig`, `PaystackConfig`

### Frontend Structure
- **Context**: `AuthContext`, `CartContext` for global state management
- **Pages**: Complete page components (`/pages/`)
- **Components**: Reusable UI components (`/components/`)
- **Routing**: React Router with private routes for authentication

### Key Integrations
- **Payment Processing**: Paystack API for Nigerian market
- **File Storage**: AWS S3 for artwork images
- **Database**: PostgreSQL for production
- **Authentication**: JWT tokens with Spring Security

## Database Setup

Ensure PostgreSQL is running locally:
```bash
# Create database
createdb tribecanvas

# Database connection details are in backend/src/main/resources/application.properties
# Default: localhost:5432/tribecanvas
```

## Testing Strategy

The application uses comprehensive integration testing:
- Artist registration and profile management tests
- Earnings and payout system tests
- Order management and tracking tests
- Authentication and authorization tests

Run backend tests to verify integrations:
```bash
cd backend
./mvnw test -Dtest="*IntegrationTest"
```

## API Documentation

Backend includes Swagger/OpenAPI documentation:
- Start backend server
- Visit: `http://localhost:8080/swagger-ui/html`

## Environment Configuration

### Backend Configuration
Key properties in `application.properties`:
- Database connection
- JWT secret configuration
- Paystack API keys
- AWS S3 configuration (implied by dependencies)

### Security Considerations
- JWT tokens for stateless authentication
- CORS configured for frontend communication
- Spring Security for endpoint protection
- Database credentials should be externalized for production

## Business Domain

Tribe Canvas operates as a two-sided marketplace:
- **Artists**: Upload artwork, manage profile, track earnings, request payouts
- **Buyers**: Browse gallery, manage cart, checkout with Paystack, track orders
- **Commission System**: Automated artist payouts with commission calculations
- **Order Fulfillment**: Integration with delivery partners and tracking

## Development Workflow

1. Backend changes: Modify controllers/services → Run integration tests → Verify API with Swagger
2. Frontend changes: Update components/pages → Test with `npm test` → Verify in browser
3. Full-stack features: Implement backend API first → Update frontend to consume API → Test end-to-end
4. Database changes: Use Flyway migrations in `src/main/resources/db/migration/`

## Key Dependencies

### Backend
- Spring Boot Web, Security, Data JPA
- PostgreSQL driver
- JWT (jjwt)
- AWS S3 SDK
- Lombok for boilerplate reduction
- SpringDoc OpenAPI for documentation

### Frontend
- React Router for navigation
- Axios for API calls
- React Paystack for payment integration
- React Icons for UI elements
- Testing Library for component testing
