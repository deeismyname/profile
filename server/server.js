const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();


const Project = require('./models/Project'); // Ensure correct path
const connectDB = require('./config/db'); // Ensure correct path

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

// Connect to MongoDB
connectDB(); // Connect to MongoDB

// Import routes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes); // Use routes for /api/projects

const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes); // Use routes for /api/projects

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
