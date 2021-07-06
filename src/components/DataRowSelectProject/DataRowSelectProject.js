import React, {useEffect, useState} from "react";
import {db} from "../Firebase/FirebaseFirestore";

const DataRowSelectProject = ({participant, close, docId}) => {

    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState("Wybierz z listy")
    const [projects, setProjects] = useState([])

    const createArray = (count) => {
        return Array.apply(null, {length: count}).map(Number.call, Number)
    }

    const handleSubmit = () => {

        projects.map(single => {
            if (single.projectName === value) {
                return db.collection("childrenDatabase").doc(docId).collection("currentProject").doc(value).set({
                    name: single.projectName,
                    meetingCount: single.projectMeetings,
                    meetings: createArray(single.projectMeetings)
                }).then(close).catch(console.log("error"))
            } else {
                return null
            }
        })
    }

    useEffect(() => {
            const unsubscribe = db.collection("projects").onSnapshot(snapshot => {
                    const loadedData = [];
                    snapshot.forEach(doc => {
                        return loadedData.push(Object.assign({}, doc.data()))
                    })
                    setProjects(loadedData)
                    setLoading(false)
                }, error => {
                    console.log(error);
                }
            );
            return unsubscribe
        }, []
    )

    return (
        // <div className="dataRowSelectProject__bg">
            <div className="dataRowSelectProject">
                <button className="dataRowSelectProject__close"
                        onClick={() => close(false)} />
                <h3 className="dataRowSelectProject__subheader">
                    Dodaj <strong>{participant[0]} {participant[1]} </strong> do projektu</h3>
                <select id="selectProject"
                        value={value}
                        disabled={loading}
                        onChange={event => {
                            event.stopPropagation();
                            setValue(event.target.value);
                        }}>
                    <option selected={true} disabled={true} value="Wybierz z listy">
                        Wybierz z listy
                    </option>
                    {projects.map(project => {
                            return (
                                <option value={project.projectName}
                                        key={project.projectName}>
                                    {project.projectName}
                                </option>
                            )
                        }
                    )}
                </select>
                <button type="submit"
                        className="dataRowSelectProject__button"
                        disabled={value === "Wybierz z listy"}
                        onClick={handleSubmit}>Dodaj
                </button>
            </div>
        // </div>
    )
}

export default DataRowSelectProject
