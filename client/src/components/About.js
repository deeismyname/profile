import React, { useEffect } from "react";
import "../components/css/styles.css";
import phpImg from '../images/php.png';
import laravelImg from '../images/laravel.png';
import nodeJsImg from '../images/nodejs.png';
import jsImg from '../images/js.png';
import reactImage from '../images/rect.png'
import mysqlImage from '../images/mysql.png'
import mongoImage from '../images/mongo.png'
import nginxImage from '../images/nginx.png'
import apacheImage from '../images/apache.png'
import dockeImage from '../images/docker.png'
import bootstrapImage from '../images/bootstrap.png'
import htmlImage from '../images/html.png'
import cssImage from '../images/css.png'
import expressImage from '../images/express.png'


const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            // Remove the 'show' class from all elements
            document.querySelectorAll(".show").forEach((el) => el.classList.remove("show"));

            // Add the 'show' class to the currently intersecting element
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.8 } // Trigger when 80% of the element is visible
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div id="about" className="about-section">
      {/* {[
        { id: 1, title: "About Me", text: "I specialize in Web Development, crafting responsive applications with PHP, Laravel, JavaScript, NodeJS, HTML, CSS, and more. Skilled in server management, SQL, and deployment on Nginx/Apache, I also design interfaces using tools like Figma and Photoshop. With solid backend expertise and a passion for growth, I’m driven to deliver satisfaction and tackle challenges with a smile." },
        { id: 2, title: "Experience", text: "Back End Developer (TOLDIT Ltd., Jan 2023 – Present): Build and maintain secure APIs and scalable systems using PHP Laravel. Frontend Developer (University of Cape Coast, Oct 2021 – Sep 2022): Developed a web application to streamline teaching schedules." },
        { id: 3, title: "Education", text: "University of Cape Coast Bachelor of Science - Computer Science" },
        { id: 4, title: "Skills and Tools", text: "Web Development, Laravel, PHP, JavaScript, React.js, Bootstrap, jQuery, WordPress, HTM, Docker, Nginx, Apache2, SQL." },
      ].map((section) => ( */}
        <section className="hidden">
          <div className="content">
          <hr></hr>
            <h2>About Me</h2>
             
            <p>
              I'm a skilled Web Developer with a focus on crafting responsive, and efficient applications.
            </p>
            <p>
              My expertise lies in <strong>PHP, Laravel, JavaScript, NodeJS, HTML, and CSS</strong>. 
              I'm adept at <strong>server management</strong>, <strong>SQL</strong>, and deployment on <strong>Nginx/Apache</strong>.
            </p>
            <p>
              Passionate about delivering high-quality solutions, I thrive on tackling complex challenges and exceeding client expectations.
            </p>
          <hr></hr>
          </div>
        </section>

        <section  className="hidden">
          <div className="content" style={{marginTop: 90}}>
          <hr></hr>
            <h2>Experiences</h2>
            <p style={{ textAlign: 'justify' }}><strong>Back End Developer</strong> (TOLDIT Ltd., Jan 2023 – Present): <br></br>
              Build and maintain secure APIs and scalable systems using PHP Laravel. <br></br><br></br>
              <strong>Frontend Developer</strong> (University of Cape Coast, Oct 2021 – Sep 2022): <br></br>
              Developed a web application to streamline teaching schedules.</p>
          <hr></hr>
          </div>
        </section>

        <section  className="hidden">
          <div className="content">
          <hr></hr>
            <h2>Education</h2>
            <p style={{ textAlign: 'center' }}>University of Cape Coast: <br></br><strong>Bachelor of Science - Computer Science</strong></p>
          <hr></hr>
          </div>
        </section>

        <section  className="hidden">
          <div className="content">
          <hr></hr>
            <h2>Skills and Tools </h2>
            <div style={{ textAlign: 'center' }}>
              <img className="skill_image" src={phpImg}></img>
              <img className="skill_image" src={laravelImg}></img>
              <img className="skill_image" src={nodeJsImg}></img>
              <img className="skill_image" src={reactImage}></img>
              <img className="skill_image" src={expressImage}></img>
              <img className="skill_image" src={mysqlImage}></img>
              <img className="skill_image" src={mongoImage}>
              </img><img className="skill_image" src={nginxImage}></img>
              <img className="skill_image" src={apacheImage}></img>
              <img className="skill_image" src={dockeImage}></img>
              <img className="skill_image" src={bootstrapImage}></img>
              <img className="skill_image" src={htmlImage}></img>
              <img className="skill_image" src={cssImage}></img>
              <img className="skill_image" src={jsImg}></img>
              
            </div>
          <hr></hr>
          </div>
        </section>
      {/* ))} */}
    </div>
  );
};

export default About;
