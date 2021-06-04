import React, { useState } from "react";
import data from "../data/projects.json";

export default function Projects() {
  const [projects] = useState(data.projects);

  return (
    <div className="projectContainer" id="project">
      <h1>Projects</h1>
      <div className="projectMain">
        <div className="projectItems">
          {projects.map((project) => {
            return (
              <>
                <div class="imageContainer">
                  <img
                    className="image"
                    style={{
                      borderRadius: "15%",
                    }}
                    src={project.image}
                    alt={project.name}
                  />
                  <div class="overlay">
                    <div class="icon">
                      <p>{project.paragraph}</p>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <i class="fas fa-sign-in-alt"></i>
                      </a>{" "}
                      <a
                        href={project.front}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
