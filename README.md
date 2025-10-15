# 🎨 ArtBuy: Full-Stack E-commerce Marketplace

A complete digital marketplace where artists can list work and users can securely purchase unique art pieces. Developed as a full-stack MERN (MongoDB, Express, React, Node.js) application to demonstrate complex system integration and transactional security.

## ✨ Key Features

* **Secure Authentication:** User role management (Buyer/Seller/Admin) implemented using **JWT (JSON Web Tokens)** for secure, stateful sessions.
* **Transactional Flow:** Complete **shopping cart and checkout process**, including **inventory management** and order status tracking.
* **Payment Integration:** Integrated with **[Stripe/PayPal/Dummy Payment] API** for secure, mock credit card processing and order fulfillment.
* **RESTful API:** Developed a robust backend API using **Node.js/Express** to handle all CRUD operations for Products, Users, and Orders.
* **Dynamic UI:** Built with **React** for a fast, responsive user experience, featuring dynamic product filtering and searching.

## 🛠️ Tech Stack

* **Frontend:** React, React Router, [State Management Library, e.g., Redux or Context API], CSS/Tailwind
* **Backend:** Node.js, Express.js
* **Database:** [MongoDB/PostgreSQL/MySQL]
* **Deployment:** [e.g., Frontend on Vercel, Backend on Render/AWS EC2]

## 🚀 How to Run Locally

1.  **Clone the repositories:**
    ```bash
    git clone [https://github.com/IsmailHosen25/artbuy_server.git](https://github.com/IsmailHosen25/artbuy_server.git)
    git clone [https://github.com/IsmailHosen25/](https://github.com/IsmailHosen25/)[artbuy_client_repo_name].git
    ```
2.  **Server Setup (artbuy\_server):**
    ```bash
    cd artbuy_server
    npm install
    # Create a .env file and add: DB_URI=[Your DB Connection], JWT_SECRET=[Your Secret Key]
    npm start
    ```
3.  **Client Setup ([artbuy\_client\_repo\_name]):**
    ```bash
    cd [artbuy_client_repo_name]
    npm install
    # Create a .env file and add: REACT_APP_API_URL=http://localhost:5000
    npm start
    ```
