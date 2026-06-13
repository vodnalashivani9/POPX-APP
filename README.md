# PopX React Application

## Project Overview

PopX is a simple React-based user registration and login application that allows users to:

- Create a new account
- Login using registered credentials
- View account information after successful login

The project is built using React, React Router DOM, JavaScript, HTML, and CSS.

---

## Features

### Welcome Page

- Welcome screen for users
- Create Account button
- Login button for existing users

### Registration Page

- Full Name
- Phone Number
- Email Address
- Password
- Company Name
- Agency Selection (Yes/No)

### Login Page

- User authentication using Email and Password
- Validation against registered user data

### Account Settings Page

- Displays user profile information
- Shows registered Name and Email Address

---

## Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3
- Local Storage

---

## Project Structure

```text
src
│
|
│
│
├── pages
│   ├── Welcome.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   └── Account.jsx
│
├── styles
│   ├── Welcome.css
│   ├── Register.css
│   ├── Login.css
│   └── Account.css
│
├── App.jsx
├── main.jsx
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd popx-app
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Application Flow

Welcome Page
↓
Create Account
↓
Register Page
↓
Login Page
↓
Account Settings Page

---

## Data Storage

User information is stored using browser Local Storage.

```javascript
localStorage.setItem("user", JSON.stringify(user));
```

The application retrieves stored data during login and account display.

---

## Learning Outcomes

Through this project, the following React concepts were implemented:

- Functional Components
- useState Hook
- React Router DOM
- Navigation using useNavigate
- Form Handling
- Event Handling
- Local Storage
- CSS Styling
- Component-Based Architecture

---

## Future Enhancements

- Form Validation
- Password Encryption
- Backend Integration
- Database Connectivity
- JWT Authentication
- Responsive Mobile Design

---

## Author

Shivani

B.Tech Final Year Student

React Frontend Developer Aspirant
