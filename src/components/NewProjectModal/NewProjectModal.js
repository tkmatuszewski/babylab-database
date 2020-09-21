import React, {useState} from "react";
import {db} from "../Firebase/FirebaseFirestore";

const NewProjectModal = (props) => {

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
            props.handleClick(true)
        }).catch((error) => {
            response = "Error writing document: " + error
            props.handleClick(true)
        });
        return console.log(response);
    }

    return (
        <form className="new__project__modal"
              onSubmit={(e) => {
                  handleSubmit(e)
              }}>
            <button className="new__project__modal__close"
                    onClick={() => {
                        props.handleClick(true)
                    }} />
            <h3 className={"new__project__modal__title"}>Nowy Projekt</h3>
            <div className="new__project__modal__container">
                <label htmlFor="">Nazwa Projektu
                    {/*<span>{errorMessage}</span>*/}
                    <input
                        className="new__project__modal__container__name"
                        type="text"
                        name="Project Name"
                        value={handleProjectName}
                        required={true}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Nazwij projekt"
                    />
                </label>
                <label htmlFor="">Opis Projektu
                    {/*<span>{errorMessage}</span>*/}
                    <input
                        className="new__project__modal__container__description"
                        type="text"
                        name="Project Description"
                        value={handleProjectDescription}
                        required={true}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Napisz coś o projekcie" />
                </label>
                <label htmlFor="">Liczba spotkań w projekcie
                    {/*<span>{errorMessage}</span>*/}
                    <input className="new__project__modal__container__meetings"
                           type="number"
                           name="Project Meetings"
                           value={handleProjectMeetings}
                           required={true}
                           onChange={(e) => setProjectMeetings(e.target.value)}
                           placeholder="Podaj liczbę spotkań w projekcie" />
                </label>
                <button
                    type="submit"
                    className="new__project__modal__submit">Dodaj
                </button>
            </div>
        </form>
    )
}

export default NewProjectModal
