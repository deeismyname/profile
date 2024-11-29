import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
  });
  const [image, setImage] = useState(null);

  const addProject = () => {
    const formData = new FormData();
    formData.append('title', newProject.title);
    formData.append('description', newProject.description);
    formData.append('link', newProject.link);
    if (image) {
      formData.append('image', image);
    }

    axios
      .post('/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('Project added successfully!');
        setNewProject({ title: '', description: '', link: '' });
        setImage(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container py-4 d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
      <div className="card shadow-lg w-100" style={{ maxWidth: '600px' }}>
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
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
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
