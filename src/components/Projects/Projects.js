import React, {useEffect, useState} from "react";
import NewProjectModal from "../NewProjectModal/NewProjectModal";
import ProjectItem from "../ProjectsItem/ProjectsItem";
import {db} from "../Firebase/FirebaseFirestore";
import {Link} from "react-router-dom";
import {projectsAddNew} from "../../routes";

const Projects = () => {

    const [projectData, getProjectData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [newProject, setNewProject] = useState(false)
    const [modalTitle, setModalTitle] = useState("Projekty")
    const [buttonName, setButtonName] = useState("Nowy")

    const handleClick = (boolean) => {

        let title = null
        let button = null
        newProject ? title = "Projekty" : title = "Nowy Projekt"
        newProject ? button = "Dodaj" : button = "Powrót"

        setNewProject(!boolean)
        setModalTitle(title)
        setButtonName(button)
    }

    useEffect(() => {

            setLoading(true)
            const unsubscribe =
                db
                    .collection("projects")
                    .onSnapshot(snapshot => {
                            const loadedData = [];
                            snapshot.forEach(doc => {
                                loadedData.push({data: doc.data(), id: doc.id})
                            })
                            getProjectData(loadedData)
                            setLoading(false)
                            return unsubscribe()
                        }, error => {
                            setError(error)
                        }
                    );
        }, []
    )

    return (
        <div className="projects__main">
            {newProject ? <NewProjectModal handleClick={handleClick} /> :
                <div className="projects__main__container">
                    <div className="projects__side__container">
                        <div className="projects__side__container__text">
                            <h3 className="projects__side__container__title">{modalTitle}</h3>
                            <p className="projects__side__container__content">Wszystkie projekty, które obecnie
                                realizujemy</p>
                        </div>
                        <Link to={projectsAddNew}>
                            <button className="projects__side__container__button">
                                    {/*// onClick={() => {*/}
                                    {/*//     handleClick(newProject)*/}
                                    {buttonName}
                            </button>
                        </Link>
                    </div>
                    <div className="projects__list">
                        <span className="projects__list__info">Przewiń
                            <strong />
                        </span>
                        <ul className="projects__list__container">
                            {loading ?
                                <div className="loader">
                                    <strong>Loading</strong>
                                </div>
                                : projectData.map((project, index) => {
                                    return <ProjectItem data={project.data}
                                                        id={project.id}
                                                        key={index} />
                                })
                            }
                        </ul>
                    </div>
                </div>}
        </div>
    )
}

export default Projects
