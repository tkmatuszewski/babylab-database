import React from "react";
import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import DataRow from "../DataRow/DataRow";

const classNames = require("classnames");

const DatabaseList = ({
  loading,
  data,
  setData,
  dataDefault,
  dataPasser,
  setDimBg,
}) => {
  const [showSelected, setShowSelected] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleButton = (on, off, current) => {
    off(false);
    return on(!current);
  };

  const handleSelected = () => {
    toggleButton(setShowSelected, setShowNotifications, showSelected);
    const selectedChildren = data.filter(
      (child) => child.data.data().selected === true
    );
    showSelected ? setData(dataDefault) : setData(selectedChildren);
  };

  const rowRenderer = ({ index, style }) => {
    return (
      <DataRow
        style={style}
        getData={dataPasser}
        setDimBg={setDimBg}
        index={index}
        id={data[index].data.id}
        childData={data[index]}
      />
    );
  };

  const rowHeight = 65;

  const selectedButton = classNames("databaseData__list__item", {
    active: showSelected,
  });

  const notificationsButton = classNames("databaseData__list__item", {
    active: showNotifications,
  });

  return (
    <div className="databaseData__list">
      <aside className="databaseData__list__setup">
        <div onClick={handleSelected} className={selectedButton}>
          <div className="databaseData__list__image__fav" />
        </div>
        <div
          onClick={() =>
            toggleButton(
              setShowNotifications,
              setShowSelected,
              showNotifications
            )
          }
          className={notificationsButton}
        >
          <div className="databaseData__list__image__not">
            <span></span>
          </div>
        </div>
      </aside>
      {data.length < 1 && !loading ? (
        <div className="databaseData__noResults">
          <div className="databaseData__illustration" />
          <strong>Ups, nikogo nie ma!</strong>
        </div>
      ) : (
        <div className="databaseData__wrapper">
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={rowRenderer}
                rowCount={data.length}
              />
            )}
          </AutoSizer>
        </div>
      )}
    </div>
  );
};

export default DatabaseList;
