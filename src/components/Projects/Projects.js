import React from "react";
import ProjectItem from "../ProjectsItem/ProjectsItem";

const Projects = () => {
    const project1 = {
        name: "Project 1",
        description: "Opis projektu",
        participants: 30,
        meetingCount: 5
    }
    const project2 = {
        name: "Project 2",
        description: "Opis projektu",
        participants: 60,
        meetingCount: 4
    }
    const project3 = {
        name: "Project 3",
        description: "Opis projektu",
        participants: 14,
        meetingCount: 5
    }
    const project4 = {
        name: "Project 4",
        description: "Opis projektu",
        participants: 10,
        meetingCount: 3
    }
    return (
        <div className="projects__main">
            <div className="projects__bg">
                <h3 className="projects__bg__title">Projekty</h3>
            </div>
            <div className="projects__container">
                <ul className="projects__container__list">
                    <ProjectItem projectInfo={project1} />
                    <ProjectItem projectInfo={project2} />
                    <ProjectItem projectInfo={project3} />
                    <ProjectItem projectInfo={project4} />
                </ul>
            </div>
        </div>
    )
}

export default Projects
