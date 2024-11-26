// import React from "react";

// const Header = () => {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">Divine's Portfolio</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#home">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#portfolio">Portfolio</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate("/", { replace: true }); // Navigate to the home page
    setTimeout(() => {
      const target = document.querySelector(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
      }
    }, 100); // Slight delay to ensure page is loaded
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/" onClick={(e) => handleNavigation(e, "#home")}>
            Divine's Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={(e) => handleNavigation(e, "#home")}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={(e) => handleNavigation(e, "#about")}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  onClick={(e) => handleNavigation(e, "#portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={(e) => handleNavigation(e, "#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
