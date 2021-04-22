import React, {useState} from "react";

const NewParticipantParent = ({pageHandler: handlePage, setData, summary}) => {

    const [parentName, setParentName] = useState(summary.parentName);
    const [parentSurname, setParentSurname] = useState(summary.parentSurname);
    const [parentPhone, setParentPhone] = useState(summary.parentPhone);
    const [parentEmail, setParentEmail] = useState(summary.parentEmail);
    const [parentHomeTown, setParentHomeTown] = useState(summary.parentHomeTown);
    const [parentResidence, setParentResidence] = useState(summary.parentResidence);

    const handleClick = () => {
        setData({
            parentName: parentName,
            parentSurname: parentSurname,
            parentEmail: parentEmail,
            parentPhone: parentPhone,
            parentHomeTown: parentHomeTown,
            parentResidence: parentResidence
        }, handlePage("summary"))
    }

    return (
        <>
            <h3 className="newParticipant__right__subheader">Rodzic</h3>
            <form className="newParticipant__right__form">
                <label htmlFor="">Imię
                    <input type="text"
                           name="parentName"
                           value={parentName}
                           required
                           autoComplete="false"
                           onChange={e => setParentName(e.target.value)} />
                </label>
                <label htmlFor="">Nazwisko
                    <input type="text"
                           name="parentSurname"
                           value={parentSurname}
                           required
                           autoComplete="false"
                           onChange={e => setParentSurname(e.target.value)} />
                </label>
                <label htmlFor="">Telefon
                    <input type="text"
                           name="parentPhone"
                           value={parentPhone}
                           required
                           autoComplete="false"
                           onChange={e => setParentPhone(e.target.value)} />
                </label>
                <label htmlFor="">Email
                    <input type="email"
                           name="parentEmail"
                           value={parentEmail}
                           required
                           autoComplete="false"
                           onChange={e => setParentEmail(e.target.value)} />
                </label>
                <label htmlFor="">Miasto
                    <input type="text"
                           name="homeTown"
                           value={parentHomeTown}
                           required
                           autoComplete="false"
                           onChange={e => setParentHomeTown(e.target.value)} />
                </label>
                <label htmlFor="">Miejsce zamieszkania
                    <input type="text"
                           name="parentResidence"
                           value={parentResidence}
                           required
                           autoComplete="false"
                           onChange={e => setParentResidence(e.target.value)} />
                </label>
            </form>
            <div className="newParticipant__buttons">
                <button className="newParticipant__button prev"
                        type="button"
                        onClick={() => {
                            handlePage("child")
                        }}>Poprzednia
                </button>
                <button className="newParticipant__button next"
                        type="button"
                        onClick={() => {
                            handleClick()
                        }}>Dalej
                </button>
            </div>
        </>
    )
}

export default NewParticipantParent
