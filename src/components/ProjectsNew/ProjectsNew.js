import React, {useState} from "react";
import {db} from "../Firebase/FirebaseFirestore";
import {Link, withRouter} from "react-router-dom";
import {projects} from "../../routes";
import DatabaseHeader from "../DatabaseHeader/DatabaseHeader";


const ProjectsNew = ({history}) => {

    // const [errorMessage, setErrorMessage] = useState("")
    const [handleProjectName, setProjectName] = useState("")
    const [handleProjectDescription, setProjectDescription] = useState("")
    const [handleProjectMeetings, setProjectMeetings] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        let response = "";

        db.collection("projects").doc().set({
            projectName: handleProjectName,
            projectDescription: handleProjectDescription,
            projectMeetings: handleProjectMeetings,
            projectParticipants: []
        }).then(() => {
            response = "Document successfully written!"
            history.replace(projects)
        }).catch((error) => {
            response = "Error writing document: " + error
        });
        return console.log(response);
    }

    return (
        <>
        <DatabaseHeader />
        <div className="new__project__modal__bg">
            <div className="new__project__modal"
                 onSubmit={e => {
                     handleSubmit(e)
                 }}>
                <div className="new__project__modal__image" />
                <div className="new__project__modal__container">
                    <h3 className={"new__project__modal__title"}>Projekt</h3>
                    <form className="new__project__modal__form">
                        <label htmlFor=""
                               className="new__project__modal__container__name">Nazwa Projektu
                            {/*<span>{errorMessage}</span>*/}
                            <input
                                type="text"
                                name="Project Name"
                                value={handleProjectName}
                                required={true}
                                autoFocus
                                autoComplete={"off"}
                                onChange={e => setProjectName(e.target.value)}
                                placeholder="Nazwij projekt"
                            />
                        </label>
                        <label htmlFor=""
                               className="new__project__modal__container__description">Opis Projektu
                            {/*<span>{errorMessage}</span>*/}
                            <input
                                type="text"
                                name="Project Description"
                                value={handleProjectDescription}
                                required={true}
                                autoComplete={"off"}
                                onChange={e => setProjectDescription(e.target.value)}
                                placeholder="Napisz coś o projekcie" />
                        </label>
                        <label htmlFor=""
                               className="new__project__modal__container__meetings">Liczba spotkań w projekcie
                            {/*<span>{errorMessage}</span>*/}
                            <input
                                type="text"
                                name="Project Meetings"
                                value={handleProjectMeetings}
                                required={true}
                                autoComplete={"off"}
                                onChange={e => setProjectMeetings(e.target.value)}
                                placeholder="Podaj liczbę" />
                        </label>
                        <Link to={projects} className="new__project__modal__cancel">
                            Rezygnuj
                        </Link>
                        <button
                            type="submit"
                            className="new__project__modal__submit">Dodaj
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default withRouter(ProjectsNew)
