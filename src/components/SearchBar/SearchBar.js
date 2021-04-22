import React, {useState} from "react";

const SearchBar = ({value, filterUpdate, ageMin, ageMax, minAgeFilterCondition, maxAgeFilterCondition, handleFilter}) => {

    const [filter, setFilter] = useState(false)
    const [outsider, setOutsider] = useState(false)
    const [ageMin, setAgeMin] = useState("")
    const [ageMax, setAgeMax] = useState("")
    // const [ageMax, setAgeMax] = useState("")

    const handleChange = e => {
        return filterUpdate(e.target.value)
    }

    const handleMinAge= e => {
        return minAgeFilterCondition(e.target.value)
    }

    const handleMaxAge = e  => {
        return maxAgeFilterCondition(e.target.value)
    }

    return (
        <div className="searchBar">
            <div className="searchBar__whitespace"/>
            <div className="searchBar__form">
                <label>
                    <span />
                    <input type="text"
                           value={value}
                           autoComplete="off"
                           placeholder="Szukaj po imieniu lub nazwisku"
                           onChange={handleChange} />
                </label>
                {filter ?
                    <form className="searchBar__filter__options" 
                    // onSubmit={handleFilter(ageMin,ageMax,outsider)
                    }>Wiek
                        <label htmlFor="">Od
                            <input type="text" value={ageMin} onChange={e=>setAgeMin(e.target.value)} />
                        </label>
                        <label htmlFor="">Do
                            <input type="text" value={ageMax} onChange={e=>setAgeMin(e.target.value)} />
                        </label>
                        <label>
                            <input type="checkbox" onClick={setOutsider(!outsider)}>Niezaangażowany</input>
                        </label>
                        <button type="reset">Resetuj</button>
                        <button type="submit">Filtruj</button>
                    </form>
                    :
                    null
                }
                <span className="searchBar__button" onClick={() => {
                    setFilter(!filter)
                }}>{filter ? "Ukryj" : "Filtry"}</span>
            </div>
        </div>
    )
}

export default SearchBar
