import React, {useState} from "react";
import MeetingDateForm from "../MeetingDateForm/MeetingDateForm";

const classNames = require('classnames');

const DataRowMeeting = ({index, currProject, detailed, meetingDate, docId, setDimBg}) => {

    const [showForm, setShowForm] = useState(false)

    const handleClose = (boolean) => {
        setDimBg(false)
        return setShowForm(boolean)
    }

    const handleClick = () => {
        if (!detailed) {
            setDimBg(true)
            return setShowForm(true)
        }
    }

    const handleDate = () => {
        if (typeof (meetingDate) === "string" && detailed) {
            return meetingDate
        } else {
            return null
        }
    };

    const condition = detailed;

    const detailedLook = classNames({"dataRowMeeting__detailed": detailed})

    const meeting = classNames({
        dataRowMeeting: true,
        detailed: detailed,
        checked: typeof (meetingDate) === "string"
    })

    return (
        <div className={detailedLook}>
            {showForm ? <MeetingDateForm close={handleClose}
                                         currProject={currProject}
                                         index={index}
                                         docId={docId}
                                         setDimBg={setDimBg} /> : null}
            <div className={meeting}
                 onClick={handleClick}><span>{index + 1}</span>
            </div>
            {condition ? <div className="dataRowMeeting__date">{handleDate()}</div> : null}
        </div>
    )
}

export default DataRowMeeting
