import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youtube from "../../Assets/Projects/youtube-clone.png";
import notes from "../../Assets/Projects/notes-handler.jpg";
import tictactoe from "../../Assets/Projects/tic-tac.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="A full-fledged YouTube clone built with React, featuring essential functionalities like video playback, search, and suggested videos. Users can browse trending videos,view to channels, and interact with comments. Implemented with React Hooks for state management and styled with CSS for a sleek, responsive design."
              ghLink="https://github.com/mnr-23/youtube-clone"
              demoLink="https://incandescent-rabanadas-8b17c2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes Handler"
              description="A simple and intuitive notes handler built with React, allowing users to create, edit, and delete notes. The app features a clean user interface for seamless note management and is designed to be responsive across devices. Implemented using React Hooks for state management and styled with CSS for a modern look."
              ghLink="https://github.com/mnr-23/webdev1/tree/main/projects/Notes-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A classic Tic Tac Toe game implemented with React, allowing two players to take turns marking X and O on a 3x3 grid. The game includes win detection, indicating the winner or a draw, and supports restarting for new rounds. Built with React's state management and styled with CSS for a visually appealing interface."
              ghLink="https://github.com/mnr-23/webdev1/tree/main/projects/tic-tac-toe-game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
