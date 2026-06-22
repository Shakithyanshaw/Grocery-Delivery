# 🛒 Grocery Delivery Platform

<div align="center">

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe)
![Inngest](https://img.shields.io/badge/Inngest-Background_Jobs-000000?style=for-the-badge)

### 🚀 Full Stack Grocery Delivery Application with Admin Panel, Delivery Dashboard & Live Order Tracking

</div>

---

## 📖 Overview

A production-ready grocery delivery platform that enables customers to browse products, place orders, make secure payments, and track deliveries in real time.

The platform includes:

- 🛍️ Customer Shopping Experience
- 🔐 Secure Authentication & Authorization
- 📦 Admin Management Dashboard
- 🚴 Delivery Partner Dashboard
- 📍 Real-Time Order Tracking
- 💳 Stripe Payment Integration
- ⚡ Automated Background Jobs using Inngest
- 📧 Automated Email Notifications

---

## ✨ Features

### 👤 Customer Features

- User Registration & Login
- JWT Authentication
- Browse Grocery Products
- Product Search
- Flash Deals
- Product Details
- Shopping Cart
- Address Management
- Secure Checkout
- Stripe Payments
- Order History
- Real-Time Order Tracking

### 📦 Admin Features

- Admin Dashboard
- Product Management
- Inventory Monitoring
- Order Management
- Delivery Partner Management
- Low Stock Alerts
- Analytics & Reports

### 🚴 Delivery Partner Features

- Delivery Dashboard
- Assigned Orders
- Live Location Sharing
- Delivery Status Updates
- Order Completion Tracking

### ⚡ Automation Features

- Auto Delivery Partner Assignment
- Scheduled Background Tasks
- Low Stock Monitoring
- Promotional Email Campaigns

---

## 🏗️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Context API

### Backend

- Node.js
- Express.js
- JWT Authentication
- REST API

### Database

- PostgreSQL
- Neon Database

### Additional Services

- Stripe Payment Gateway
- Inngest Background Jobs
- Email Notifications

---

## 📂 Project Structure

```bash
grocery-delivery/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

## 🔑 User Roles

| Role             | Permissions                                            |
| ---------------- | ------------------------------------------------------ |
| Customer         | Browse products, place orders, track deliveries        |
| Admin            | Manage products, orders, inventory & delivery partners |
| Delivery Partner | Manage assigned deliveries & update order status       |

---

## 📸 Application Modules

### 🏠 Home Page

- Featured Products
- Categories
- Offers & Promotions

### 🔐 Authentication

- Register
- Login
- Protected Routes

### 🛒 Shopping Cart

- Add / Remove Products
- Quantity Management
- Order Summary

### 📦 Product Management

- Product Listing
- Product Details
- Search & Filters

### 💳 Checkout

- Address Selection
- Payment Processing
- Order Confirmation

### 🚚 Order Tracking

- Live Delivery Updates
- Order Timeline
- Delivery Status Monitoring

### 📊 Admin Dashboard

- Product Management
- Order Management
- Delivery Partner Management

### 🚴 Delivery Dashboard

- Assigned Deliveries
- Route Tracking
- Delivery Completion

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/grocery-delivery.git

cd grocery-delivery
```

### 2️⃣ Install Frontend Dependencies

```bash
cd client

npm install

npm run dev
```

### 3️⃣ Install Backend Dependencies

```bash
cd server

npm install

npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=your_webhook_secret

EMAIL_USER=your_email

EMAIL_PASSWORD=your_email_password
```

---

## 💳 Stripe Payment Integration

### Features

- Secure Online Payments
- Payment Verification
- Order Confirmation
- Stripe Webhooks

---

## ⚡ Inngest Background Jobs

### Implemented Tasks

- Auto Assign Delivery Partners
- Low Stock Notifications
- Promotional Emails
- Scheduled Maintenance Tasks

---

## 📍 Live Order Tracking

Users can:

- Track Order Status
- View Delivery Progress
- Monitor Delivery Partner Location
- Receive Real-Time Updates

---

## 🚀 Deployment

### Frontend

- Vercel

### Backend

- Vercel / Render

### Database

- Neon PostgreSQL

---

## 🌟 Project Highlights

✅ Full Stack MERN-style Architecture

✅ PostgreSQL Database

✅ Secure Authentication

✅ Role-Based Authorization

✅ Stripe Payment Gateway

✅ Real-Time Order Tracking

✅ Admin Dashboard

✅ Delivery Partner Dashboard

✅ Responsive Design

✅ Production Ready

---

## 📈 Future Enhancements

- Mobile Application
- Push Notifications
- AI Product Recommendations
- Multi-Vendor Marketplace
- Advanced Analytics Dashboard

---

## 🤝 Contributing

Contributions are welcome.

### Steps

```bash
# Fork Repository

# Create New Branch
git checkout -b feature/new-feature

# Commit Changes
git commit -m "Added new feature"

# Push Changes
git push origin feature/new-feature
```

Create a Pull Request after pushing your changes.

---

## 👨‍💻 Developer

### Shaw (Shakithyan)

Full Stack Developer

GitHub: https://github.com/Shakithyanshaw

---

## ⭐ Support

If you found this project helpful:

🌟 Star the repository

🍴 Fork the project

📢 Share it with others

---

<div align="center">

### 🚀 Built with React, Node.js, PostgreSQL, Stripe & Inngest

</div>
