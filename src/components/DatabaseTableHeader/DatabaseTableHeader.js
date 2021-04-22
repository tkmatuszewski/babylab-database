import React from "react";
import DataSortButton from "../DataSortButton/DataSortButton";

const DatabaseTableHeader = ({handleSort}) => {
    return (
        <div className="databaseTableHeader">
            <DataSortButton label={"Nr"} dataWidth={"5%"} sort={handleSort} />
            <DataSortButton label={"Grupa"} dataWidth={"5%"} />
            <DataSortButton label={"Imię"} dataWidth={"12%"} />
            <DataSortButton label={"Nazwisko"} dataWidth={"16%"} />
            <DataSortButton label={"Wiek"} dataWidth={"10%"} />
            <DataSortButton label={"Projekty"} dataWidth={"30%"} />
            <DataSortButton label={"Szczegóły"} dataWidth={"10%"} />
            <DataSortButton label={"Menu"} dataWidth={"12%"} />
        </div>
    )
}

export default DatabaseTableHeader
