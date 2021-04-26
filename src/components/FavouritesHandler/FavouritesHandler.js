import React from "react";
import { db } from "../Firebase/FirebaseFirestore";

const FavouritesHandler = ({ favouritesData, id }) => {
  // const {favourite, setFavourite} = useState(favouritesData)

  const clickHandler = () => {
    // setFavourite(!favouritesData)
    db.collection("childrenDatabase")
      .doc(id)
      .update({
        // selected: favourite
        selected: !favouritesData,
      })
      .then(console.log("selection successful"))
      .catch(console.log("selection unsuccessfull"));
  };

  return (
    <div className="observe" onClick={() => clickHandler()}>
      <svg
        className="observe__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 288 288"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          transform="translate(11.9952 11.9952) scale(.9167)"
        >
          <path
            d="M447.1 256.2C401.8 204 339.2 144 256 144c-33.6 0-64.4 9.5-96.9 29.8C131.7 191 103.6 215.2 65 255l-1 1 6.7 6.9C125.8 319.3 173.4 368 256 368c36.5 0 71.9-11.9 108.2-36.4 30.9-20.9 57.2-47.4 78.3-68.8l5.5-5.5-.9-1.1zM256 160c33.1 0 64.9 9.5 97.2 30.6 23.9 15.6 47.4 36.7 73.7 66.1C388.6 295.4 331.1 352 256 352c-34.2 0-64.2-8.4-94.2-28.2-27.5-18.1-52.3-43.3-76.2-67.8 59.1-59.7 108.4-96 170.4-96z"
            fill={favouritesData ? "#008ef9" : "black"}
            class="color000 svgShape"
          />
          <path
            d="M256 336c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-143.7c35.2 0 64 28.6 64 63.7s-28.8 63.7-64 63.7-63.9-28.6-63.9-63.7 28.7-63.7 63.9-63.7z"
            fill={favouritesData ? "#008ef9" : "black"}
            class="color000 svgShape"
          />
          <path
            d="M288 256c0 17.5-14.4 32-31.8 32S224 272.8 224 255.3s15.8-31.3 32-31.3v-16c-26.5 0-47.9 21.6-47.9 48.2s21.5 48.1 47.9 48.1 48-21.6 48-48.1v-.2h-16z"
            fill={favouritesData ? "#008ef9" : "black"}
            class="color000 svgShape"
          />
        </svg>
      </svg>
    </div>
    // <svg className={"databaseData__list__element__fav"} xmlns="http://www.w3.org/2000/svg"
    //      viewBox="0 0 38 38" height={"38"} width={"38"} onClick={() => clickHandler()}>
    //     {favouritesData ?
    //         <path fill="#008ef9" stroke="#008ef9"
    //               d="M17.9199 14.3203c-.26.25-.38.619-.319.97l.889 4.92c.071.42-.099.839-.45 1.08-.34.25-.79.28-1.17.08l-4.429-2.31c-.161-.08-.331-.131-.5-.131h-.271c-.1.01-.189.051-.27.09l-4.43 2.321c-.22.11-.47.15-.71.11-.6-.12-.989-.681-.89-1.271l.89-4.92c.06-.359-.06-.719-.319-.979l-3.611-3.5c-.3-.3-.41-.731-.269-1.13.13-.391.469-.681.889-.75l4.97-.721c.38-.04.71-.269.88-.609l2.19-4.49c.05-.1.12-.191.201-.27l.089-.07c.04-.051.1-.09.161-.13l.109-.04.17-.07h.421c.38.04.71.269.88.599l2.219 4.471c.16.33.47.55.83.609l4.97.721c.42.06.771.35.91.75.13.399.02.84-.29 1.13l-3.74 3.54z" />
    //         :
    //         <path fill="transparent" stroke="#008ef9"
    //               d="M17.9199 14.3203c-.26.25-.38.619-.319.97l.889 4.92c.071.42-.099.839-.45 1.08-.34.25-.79.28-1.17.08l-4.429-2.31c-.161-.08-.331-.131-.5-.131h-.271c-.1.01-.189.051-.27.09l-4.43 2.321c-.22.11-.47.15-.71.11-.6-.12-.989-.681-.89-1.271l.89-4.92c.06-.359-.06-.719-.319-.979l-3.611-3.5c-.3-.3-.41-.731-.269-1.13.13-.391.469-.681.889-.75l4.97-.721c.38-.04.71-.269.88-.609l2.19-4.49c.05-.1.12-.191.201-.27l.089-.07c.04-.051.1-.09.161-.13l.109-.04.17-.07h.421c.38.04.71.269.88.599l2.219 4.471c.16.33.47.55.83.609l4.97.721c.42.06.771.35.91.75.13.399.02.84-.29 1.13l-3.74 3.54z" />
    //     }
    // </svg>
  );
};
export default FavouritesHandler;
