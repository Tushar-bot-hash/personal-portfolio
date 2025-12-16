import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">T Tushar</span>{" "}
            from <span className="purple">Durg, Chhattisgarh</span>.
            <br />
            I’m a passionate <span className="purple">Full Stack Developer</span> and an active contributor to open-source projects.
            <br />
            I am currently pursuing my B.Tech in Computer Science at <span className="purple">Rungta College of Engineering and Technology</span>.
            <br />
            <br />
            Outside of coding and development, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching and playing Football ⚽️
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming and Problem Solving 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new AI technologies and development tools 🛠️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it."{" "}
          </p>
          <footer className="blockquote-footer">Tushar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;