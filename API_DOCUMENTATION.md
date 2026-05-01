# SmallBiz CRM - API Documentation

This document provides all the endpoints available in the SmallBiz CRM backend. Use these to test in Postman and generate your documentation.

**Base URL:** `https://smallbiz.onrender.com/api`

---

## 🔐 Authentication Routes (`/auth`)

### 1. Register User
*   **Method:** `POST`
*   **Full Route:** `https://smallbiz.onrender.com/api/auth/register`
*   **Body (JSON):**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "businessName": "Doe Enterprises",
      "password": "password123"
    }
    ```
*   **Success Response:**
    ```json
    {
      "token": "a1b2c3d4e5f6...",
      "user": {
        "id": "60d5ec...",
        "name": "John Doe",
        "email": "john@example.com",
        "businessName": "Doe Enterprises",
        "role": "owner"
      }
    }
    ```

### 2. Login User
*   **Method:** `POST`
*   **Full Route:** `https://smallbiz.onrender.com/api/auth/login`
*   **Body (JSON):**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
*   **Success Response:**
    ```json
    {
      "token": "a1b2c3d4e5f6...",
      "user": {
        "id": "60d5ec...",
        "name": "John Doe",
        "email": "john@example.com",
        "businessName": "Doe Enterprises",
        "role": "owner"
      }
    }
    ```

### 3. Get Current User (Me)
*   **Method:** `GET`
*   **Full Route:** `https://smallbiz.onrender.com/api/auth/me`
*   **Headers:** `Authorization: Bearer <token>`
*   **Success Response:**
    ```json
    {
      "id": "60d5ec...",
      "name": "John Doe",
      "email": "john@example.com",
      "businessName": "Doe Enterprises",
      "role": "owner"
    }
    ```

### 4. Logout
*   **Method:** `POST`
*   **Full Route:** `https://smallbiz.onrender.com/api/auth/logout`
*   **Headers:** `Authorization: Bearer <token>`
*   **Success Response:**
    ```json
    {
      "message": "Logged out successfully."
    }
    ```

### 5. Complete Onboarding
*   **Method:** `POST`
*   **Full Route:** `https://smallbiz.onrender.com/api/auth/onboarding`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "industry": "Retail",
      "teamSize": "2-5",
      "primaryGoal": "Manage WhatsApp messages"
    }
    ```
*   **Success Response:**
    ```json
    {
      "message": "Onboarding complete!",
      "isOnboarded": true,
      "onboarding": {
        "industry": "Retail",
        "teamSize": "2-5",
        "primaryGoal": "Manage WhatsApp messages"
      }
    }
    ```

### 6. Update Profile
*   **Method:** `PUT`
*   **Full Route:** `https://smallbiz.onrender.com/api/auth/update-profile`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "name": "John Updated",
      "businessName": "New Business Name"
    }
    ```
*   **Success Response:**
    ```json
    {
      "message": "Profile updated successfully.",
      "user": { ... }
    }
    ```

---

## 👥 Contacts Routes (`/contacts`)

### 1. Get All Contacts
*   **Method:** `GET`
*   **Full Route:** `https://smallbiz.onrender.com/api/contacts`
*   **Headers:** `Authorization: Bearer <token>`
*   **Success Response:**
    ```json
    {
      "success": true,
      "count": 1,
      "data": [
        {
          "_id": "60d5f1...",
          "name": "Jane Smith",
          "email": "jane@example.com",
          "phone": "+91 99999 88888",
          "company": "Smith Logistics",
          "stage": "Lead",
          "tags": ["VIP"],
          "createdAt": "2026-05-01T..."
        }
      ]
    }
    ```

### 2. Create New Contact
*   **Method:** `POST`
*   **Full Route:** `https://smallbiz.onrender.com/api/contacts`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "+91 99999 88888",
      "company": "Smith Logistics",
      "stage": "Lead"
    }
    ```
*   **Success Response:**
    ```json
    {
      "success": true,
      "data": {
        "_id": "60d5f1...",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "+91 99999 88888",
        "company": "Smith Logistics",
        "stage": "Lead",
        "user": "60d5ec..."
      }
    }
    ```

### 3. Get Single Contact
*   **Method:** `GET`
*   **Full Route:** `https://smallbiz.onrender.com/api/contacts/:id`
*   **Headers:** `Authorization: Bearer <token>`
*   **Success Response:**
    ```json
    {
      "success": true,
      "data": {
        "_id": "60d5f1...",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "+91 99999 88888",
        "company": "Smith Logistics",
        "stage": "Lead"
      }
    }
    ```

### 4. Update Contact
*   **Method:** `PUT`
*   **Full Route:** `https://smallbiz.onrender.com/api/contacts/:id`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "stage": "Won"
    }
    ```
*   **Success Response:**
    ```json
    {
      "success": true,
      "data": {
        "_id": "60d5f1...",
        "name": "Jane Smith",
        "stage": "Won"
      }
    }
    ```

### 5. Delete Contact
*   **Method:** `DELETE`
*   **Full Route:** `https://smallbiz.onrender.com/api/contacts/:id`
*   **Headers:** `Authorization: Bearer <token>`
*   **Success Response:**
    ```json
    {
      "success": true,
      "data": {}
    }
    ```
