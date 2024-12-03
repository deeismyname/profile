// const mongoose = require('mongoose');

// const ProjectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String,
//   images: String,
//   link: String,
// });

// module.exports = mongoose.model('Project', ProjectSchema);


const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Correct way to import in backend

const ProjectSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4(), // Automatically generate a random ID for each project
    unique: true,  // Ensure that each ID is unique
  },
  title: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
  images: [String],  // Changed to an array since it seems to be storing multiple images
  link: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
