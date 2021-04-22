import React, {useState} from "react";

const NewParticipantChild = ({pageHandler, setData, summary}) => {

    const [childName, setChildName] = useState(summary.childName);
    const [childSurname, setChildSurname] = useState(summary.childSurname);
    const [pregDuration, setPregDuration] = useState(summary.pregDuration);
    const [birthDay, setBirthDay] = useState(summary.birthDay);
    const [birthMonth, setBirthMonth] = useState(summary.birthMonth);
    const [birthYear, setBirthYear] = useState(summary.birthYear);
    const [multilingual, setMultilingual] = useState(summary.multilingual);
    const [languages, setLanguages] = useState(summary.languages)

    const clickHandler = () => {
        setData({
            childName: childName,
            childSurname: childSurname,
            birthday: birthDay + "." + birthMonth + "." + birthYear,
            birthDay: birthDay,
            birthMonth: birthMonth,
            birthYear: birthYear,
            pregDuration: pregDuration,
            multilingual: multilingual,
            languages: languages
        })
        pageHandler("parent")
    }

    const handleButtonBlock = () => {
        const valuesArr = [childName, childSurname, pregDuration, birthDay, birthMonth, birthYear]
        let result = ""
        valuesArr.map(element =>
            element.length < 1 ? result = true : result = false)
        return result
    }

    return (
        <>
            <h3 className="newParticipant__right__subheader">Dziecko</h3>
            <form className="newParticipant__right__form">
                <label htmlFor="">Imię
                    <input type="text"
                           name="childName"
                           value={childName}
                           required={true}
                           autoComplete="false"
                           onChange={e => setChildName(e.target.value)} />
                </label>
                <label htmlFor="">Nazwisko
                    <input type="text"
                           name="childSurname"
                           value={childSurname}
                           required={true}
                           autoComplete="false"
                           onChange={e => setChildSurname(e.target.value)} />
                </label>
                <div className="newParticipantChild__birth">
                    <span>Data urodzenia</span>
                    <label className="newParticipantChild__birthDay">
                        <input type="text"
                               name="birthDay"
                               value={birthDay}
                               required={true}
                               autoComplete="false"
                               placeholder="dd"
                               onChange={e => setBirthDay(e.target.value)} />
                    </label>
                    <label className="newParticipantChild__birthMonth">
                        <input type="text"
                               name="birthMonth"
                               value={birthMonth}
                               required={true}
                               autoComplete="false"
                               placeholder="mm"
                               onChange={e => setBirthMonth(e.target.value)} />
                    </label>
                    <label className="newParticipantChild__birthYear">
                        <input type="text"
                               name="birthYear"
                               value={birthYear}
                               required={true}
                               autoComplete="false"
                               placeholder="rrrr"
                               onChange={e => setBirthYear(e.target.value)} />
                    </label>
                </div>
                <label htmlFor="">Ile trwała ciąża?
                    <input type="text"
                           name="pregnancyDurationInWeeks"
                           value={pregDuration}
                           required={true}
                           autoComplete="false"
                           onChange={e => setPregDuration(e.target.value)}
                           placeholder="W tygodniach"
                           className="newParticipantChild__pregDuration" />
                </label>
                <label htmlFor="" id="multilingual__label">Dziecko dwujęzyczne
                    <input id="multilingual__input"
                           type="checkbox"
                           checked={multilingual}
                           onChange={() => setMultilingual(!multilingual)} />
                </label>
                {multilingual && <label htmlFor="">Znane języki
                    <input type="text"
                           name="spokenLanguages"
                           autoComplete="false"
                           value={languages}
                           onChange={e => setLanguages(e.target.value)}
                           className="newParticipantChild__languages" />
                </label>}
            </form>
            <button className="newParticipant__button child"
                    type="button"
                // disabled={handleButtonBlock}
                    onClick={() => clickHandler()
                    }>Dalej
            </button>
        </>
    )
}

export default NewParticipantChild
