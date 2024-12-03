import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
  });
  const [mainImage, setMainImage] = useState(null);  // Main image state
  const [imagesArray, setImagesArray] = useState([]);  // Array of images
  const [projects, setProjects] = useState([]);  // State to hold all projects

  // Fetch all projects from the /projects route
  useEffect(() => {
    axios
      .get('/projects') // Adjust the API endpoint as necessary
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Handle adding a new project
  const addProject = () => {
    const formData = new FormData();
    formData.append('title', newProject.title);
    formData.append('description', newProject.description);
    formData.append('link', newProject.link);

    // Append the main image to the formData
    if (mainImage) {
      formData.append('image', mainImage);
    }

    // Append additional images array to formData
    imagesArray.forEach((file) => {
      formData.append('images', file); // Match the Multer field name
    });

    // Send the request to the server
    axios
      .post('/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('Project added successfully!');
        setNewProject({ title: '', description: '', link: '' });
        setMainImage(null);
        setImagesArray([]);  // Reset images array
      })
      .catch((err) => console.error(err));
  };

  // Handle adding images to the images array
  const handleAddImages = (e) => {
    const newFiles = Array.from(e.target.files);
    setImagesArray((prevArray) => [...prevArray, ...newFiles]); // Add new files to the array
  };

  return (
    <div className="container py-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
  {/* Projects Table */}
  {projects.length > 0 ? (
    <div className="mb-4">
      <h2 className="text-center mb-4">All Projects</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.description.substring(0, 50)}...</td> {/* Show first 50 characters */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="alert alert-info" role="alert">
      No projects available. Please add a project to get started.
    </div>
  )}

  {/* Add New Project Form */}
  <div className="card shadow-lg" style={{ maxWidth: '50vw', width: '100%' }}>
    <div className="card-body">
      <h2 className="text-center mb-4">Add New Project</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProject();
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter project title"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Enter project description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({
                ...newProject,
                description: e.target.value,
              })
            }
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Main Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setMainImage(e.target.files[0])}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Additional Images
          </label>
          <input
            type="file"
            className="form-control"
            id="images"
            multiple
            onChange={handleAddImages}
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => document.getElementById('images').click()} // Trigger the file input when the button is clicked
          >
            Add More Images
          </button>
          {/* Display selected images */}
          <div className="mt-2">
            <ul>
              {imagesArray.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Link
          </label>
          <input
            type="text"
            className="form-control"
            id="link"
            placeholder="Enter project link"
            value={newProject.link}
            onChange={(e) =>
              setNewProject({ ...newProject, link: e.target.value })
            }
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Add Project
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default AddProject;
