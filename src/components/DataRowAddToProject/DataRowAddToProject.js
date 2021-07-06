import React, {useState} from "react";
import DataRowSelectProject from "../DataRowSelectProject/DataRowSelectProject";

const DataRowAddToProject = ({participant, docId, setDimBg }) => {

    const [addToProject, setAddToProject] = useState(false)

    const handleClose = (boolean) => {
        setDimBg(false)
        return setAddToProject(boolean)
    }

    return (
        <>
            {addToProject ? <DataRowSelectProject participant={participant} docId={docId} close={handleClose} /> : null}
            <button className="dataRowAddToProject"
                    onClick={() => {
                        setDimBg(true)
                        setAddToProject(!addToProject)
                    }} />
        </>
    )
}

export default DataRowAddToProject
