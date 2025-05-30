# Bike Servicing Management API

## Project Summary

A backend API for managing customers, bikes, and service records at a bike servicing center. Built with Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL, the system supports full CRUD operations, job assignment, completion workflows, and overdue-service alerts.

## Live Backend Link

[View the deployed API here](https://bike-servicing-backend-with-node-express-ts-prisma-qbxtcwaex.vercel.app)

## Github Repository

[View the repository code here](https://github.com/MozzammelRidoy/Bike-Servicing-Backend_With_Node_Express_TS_Prisma_Postgres)

## Tech Stack

* **Runtime:** Node.js
* **Web Framework:** Express.js
* **Language:** TypeScript
* **ORM:** Prisma
* **Database:** PostgreSQL
* **Linting & Formatting:** ESLint, Prettier
* **Environment Management:** dotenv
* **Error Handling:** Zod

## Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/MozzammelRidoy/Bike-Servicing-Backend_With_Node_Express_TS_Prisma_Postgres
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Environment variables**

   * Create `.env` File
   * Set the following:

     ```ini
     NODE_ENV=production or development
     DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
     PORT=5000
     ```
4. **Database migrations**

   ```bash
   npx prisma migrate dev 
   ```
5. **Start the server**

   ```bash
   npm run dev
   ```

   The API will run at `http://localhost:5000` by default.

## Key Features

* **Customer Management**

  * **Create Customer** (`POST /api/customers`)

    * **Request Body**

      ```json
      {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "123-456-7890"
      }
      ```
    * **Response (201 Created)**

      ```json
      {
        "success": true,
        "message": "Customer created successfully",
        "data": {
          "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phone": "123-456-7890",
          "createdAt": "2025-04-11T12:34:56.789Z"
        }
      }
      ```

  * **Get All Customers** (`GET /api/customers`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Customers fetched successfully",
        "data": [
          {
            "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "123-456-7890",
            "createdAt": "2025-04-11T12:34:56.789Z"
          }
        ]
      }
      ```

  * **Get Customer by ID** (`GET /api/customers/:customerId`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Customer fetched successfully",
        "data": {
          "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phone": "123-456-7890",
          "createdAt": "2025-04-11T12:34:56.789Z"
        }
      }
      ```

  * **Delete Customer** (`DELETE /api/customers/:customerId`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Customer deleted successfully"
      }
      ```

* **Bike Management**

  * **Add Bike** (`POST /api/bikes`)

    * **Request Body**

      ```json
      {
        "brand": "Yamaha",
        "model": "R15",
        "year": 2022,
        "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
      }
      ```
    * **Response (201 Created)**

      ```json
      {
        "success": true,
        "message": "Bike added successfully",
        "data": {
          "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
          "brand": "Yamaha",
          "model": "R15",
          "year": 2022,
          "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
        }
      }
      ```

  * **Get All Bikes** (`GET /api/bikes`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Bikes fetched successfully",
        "data": [
          {
            "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
            "brand": "Yamaha",
            "model": "R15",
            "year": 2022,
            "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
          }
        ]
      }
      ```

  * **Get Bike by ID** (`GET /api/bikes/:bikeId`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Bike fetched successfully",
        "data": {
          "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
          "brand": "Yamaha",
          "model": "R15",
          "year": 2022,
          "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
        }
      }
      ```

* **Service Record Management**

  * **Create Service** (`POST /api/services`)

    * **Request Body**

      ```json
      {
        "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
        "serviceDate": "2025-04-11T10:00:00.000Z",
        "description": "Oil change",
        "status": "pending"
      }
      ```
    * **Response (201 Created)**

      ```json
      {
        "success": true,
        "message": "Service record created successfully",
        "data": {
          "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
          "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
          "serviceDate": "2025-04-11T10:00:00.000Z",
          "completionDate": null,
          "description": "Oil change",
          "status": "pending"
        }
      }
      ```

  * **Get All Services** (`GET /api/services`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Service records fetched successfully",
        "data": [ /* array of records */ ]
      }
      ```

  * **Get Service by ID** (`GET /api/services/:serviceId`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Service record fetched successfully",
        "data": { /* single record */ }
      }
      ```

  * **Complete Service** (`PUT /api/services/:serviceId/complete`)

    * **Request Body (optional)**

      ```json
      { "completionDate": "2025-04-11T15:30:00.000Z" }
      ```
    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Service marked as completed",
        "data": { /* updated record with status "done" */ }
      }
      ```

* **Overdue & Pending Services**

  * **Get Pending/Overdue** (`GET /api/services/status`)

    * **Response (200 OK)**

      ```json
      {
        "success": true,
        "message": "Overdue or pending services fetched successfully",
        "data": [ /* records older than 7 days with pending/in-progress */ ]
      }
      ```

* **Error Handling**

  * Standardized error response:

    ```json
    {
    "status": 404,
    "success": false,
    "message": "Customer Not found",
    "error": [
        {
            "path": "id",
            "message": "Customer Not found"
        }
    ],
    "stack": null
    }
    ```
