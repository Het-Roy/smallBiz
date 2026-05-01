# SmallBiz CRM - API Documentation

This document provides all the endpoints available in the SmallBiz CRM backend. Use these to test in Postman and generate your documentation.

**Base URL:** `https://smallbiz.onrender.com/api`

---

## 🔐 Authentication Routes (`/auth`)

### 1. Register User
*   **Method:** `POST`
*   **URL:** `https://smallbiz.onrender.com/api/auth/register`
*   **Body (JSON):**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "businessName": "Doe Enterprises",
      "password": "password123"
    }
    ```
*   **Success Result:** `200 OK` + User Object & Token.

### 2. Login User
*   **Method:** `POST`
*   **URL:** `https://smallbiz.onrender.com/api/auth/login`
*   **Body (JSON):**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
*   **Success Result:** `200 OK` + User Object & Token.

### 3. Get Current User (Me) - SIMPLE MODE
*   **Method:** `GET`
*   **URL:** `https://smallbiz.onrender.com/api/auth/me?token=YOUR_TOKEN`
*   **Tip:** Just paste your token after `?token=` in the URL. No headers needed!
*   **Success Result:** `200 OK` + Your Profile.

### 4. Logout - SIMPLE MODE
*   **Method:** `POST`
*   **URL:** `https://smallbiz.onrender.com/api/auth/logout?token=YOUR_TOKEN`
*   **Tip:** You can also put `"token": "..."` in the JSON body if you prefer.
*   **Success Result:** `{"message": "Logged out successfully."}`

### 5. Complete Onboarding - SIMPLE MODE
*   **Method:** `POST`
*   **URL:** `https://smallbiz.onrender.com/api/auth/onboarding?token=YOUR_TOKEN`
*   **Body (JSON):**
    ```json
    {
      "industry": "Retail",
      "teamSize": "2-5",
      "primaryGoal": "Manage WhatsApp"
    }
    ```
*   **Success Result:** `{"message": "Onboarding complete!"}`

---

## 👥 Contacts Routes (`/contacts`)

### 1. Get All Contacts - SIMPLE MODE
*   **Method:** `GET`
*   **URL:** `https://smallbiz.onrender.com/api/contacts?token=YOUR_TOKEN`
*   **Success Result:** `200 OK` + List of contacts.

### 2. Create New Contact - SIMPLE MODE
*   **Method:** `POST`
*   **URL:** `https://smallbiz.onrender.com/api/contacts?token=YOUR_TOKEN`
*   **Body (JSON):**
    ```json
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "stage": "Lead"
    }
    ```
*   **Success Result:** `200 OK` + Created Contact.

### 3. Get Single Contact
*   **Method:** `GET`
*   **URL:** `https://smallbiz.onrender.com/api/contacts/:id?token=YOUR_TOKEN`

### 4. Update Contact
*   **Method:** `PUT`
*   **URL:** `https://smallbiz.onrender.com/api/contacts/:id?token=YOUR_TOKEN`

### 5. Delete Contact
*   **Method:** `DELETE`
*   **URL:** `https://smallbiz.onrender.com/api/contacts/:id?token=YOUR_TOKEN`
