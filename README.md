# DigiPlus SIM Card Activation System

This is a SIM Card Activation System built using a **Node.js** backend and a **React** frontend. The project enables users to manage and activate SIM cards by creating, retrieving, updating, and deleting SIM card information.

## Project Overview

The backend is developed with **Node.js**, **Express**, and **MongoDB**, while the frontend is built using **React**. The application allows users to interact with a database of SIM cards, making it easy to manage phone numbers and activate SIM cards.

You can access the live version of the application [here](https://digiplus-red.vercel.app/).

## Features

- Create, Read, Update, and Delete (CRUD) operations for SIM card management.
- View SIM card details.
- Activate/deactivate SIM cards.
- Modern frontend interface with React.
- RESTful API built using Express and MongoDB.

## Technologies Used

### Backend:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js to create the server and handle routing.
- **MongoDB**: NoSQL database for storing SIM card data.
- **Mongoose**: ODM library for MongoDB, simplifying data interaction.
  
### Frontend:
- **React.js**: JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.

## Local Development Setup

To set up the project locally for development, follow these steps:

### 1. Clone the Repository


git clone https://github.com/yourusername/digiplus-sim-card-activation.git
cd digiplus-sim-card-activation

### 2. Backend Setup

## Backend Setup
Navigate to the backend directory:

## cd backend
Install the required dependencies:

## npm install
Create a .env file and add the following variables:

MONGO_URI=<your_mongodb_uri>
PORT=5000
Start the backend server:

npm start
3. Frontend Setup
Navigate to the frontend directory:

cd frontend
Install the required dependencies:

npm install
Start the frontend development server:

npm start
Open your browser and go to http://localhost:3000 to view the app.

API Endpoints
The backend provides the following API endpoints:

Method	Endpoint	Description
GET	/api/sims	Fetch all SIM cards
GET	/api/sims/:id	Fetch a single SIM card by ID
POST	/api/sims	Create a new SIM card
PUT	/api/sims/:id	Update a SIM card by ID
DELETE	/api/sims/:id	Delete a SIM card by ID
Example API Request
To add a new SIM card, send a POST request to http://localhost:5000/api/sims with the following JSON body:

json
Copy code
{
    "sim_number": "123456789012344",
    "phone_number": "+1234567891"
}
Deployment
The frontend is deployed using Vercel. You can view the live application at: https://digiplus-red.vercel.app/.
