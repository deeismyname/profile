const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Project = require('../models/Project');

// Ensure the 'uploads' directory exists, create it if not
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log('Uploads directory created');
}

// Setup file storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // File naming convention
  },
});

const upload = multer({ storage: storage }); // Initialize multer with storage config

// GET route to fetch all projects from the database
router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects)) // Send all projects as a JSON response
    .catch(err => {
      console.error('Error fetching projects:', err);
      res.status(500).json({ message: 'Error fetching projects', error: err });
    });
});

// POST route to add a new project (with file upload)
router.post('/', upload.single('image'), (req, res) => {
  const { title, description, link } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null; // Save the image path if available

  // Create a new Project instance with the uploaded image and other data
  const newProject = new Project({
    title,
    description,
    link,
    image, // Include image path if file is uploaded
  });

  // Save the new project to MongoDB
  newProject.save()
    .then(project => {
      res.status(201).json({ project, message: "Project saved successfully" }); // Return the saved project as a response
    })
    .catch(err => {
      console.error('Error saving project:', err);
      res.status(500).json({ message: 'Error saving project', error: err });
    });
});

module.exports = router;
