import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProjectPage = () => {
  const location = useLocation();
  const { project } = location.state; // Extract the project object

  return (
    <div>
        <Header />
            <section className="project-page py-5">
            <div className="container">
                <h1>{project.title}</h1>
                <img
                src={`http://localhost:5000${project.image}`}
                alt={project.title}
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                />
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project
                </a>
            </div>
            </section>
        <Footer />
    </div>
  );
};

export default ProjectPage;
