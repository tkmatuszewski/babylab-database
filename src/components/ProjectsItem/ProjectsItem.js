import React from "react";
import MeetingsMarkers from "../MeetingsMarkers/MeetingsMarkers";
import {db} from "../Firebase/FirebaseFirestore";
import NewProjectModal from "../NewProjectModal/NewProjectModal";

const ProjectItem = ({id, data}) => {

    const generateArray = (number) => {
        let marks = [];
        for (let i = 0; i < number; i++) {
            marks.push(i)
        }
        return marks
    }

    const editProject = (id, data) => {
        return <NewProjectModal data={data} />
    }

    const deleteProject = (id) => {
        db.collection("projects").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <li className="projects__item" data-id={id}>
            <div className="projects__item__container">
                <h4>{data.projectName}</h4>
                <p className="projects__item__container__description">
                    <strong>O projekcie</strong>
                    <span>{data.projectDescription}</span>
                </p>
                <div className= "projects__item__container__numbers">
                <span
                    className="projects__item__container__participants">Dzieci w projekcie
                    : {data.projectParticipants}</span>
                    <span
                        className="projects__item__container__meetings">Liczba spotkań w projekcie
                    :
                    <ul className="projects__item__container__meetings__list">
                        <MeetingsMarkers number={generateArray(data.projectMeetings)} />
                    </ul>
                </span>
                </div>
                <ul className="projects__item__container__menu">
                    <li className="projects__container__list__element__menu__element">Edytuj</li>
                    <li className="projects__container__list__element__menu__element"
                        onClick={() => {
                            deleteProject(id)
                        }}>Usuń
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default ProjectItem
