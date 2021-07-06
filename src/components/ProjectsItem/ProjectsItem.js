import React from "react";
import MeetingsMarkers from "../MeetingsMarkers/MeetingsMarkers";
import {db} from "../Firebase/FirebaseFirestore";
import ProjectsNew from "../ProjectsNew/ProjectsNew";

const ProjectsItem = ({id, data}) => {

    const generateArray = (number) => {
        let marks = [];
        for (let i = 0; i < number; i++) {
            marks.push(i)
        }
        return marks
    }

    // const editProject = (id, data) => {
    // }

    const deleteProject = (id) => {
        db.collection("projects").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <li className="projectsItem" data-id={id}>
            <div className="projectsItem__container">
                <h4>{data.projectName}</h4>
                <p className="projectsItem__container__description">
                    <strong>O projekcie</strong>
                    <span>{data.projectDescription}</span>
                </p>
                <div className="projectsItem__container__numbers">
                <span
                    className="projectsItem__container__participants">Dzieci w projekcie
                    : {data.projectParticipants.length}</span>
                    <span
                        className="projectsItem__container__meetings">Liczba spotkań w projekcie
                    :
                    <ul className="projectsItem__container__meetings__list">
                        <MeetingsMarkers number={generateArray(data.projectMeetings)} />
                    </ul>
                </span>
                </div>
                <ul className="projectsItem__container__menu">
                    <li className="projectsItem__container__menu__element">Edytuj</li>
                    <li className="projectsItem__container__menu__element"
                        onClick={() => {
                            deleteProject(id)
                        }}>Usuń
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default ProjectsItem
