import React from "react";
import DataRowMeeting from "../DataRowMeeting/DataRowMeeting";

const classNames = require('classnames');

const DataRowProject = ({project, detailed, docId, setDimBg}) => {

    const projectMain = classNames("dataRowProject", {"detailed": detailed})

    return (
        <div className={projectMain}>
            <span className="dataRowProject__name">{project.name}</span>
            <div className="dataRowProject__meetings">
                {project.meetings.map((date, index) => {
                    return <DataRowMeeting index={index}
                                           key={docId + project.name + index}
                                           currProject={project}
                                           docId={docId}
                                           meetingDate={date}
                                           detailed={detailed}
                                           setDimBg={setDimBg} />
                })
                }
            </div>
        </div>
    )
}
export default DataRowProject
