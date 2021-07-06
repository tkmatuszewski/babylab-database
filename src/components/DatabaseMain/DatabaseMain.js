import React, { useContext } from "react";
import { MainBgContext } from "../MainBgContext/MainBgContext";
import { withRouter } from "react-router-dom";
import DatabaseHeader from "../DatabaseHeader/DatabaseHeader";
import { getCurrentUserName } from "../Firebase/FirebaseAuth";
import { signIn } from "../../routes";
import DatabaseData from "../DatabaseData/DatabaseData";
import {
  MainBgTheme,
  MainBgThemeProvider,
} from "../MainBgContext/MainBgContext";

// const classNames = require('classnames');

// const [bgTheme, setBgTheme] = useContext(MainBgTheme);

const DatabaseMain = ({ history }) => {
  const bgTheme = {dim: false, setDim : ()=> {}};

  if (!getCurrentUserName()) {
    history.replace(signIn);
    return null;
  } else {
    // const page = classNames(
    //     "database__page", {
    //         "active": dimBg
    //     }
    // )

    return (
      <section className="databaseMain">
        <DatabaseHeader />
        <MainBgTheme.Provider value={bgTheme}>
          <DatabaseData />
        </MainBgTheme.Provider>
      </section>
    );
  }
};
export default withRouter(DatabaseMain);
