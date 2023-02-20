// import { useEffect, useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   useEffect(() => {

//   }, []);

//   return (
   
//   );
// };

// export default Navbar;
// import { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShow(true);
//       } else {
//         setShow(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${show && "navbar__black"}`}>
      // <img
      //   className="navbar__logo"
      //   src="./netflix-logo.png"
      //   alt="Netflix Logo"
      // />
      //  <img
      //   className="navbar__logo"
      //   src="./Netflix-avatar.png"
      //   alt="Netflix Logo"
      // />
      
//     </nav>
//   );
// };

// export default Navbar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import logo from "../../images/netflix-logo.png";
import avatar from "../../images/Netflix-avatar.png";
function ColorSchemesExample() {
  return (
    <>
      <Navbar  bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav className="me-auto">
           
           <img
            className="nav__logo"
            src={logo}
            alt="Netflix Logo"
          />
           <img
            className="nav__avatar"
            src={avatar}
            alt="Netflix Logo"
          />
         
          </Nav>
          </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;