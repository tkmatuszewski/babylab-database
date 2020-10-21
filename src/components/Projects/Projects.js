import React, {useEffect, useState} from "react";
import ProjectItem from "../ProjectsItem/ProjectsItem";
import {db} from "../Firebase/FirebaseFirestore";
import DatabaseHeader from "../DatabaseHeader/DatabaseHeader";
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import {projectsNew} from "../../routes";

const Projects = () => {

    const [projectData, getProjectData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

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
        <>
            <DatabaseHeader />
            <Navigation>
                <div className="projects__main">
                    <div className="projects__main__container">
                        <div className="projects__side__container">
                            <div className="projects__side__container__text">
                                <h3 className="projects__side__container__title">Projekty</h3>
                                <p className="projects__side__container__content">Wszystkie projekty, które obecnie
                                    realizujemy</p>
                            </div>
                            <Link to={projectsNew} className="projects__side__container__button">
                                Nowy
                            </Link>
                        </div>
                        <div className="projects__list">
                        <span className="projects__list__info">Przewiń suwakiem
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
                    </div>
                </div>
            </Navigation>
        </>
    )
}

export default Projects
