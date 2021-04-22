import React from "react";
import {db} from "../Firebase/FirebaseFirestore";
import {home} from "../../routes";
import {withRouter} from "react-router-dom";

const NewParticipantSummary = ({summary, pageHandler, history}) => {

    const handleSubmit = (data) => {
        const childData = {
            childName: data.childName,
            childSurname: data.childSurname,
            birthday: data.birthday,
            pregDuration: data.pregDuration,
            multilingual: data.multilingual,
            languages: data.languages,
            parentName: data.parentName,
            parentSurname: data.parentSurname,
            parentEmail: data.parentEmail,
            parentPhone: data.parentPhone,
            parentHomeTown: data.parentHomeTown,
            parentResidence: data.parentResidence
        }
        db.collection('childrenDatabase').add(childData).then(
            history.replace(home)).catch(alert("fail")
        )
    }
    return (
        <>
            <h3 className="newParticipant__summary__subtitle">Podsumowanie</h3>
            <div className="newParticipant__summary__child">
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">Badany</span>
                    <span className="newParticipant__summary__data">{summary.childName} {summary.childSurname}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">Data urodzenia</span>
                    <span className="newParticipant__summary__data">{summary.birthday}r</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">Tydzień ciąży</span>
                    <span className="newParticipant__summary__data">{summary.pregDuration}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">Wielojęzyczne</span>
                    <span className="newParticipant__summary__data">{summary.multilingual ? "tak" : "nie"}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">Znane języki</span>
                    <span
                        className="newParticipant__summary__data">{summary.multilingual ? summary.languages.toLowerCase() : "polski"}</span>
                </div>

            </div>
            <div className="newParticipant__summary__parent">
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">Rodzic</span>
                    <span className="newParticipant__summary__data">{summary.parentName} {summary.parentSurname}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">email</span>
                    <span className="newParticipant__summary__data">{summary.parentEmail}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">tel</span>
                    <span className="newParticipant__summary__data">{summary.parentPhone}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">zamieszkały</span>
                    <span className="newParticipant__summary__data">{summary.parentResidence}</span>
                </div>
                <div className="newParticipant__summary__label">
                    <span className="newParticipant__summary__info">pochodzenie</span>
                    <span className="newParticipant__summary__data">{summary.parentHomeTown}</span>
                </div>
            </div>
            <div className="newParticipant__summary__buttons">
                <button className="newParticipant__button prev"
                        type="button"
                        onClick={() => {
                            pageHandler("parent")
                        }}>Poprzednia
                </button>
                <button className="newParticipant__button submit"
                        type="button"
                        onClick={() => {
                            handleSubmit(summary);
                        }}>Wyślij
                </button>
            </div>
        </>
    )
}

export default withRouter(NewParticipantSummary)
