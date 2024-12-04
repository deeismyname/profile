import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/css/styles.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;


const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/projects`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects(projects);
  }, []);

  if (loading) {
    return (
      <section className="portfolio-section py-5 text-center">
        <div className="container">
          <h2>Loading Projects...</h2>
        </div>
      </section>
    );
  }

  const handleProjectClick = (project) => {
    navigate("/project-page", { state: { project } });
  };

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Project Portfolio</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {projects.map((project, index) => (
            <div className="col mb-4" key={project.id || index}>
              <div className="card h-100">
                <img
                  src={`${backendUrl}${project.image}`}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column custom-card-body">
                  <h5 className="card-title custom-card-title">{project.title}</h5>
                  <p className="card-text custom-card-text">
                    {project.description.length > 100
                      ? `${project.description.substring(0, 100)}...`
                      : project.description}
                  </p>
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="btn btn-outline-light mt-auto"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
