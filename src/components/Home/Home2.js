import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate Full Stack Developer with a focus on building
              <b className="purple"> scalable, performance-driven web applications</b>.
              My goal is to craft seamless user experiences while optimizing backend efficiency.
              <br />
              <br />
              I am fluent in core languages like
              <i>
                <b className="purple"> JavaScript (ES6+), C++, and Python </b>
              </i>
              and have extensive experience working with modern development stacks.
              <br />
              <br />
              My key areas of interest are developing products that leverage 
              <b className="purple"> Modern Frameworks, RESTful APIs, </b>
              and exploring the practical applications of 
              <b className="purple"> Artificial Intelligence (AI) and Machine Learning </b> in web services.
              <br />
              <br />
              I primarily build projects using 
              <b className="purple"> the MERN stack </b> and modern frontend frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>, with a keen focus on performance.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;