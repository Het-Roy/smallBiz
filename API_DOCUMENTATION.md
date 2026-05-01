# SmallBiz CRM - API Documentation

This document provides all the endpoints available in the SmallBiz CRM backend. Use these to test in Postman and generate your documentation.

**Base URL:** `http://localhost:5000/api` (or your Render URL)

---

## 🔐 Authentication Routes (`/auth`)

### 1. Register User
*   **Method:** `POST`
*   **Endpoint:** `/auth/register`
*   **Body (JSON):**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "businessName": "Doe Enterprises",
      "password": "password123"
    }
    ```
*   **Description:** Creates a new account and returns a JWT token.

### 2. Login User
*   **Method:** `POST`
*   **Endpoint:** `/auth/login`
*   **Body (JSON):**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
*   **Description:** Authenticates a user and returns a fresh JWT token.

### 3. Get Current User (Me)
*   **Method:** `GET`
*   **Endpoint:** `/auth/me`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Returns the profile of the currently authenticated user.

### 4. Logout
*   **Method:** `POST`
*   **Endpoint:** `/auth/logout`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Invalidates the current session token in the database.

### 5. Complete Onboarding
*   **Method:** `POST`
*   **Endpoint:** `/auth/onboarding`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "industry": "Retail",
      "teamSize": "2-5",
      "primaryGoal": "Manage WhatsApp messages"
    }
    ```
*   **Description:** Saves user preferences after signup.

### 6. Update Profile
*   **Method:** `PUT`
*   **Endpoint:** `/auth/update-profile`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "name": "John Updated",
      "businessName": "New Business Name",
      "whatsappNumber": "+919876543210"
    }
    ```
*   **Description:** Updates user profile details.

---

## 👥 Contacts Routes (`/contacts`)

### 1. Get All Contacts
*   **Method:** `GET`
*   **Endpoint:** `/contacts`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Retrieves all contacts belonging to the logged-in user.

### 2. Create New Contact
*   **Method:** `POST`
*   **Endpoint:** `/contacts`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "+91 99999 88888",
      "company": "Smith Logistics",
      "stage": "Lead",
      "tags": ["VIP", "New"],
      "notes": "Met at the conference."
    }
    ```

### 3. Get Single Contact
*   **Method:** `GET`
*   **Endpoint:** `/contacts/:id`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Fetches details of a specific contact by ID.

### 4. Update Contact
*   **Method:** `PUT`
*   **Endpoint:** `/contacts/:id`
*   **Headers:** `Authorization: Bearer <token>`
*   **Body (JSON):**
    ```json
    {
      "stage": "Won",
      "notes": "Closed the deal!"
    }
    ```

### 5. Delete Contact
*   **Method:** `DELETE`
*   **Endpoint:** `/contacts/:id`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Permanently removes a contact.

---

## 🧪 Testing Tips for Postman:
1.  **Environment Variables**: Create an environment in Postman and add a variable called `token`.
2.  **Auth Tab**: In your protected requests, go to the **Auth** tab, select **Bearer Token**, and use `{{token}}`.
3.  **Automatic Token Setting**: You can add this script to the **Tests** tab of your Login request to automatically save the token:
    ```javascript
    const response = pm.response.json();
    if (response.token) {
        pm.environment.set("token", response.token);
    }
    ```
