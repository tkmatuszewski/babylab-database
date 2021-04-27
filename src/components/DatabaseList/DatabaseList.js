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
        {/* <div onClick={handleSelected} className={selectedButton}> */}
        <div className={selectedButton} onClick={handleSelected}>
          <svg className= "databaseData__list__item__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              transform="translate(11.9952 11.9952) scale(.9167)"
            >
              <path
                d="M447.1 256.2C401.8 204 339.2 144 256 144c-33.6 0-64.4 9.5-96.9 29.8C131.7 191 103.6 215.2 65 255l-1 1 6.7 6.9C125.8 319.3 173.4 368 256 368c36.5 0 71.9-11.9 108.2-36.4 30.9-20.9 57.2-47.4 78.3-68.8l5.5-5.5-.9-1.1zM256 160c33.1 0 64.9 9.5 97.2 30.6 23.9 15.6 47.4 36.7 73.7 66.1C388.6 295.4 331.1 352 256 352c-34.2 0-64.2-8.4-94.2-28.2-27.5-18.1-52.3-43.3-76.2-67.8 59.1-59.7 108.4-96 170.4-96z"
                fill="#008ef9"
                class="color000 svgShape"
              />
              <path
                d="M256 336c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-143.7c35.2 0 64 28.6 64 63.7s-28.8 63.7-64 63.7-63.9-28.6-63.9-63.7 28.7-63.7 63.9-63.7z"
                fill="#008ef9"
                class="color000 svgShape"
              />
              <path
                d="M288 256c0 17.5-14.4 32-31.8 32S224 272.8 224 255.3s15.8-31.3 32-31.3v-16c-26.5 0-47.9 21.6-47.9 48.2s21.5 48.1 47.9 48.1 48-21.6 48-48.1v-.2h-16z"
                fill="#008ef9"
                class="color000 svgShape"
              />
            </svg>
          </svg>
        </div>
        {/* <div className="databaseData__list__image__fav" /> */}
        {/* </div> */}
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
          <strong>Ups, nikogo tutaj nie ma!</strong>
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
