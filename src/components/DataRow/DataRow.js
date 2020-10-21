import React, {useState} from "react";

const DataRow = ({id, style, index, childData}) => {

    const [selected, setselected] = useState(childData.selected)

    const handleClick = () => {
    }

    const handleSelected = () => {
        setselected(!selected)
    };

    const handleChildAge = date => {
        const today = new Date();
        const birthDate = new Date(date);
        //years
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        //months
        let ageMonths = today.getMonth() - birthDate.getMonth()
        let age = ageYears + "l" + " " + ageMonths + "m";


        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            ageYears--;
        }
        if (ageYears === 0) {
            age = ageMonths + "m"
        }
        return age;
    }

    return (
        <div key={id} style={style} className={"databaseData__list__element"} onClick={() => handleClick()}>
            <div className={"databaseData__list__element__id"}>{index + 1}</div>
            <svg className={"databaseData__list__element__fav"} xmlns="http://www.w3.org/2000/svg"
                 onClick={() => handleSelected()}
                 viewBox="0 0 48 48" height={"30"} width={"30"} fill={"purple"}>
                <path
                    d="M12.9 29.6l-2.3 13.2c-0.1 0.4 0.1 0.8 0.4 1 0.3 0.2 0.7 0.3 1.1 0.1L24 37.6l11.9 6.3c0.2 0.1 0.3 0.1 0.5 0.1 0.2 0 0.4-0.1 0.6-0.2 0.3-0.2 0.5-0.6 0.4-1l-2.3-13.2 9.6-9.4c0.3-0.3 0.4-0.7 0.3-1 -0.1-0.4-0.4-0.6-0.8-0.7l-13.3-1.9L24.9 4.5c-0.3-0.7-1.5-0.7-1.8 0l-5.9 12.1L3.9 18.5c-0.4 0.1-0.7 0.3-0.8 0.7s0 0.8 0.3 1L12.9 29.6zM18 18.5c0.3 0 0.6-0.2 0.8-0.5L24 7.2l5.3 10.7c0.2 0.3 0.4 0.5 0.8 0.6l11.8 1.7 -8.5 8.3c-0.2 0.2-0.3 0.6-0.3 0.9l2 11.8 -10.6-5.5c-0.3-0.1-0.6-0.1-0.9 0l-10.6 5.6 2-11.8c0.1-0.3 0-0.7-0.3-0.9l-8.5-8.3L18 18.5z"
                    fill="#008ef9" />
            </svg>
            <div className="databaseData__list__element__name">{childData.childName}</div>
            <div className="databaseData__list__element__surname">{childData.childSurname}</div>
            <div className={"databaseData__list__element__age"}>
                {handleChildAge(childData.dateOfBirth)}
            </div>
            <div className={"databaseData__list__element__projects"}>
                <span>Projekty</span>
                <button className={"databaseData__list__element__projects__add"}>
                    Dołącz
                </button>
            </div>
            <div className={"databaseData__list__element__meetings"}>
            </div>
            <div className="databaseData__list__element__menu">
                <span />
                <span />
                <span />
                <span />
            </div>
        </div>
    )
}

export default DataRow
