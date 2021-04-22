import React, {useState} from "react";
import {db} from "../Firebase/FirebaseFirestore";

const MeetingDateForm = ({close, currProject, index, docId, setDimBg}) => {

    const [date, setDate] = useState("")

    const dateToString = (date) => {
        const dateArray = date.split("-");
        const reversed = dateArray.reverse();

        return reversed.join(".")
    }

    let condition = currProject.meetings.indexOf(Number) === -1;

    const updateMeetings = () => {

        currProject.meetings[index] = date

        return currProject.meetings
    }

    const deleteMeeting = () => {
        currProject.meetings[index] = index

        db.collection("childrenDatabase").doc(docId).collection("currentProject").doc(currProject.name).update({
            meetings: currProject.meetings
        }).then(close).catch()

    }


    const handleSubmit = () => {
        if (condition) {
            db.collection("childrenDatabase").doc(docId).collection("currentProject").doc(currProject.name).update({
                meetings: updateMeetings()
            }).then(close).catch()
        } else {
            alert("Wszystkie przewidziane spotkania już się odbyły")
        }
    }

    const handleClose = ()=> {
        setDimBg(false)
        return close(false)
    }

    return (
            <div className="meetingDateForm">
                <button className="meetingDateForm__close"
                        onClick={handleClose} />
                <h3 className="meetingDateForm__subheader">
                    Podaj datę spotkania
                </h3>
                <label htmlFor="">
                    <input type="date"
                           onChange={e => setDate(dateToString(e.target.value))}
                           autoFocus={true}
                    />
                    <button onClick={deleteMeeting}>Usuń</button>
                </label>
                <button type="button"
                        className="meetingDateForm__button"
                        disabled={date === ""}
                        onClick={handleSubmit}
                >Dodaj
                </button>
            </div>
    )
}

export default MeetingDateForm
