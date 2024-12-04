import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/styles.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const ProjectPage = () => {
  const location = useLocation();
  const { project } = location.state; // Extract the project object

  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image for popup
  const [showPopup, setShowPopup] = useState(false); // State to toggle popup visibility

  // Function to open the popup with the selected image
  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="project-hero position-relative"
        style={{
          backgroundImage: `${backendUrl}${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          minHeight: "400px",
        }}
      >
        <div
          className="hero-overlay d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            width: "100%",
            height: "100%",
          }}
        >
          <h1
            className="project-title px-4 py-2 text-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "#333",
              borderRadius: "10px",
              maxWidth: "600px",
            }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-details py-5">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <h2 className="mb-4">About the Project</h2>
              <p className="lead">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-4"
              >
                Visit Project
              </a>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card shadow">
                <img
                  src={`${backendUrl}${project.image})`}
                  alt={project.title}
                  className="card-img-top"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Quick Info</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Title:</strong> {project.title}
                    </li>
                    <li className="list-group-item">
                      <strong>Link:</strong>{" "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Catalog Section */}
      <section className="image-catalog py-5">
        <div className="container">
          <h2 className="text-center mb-4">Image Gallery</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Main Image */}
            <div className="col">
              <div className="card" onClick={() => openPopup(project.image)}>
                <img
                  src={`${backendUrl}${project.image}`}
                  alt="Main Project"
                  className="card-img-top"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Main Project Image</h5>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            {project.images.map((img, index) => (
              <div className="col" key={index}>
                <div className="card" onClick={() => openPopup(img)}>
                  <img
                    src={`${backendUrl}${img}`}
                    alt={`Project Image ${index + 1}`}
                    className="card-img-top"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{`${backendUrl}${img}`}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" style={popupOverlayStyle}>
          <div className="popup-content" style={popupContentStyle}>
            <img
              src={`${backendUrl}${selectedImage}`}
              alt="Selected"
              style={{ width: "60vw", objectFit: "cover" }}
            />
            <button
              onClick={closePopup}
              style={closeButtonStyle}
            >
              x
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

// Popup overlay styles
const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

// Popup content styles
const popupContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  position: "relative",
};

// Close button styles
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "hsl(0, 0%, 100%)",
  border: "1px solid",
  color: "red",
  fontSize: "20px",
  cursor: "pointer",
  width: "2rem",
  height: "2rem",
  displayItems: "center"
};

export default ProjectPage;
