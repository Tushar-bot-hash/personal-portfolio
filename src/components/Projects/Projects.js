import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// NOTE: Make sure these image files exist in src/Assets/Projects/ with these exact names
import ecommerceImg from "../../Assets/Projects/Screenshot 2025-12-16 110025.png";
import aiGeneratorImg from "../../Assets/Projects/Screenshot 2025-12-16 110125.png";
import portfolioImg from "../../Assets/Projects/Screenshot 2025-12-16 110200.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Project 1: E-Commerce Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="Full-Stack E-Commerce Platform (MERN)"
              description="A robust, full-stack merchandise platform built with the MERN stack. Features include secure user authentication (JWT), handling 1,000+ product operations, and optimized REST APIs for 40% faster page load speeds. Implemented responsive design for seamless user engagement."
              // 🛑 UPDATE THIS LINK
              ghLink="https://github.com/Tushar-bot-hash/MERN-Ecommerce"
              // 🛑 UPDATE THIS LINK
              demoLink="[YOUR ANIME E-COMMERCE LIVE URL HERE]"
            />
          </Col>

          {/* Project 2: AI Image Generator */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiGeneratorImg}
              isBlog={false}
              title="AI Image Generator with API Integration"
              description="Engineered a real-time platform integrating a third-party AI API (e.g., Pollination). Features asynchronous job processing with live progress tracking, enabling creation of 500+ images/day. Optimized API calls to reduce response failures by 30%."
              // 🛑 UPDATE THIS LINK
              ghLink="https://github.com/Tushar-bot-hash/AI-Image-Generator"
              // 🛑 UPDATE THIS LINK
              demoLink="https://ai-image-generator-blond-sigma.vercel.app/"
            />
          </Col>

          {/* Project 3: Portfolio Website (This Project) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Personal Portfolio Website (React)"
              description="My professional portfolio showcasing technical skills, projects, and educational background. Optimized for performance (99% Lighthouse score) using React, Vercel deployment, and integrated GitHub statistics/analytics."
              // 🛑 UPDATE THIS LINK
              ghLink="https://github.com/Tushar-bot-hash/Portfolio"
              // 🛑 UPDATE THIS LINK
              demoLink="[YOUR PORTFOLIO LIVE URL HERE]"
            />
          </Col>
          
          {/* If you have more projects, you can add them here */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;