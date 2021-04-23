import React from "react";
import DataRowProject from "../DataRowProject/DataRowProject";

const DataRowDetailed = ({ close, setDimBg, data }) => {
  const info = data.childDataPassed;
  const id = data.id;
  const age = data.childData.age;

  return (
    <section className="dataRowDetailed">
      <div className="dataRowDetailed__bg" />
      <button
        className="dataRowDetailed__close"
        onClick={() => {
          setDimBg(false);
          close(null);
        }}
      />
      <h1 className="dataRowDetailed__header">
        <span>{info.childName}</span> <span>{info.childSurname}</span>
      </h1>
      <span className="dataRowDetailed__personal">
        <div>{age + " " + "miesięcy"}</div>
        <div>
          {info.birthday}r ({info.pregDuration}t.c)
        </div>
        <div>{info.languages}</div>
      </span>
      <ul className="dataRowDetailed__parent">
        <h3>Rodzic</h3>
        <li>
          <span>Imię i Nazwisko</span>: {info.parentName} {info.parentSurname}
        </li>
        <li>
          <span>Miejsce zamieszkania</span>: {info.parentResidence}
        </li>
        <li>
          <span>Miejsce urodzenia</span>: {info.parentHomeTown}
        </li>
      </ul>
      <ul className="dataRowDetailed__contact">
        <h3>Kontakt</h3>
        <li>
          <span>Telefon kontaktowy</span>: {info.parentPhone}
        </li>
        <li>
          <span>Adres email</span>: {info.parentEmail}
        </li>
      </ul>

      <div className="dataRowDetailed__projects">
        <h3>Projekty</h3>
        <div className="dataRowDetailed__projects__container">
          {data.projectIncluded.map((project) => (
            <DataRowProject
              key={"detailed" + project.name}
              project={project}
              participant={data}
              docId={id}
              detailed={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default DataRowDetailed;
