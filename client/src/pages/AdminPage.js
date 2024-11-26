import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminPage = () => {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
  });
  const [image, setImage] = useState(null); // New state for the image file

  useEffect(() => {
    axios.get('/api/projects').then((res) => setProjects(res.data));
    // axios.get('/api/messages').then((res) => setMessages(res.data));
  }, []);

  const addProject = () => {
    const formData = new FormData(); // Create FormData object
    formData.append('title', newProject.title);
    formData.append('description', newProject.description);
    formData.append('link', newProject.link);
    if (image) {
      formData.append('image', image); // Append the image file to formData
    }

    console.log(formData);

    axios
      .post('/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the correct content type
        },
      })
      .then((res) => {
        setProjects([...projects, res.data]);
        setNewProject({ title: '', description: '', link: '' }); // Reset the form
        setImage(null); // Reset image state
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header />

      <main className="mt-5 pt-4">
        <div className="container py-5">
          <h1 className="text-center mb-4">Admin Dashboard</h1>

          <section className="mb-5">
            <h2 className="mb-3">Messages</h2>
            {messages.length > 0 ? (
              <ul className="list-group">
                {messages.map((msg) => (
                  <li className="list-group-item" key={msg._id}>
                    <strong>{msg.name}:</strong> {msg.message} <em>({msg.email})</em>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No messages found.</p>
            )}
          </section>

          <section>
            <h2 className="mb-3">Add New Project</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addProject();
              }}
            >
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({ ...newProject, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])} // Set image on file select
                />
              </div>
              <div className="mb-3">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  placeholder="Link"
                  value={newProject.link}
                  onChange={(e) =>
                    setNewProject({ ...newProject, link: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Project
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdminPage;
