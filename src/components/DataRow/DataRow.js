import React, { useEffect, useState } from "react";
import FavouritesHandler from "../FavouritesHandler/FavouritesHandler";
import DataRowAddToProject from "../DataRowAddToProject/DataRowAddToProject";
import DataRowDetailed from "../DataRowDetailed/DataRowDetailed";
import DataRowMenu from "../DataRowMenu/DataRowMenu";
import DataRowProject from "../DataRowProject/DataRowProject";
// import {MainBgContext} from "../MainBgContext";
// import { MainBgThemeProvider } from "../MainBgContext/MainBgContext";
import { db } from "../Firebase/FirebaseFirestore";

const DataRow = ({ id, style, index, childData, getData, setDimBg}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [projectIncluded, setProjectIncluded] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDetailedAge, setShowDetailedAge] = useState(false);

  const childDataPassed = childData.data.data();

  const handleShowMore = () => {
    const age = childDataPassed.age
    setDimBg(true)
    return getData({projectIncluded, id ,childDataPassed, childData})
  };

  const handleDetailedAge = () => {
    return setShowDetailedAge(!showDetailedAge);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("childrenDatabase")
      .doc(id)
      .collection("currentProject")
      .onSnapshot(
        (snapshot) => {
          setLoading(true);
          const projectData = [];
          snapshot.forEach((change) => {
            return projectData.push(change.data());
          });
          setProjectIncluded(projectData);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
    return unsubscribe;
  }, [setProjectIncluded, setLoading, id]);

  return (
    <div key={id} style={style} className={"databaseData__list__element"}>
      {showDetails ? (
        <DataRowDetailed
          handleClose={setShowDetails}
          detailStatus={showDetails}
          details={childDataPassed}
          projects={projectIncluded}
          docId={id}
        />
      ) : (
        <>
          <div className={"databaseData__list__element__id"}>{index + 1}</div>
          <FavouritesHandler
            favouritesData={childDataPassed.selected}
            id={id}
          />
          <div className="databaseData__list__element__name">
            {childDataPassed.childName}
          </div>
          <div className="databaseData__list__element__surname">
            {childDataPassed.childSurname}
          </div>
          <div className={"databaseData__list__element__age"}>
            {childData.age}
          </div>
          <div className={"databaseData__list__element__projects"}>
            <div className="databaseData__list__element__projects__container">
              {!loading
                ? projectIncluded.map((project) => (
                    <DataRowProject
                      key={childDataPassed.childSurname + project.name}
                      project={project}
                      participant={childDataPassed}
                      docId={id}
                      setDimBg={setDimBg}
                    />
                  ))
                : null}
            </div>
            {/* <MainBgContext.Provider> */}
            <DataRowAddToProject
              participant={[
                childDataPassed.childName,
                childDataPassed.childSurname,
              ]}
              docId={id}
              setDimBg={setDimBg}
            />
            {/* </MainBgContext.Provider> */}
          </div>
          <div className="databaseData__list__element__more" onClick = {handleShowMore}>
            Więcej
          </div>
          <DataRowMenu dataId={id} participant={childDataPassed} />
        </>
      )}
    </div>
  );
};

export default DataRow;
