import React from "react";

const ProjectItem = (props) => {

    const projectData = props.projectInfo

    return (
        <li className="projects__container__list__element">
            <div className="projects__container__list__element__container">
                <h4>{projectData.name}</h4>
                <p className="projects__container__list__element__description">
                    <strong>O projekcie</strong>
                    <span>{projectData.description}</span>
                </p>
                <span
                    className="projects__container__list__element__participants">Dzieci w projekcie : {projectData.participants}</span>
                <span
                    className="projects__container__list__element__meetings">Liczba spotkań w projekcie : {projectData.meetingCount}</span>
                <ul className="projects__container__list__element__menu">
                    <li className="projects__container__list__element__menu__element">Edytuj</li>
                    <li className="projects__container__list__element__menu__element">Usuń</li>
                </ul>
            </div>
        </li>
    )
}

export default ProjectItem
