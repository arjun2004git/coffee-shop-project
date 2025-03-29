# Coffee Shop Management System

This is a comprehensive Coffee Shop Management System designed to streamline the operations of a coffee shop. The system includes functionalities for order management, payment processing, and an admin portal for managing orders.

## Project Structure

```
coffee-shop-management/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── config.js
│   │   ├── controllers/
│   │   │   └── userController.js
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   └── userRoutes.js
│   │   ├── middlewares/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── user.js
│   │   ├── order.js
│   │   ├── payment.js
│   │   ├── script.js
│   │   ├── admin.js
│   │   ├── admin-login.js
│   │   └── config.js
│   ├── pages/
│   │   ├── aboutus.html
│   │   ├── admin.html
│   │   ├── admin-login.html
│   │   ├── confirmation.html
│   │   ├── contact.html
│   │   ├── index.html
│   │   ├── menu.html
│   │   ├── order.html
│   │   ├── payment.html
│   │   └── user-login.html
│   └── README.md
│
├── shared/
│   ├── assets/
│   └── README.md
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Adarxh-vis/coffee-shop-management.git
    ```

2. Navigate to the project directory:
    ```bash
    cd coffee-shop-management
    ```

3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Set up environment variables in `.env` file:
    ```dotenv
    MONGO_URI=mongodb://localhost:27017/coffee-shop
    API_URL=https://api.example.com
    API_KEY=your-api-key
    PORT=5000
    NODE_ENV=development
    ADMIN_USERNAME=arjun
    ADMIN_PASSWORD=arjun2004
    ```

5. Install frontend dependencies (if any) and set up the frontend:
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm run dev
    ```

2. Open the `frontend/pages/index.html` file in your browser to view the frontend.

## Features

- Order Management
- Payment Processing
- Admin Portal
- User Authentication

## License

This project is licensed under the MIT License.