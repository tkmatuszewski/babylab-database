import React from "react";

const DataSortButton = ({label, dataWidth, sort}) => {

    const style = {
        width: dataWidth
    }

    return (
        <button style={style}
                className={"dataSortButton"}
                onClick={sort}>
            {label}
        </button>
    )
}

export default DataSortButton
