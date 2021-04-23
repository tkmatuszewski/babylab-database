import React, { useEffect, useState } from "react";
import { db } from "../Firebase/FirebaseFirestore";
// import DatabaseTableHeader from "../DatabaseTableHeader/DatabaseTableHeader";
import SearchBar from "../SearchBar/SearchBar";
import DatabaseList from "../DatabaseList/DatabaseList";
import DataRowDetailed from "../DataRowDetailed/DataRowDetailed";

const classNames = require("classnames");

const DatabaseData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataDefault, setDataDefault] = useState([]);
  const [filterValue, setFilterValue] = useState("");
//   const [ageMin, setAgeMin] = useState("");
//   const [ageMax, setAgeMax] = useState("");
  const [outOfGrid, getOutOfGrid] = useState(null);
  const [dimBg, setDimBg] = useState(false);

  const handleChildAge = (date) => {
    const dateElements = date.split(".");
    const today = new Date();

    //years
    let ageYears = today.getFullYear() - dateElements[2];

    //months
    let ageMonths = today.getMonth() - dateElements[1];
    let age = {
      years: ageYears,
      months: ageMonths,
      ageInMonths: ageYears * 12 + ageMonths,
      ageInYears: Number(ageYears + ageMonths / 12).toFixed(2),
    };
    const m = today.getMonth() - dateElements[1];
    if (m < 0 || (m === 0 && today.getDate() < dateElements[0])) {
      ageYears--;
    }
    return age.ageInYears;
  };

  const filterUpdate = (searchTerm) => {
    const filtered = dataDefault.filter((child) => {
      console.log(dataDefault);
      const childData = child.data.data();

      return (
        childData.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        childData.childSurname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilterValue(searchTerm);
    setData(filtered);
  };

  const handleFilter = (ageMin, ageMax) => {
    if (Number(ageMin) === 0 && ageMax === "") {
      return setData(dataDefault);
    } else {
      const filtered = dataDefault.filter((child) => {
        return (
          Number(child.age) <= Number(ageMax) &&
          Number(child.age) >= Number(ageMin)
        );
      });
      return setData(filtered);
    }
  };

  const background = classNames("databaseData__bg", { dim: dimBg });

  const resetFilter = () => {
    return setData(dataDefault);
  };

  const dataPasser = (data) => {
    return getOutOfGrid(data);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = db.collection("childrenDatabase").onSnapshot(
      (snapshot) => {
        const loadedData = [];
        snapshot.forEach((change) => {
          return loadedData.push({
            data: change,
            age: handleChildAge(change.data().birthday),
          });
        });
        setDataDefault(loadedData);
        setData(loadedData);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, [setDataDefault, setData, setLoading]);

  return (
    <div className="databaseData">
      <div className={background} />
      {outOfGrid ? (
        <DataRowDetailed
          close={dataPasser}
          data={outOfGrid}
          setDimBg={setDimBg}
        />
      ) : null}
      <SearchBar
        filterUpdate={filterUpdate}
        resetFilter={resetFilter}
        handleFilter={handleFilter}
      />
      {loading && <h2 className="databaseData__loader">Loading Data</h2>}
      <DatabaseList
        data={data}
        setData={setData}
        loading={loading}
        filterValue={filterValue}
        filterUpdate={filterUpdate}
        dataDefault={dataDefault}
        dataPasser={dataPasser}
        setDimBg={setDimBg}
      />
    </div>
  );
};

export default DatabaseData;
