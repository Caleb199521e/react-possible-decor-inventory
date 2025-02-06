# Decor Inventory System

## Overview
The Decor Inventory System is a web-based platform designed to manage and track inventory for a decor company. It allows users to add, update, delete, and manage products efficiently.

## Features
- User authentication (Sign-up & Login) using MySQL
- Dashboard for inventory overview
- Add, edit, delete, and search products
- Categorization and filtering of inventory items
- Responsive design

## Tech Stack
- **Frontend**: React
- **Backend**: To be implemented (MySQL planned for authentication and storage)
- **State Management**: Context API / Redux (optional)
- **Styling**: Traditional CSS, Material UI
- **Routing**: React Router
- **Charts & Data Visualization**: Recharts
- **Icons**: Material UI 

## Getting Started
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- MySQL Server (for authentication and data storage)

### Installation
#### 1. Clone the repository
```bash
git clone https://github.com/your-username/decor-inventory-system.git
cd decor-inventory-system
```
#### 2. Install dependencies
```bash
npm install
npm install recharts 
npm install @mui/material 
npm install @mui/icons-material
```


#### 3. Start the development server
```bash
npm start
```


The project should now be running on `http://localhost:5173` (default Vite port).

## Folder Structure
```
/src
  ├── components/       # Reusable UI components
  ├── pages/            # Application pages (Home, Dashboard, Products, etc.)
  ├── services/         # API and database services (to be implemented)
  ├── context/          # State management (if using Context API)
  ├── assets/           # Images, icons, styles
  ├── App.jsx           # Main App component
  ├── main.jsx          # Entry point
  ├── routes.js         # Application routes (React Router)
```

## Planned Backend Setup
- **Database**: MySQL (with a REST API or GraphQL layer)
- **Authentication**: JWT-based authentication (Node.js/Express planned)
- **API Framework**: Express.js or Next.js API Routes (TBD)

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
Feel free to suggest improvements!


