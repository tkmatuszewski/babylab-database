import React from "react";
import {db} from "../Firebase/FirebaseFirestore";

const FavouritesHandler = ({favouritesData, id}) => {

    // const {favourite, setFavourite} = useState(favouritesData)

    const clickHandler = () => {
        // setFavourite(!favouritesData)
        db.collection('childrenDatabase').doc(id).update({
            // selected: favourite
            selected: !favouritesData
        }).then(console.log("selection successful")).catch(console.log("selection unsuccessfull"))
    }

    return (
        <svg className={"databaseData__list__element__fav"} xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 38 38" height={"38"} width={"38"} onClick={() => clickHandler()}>
            {favouritesData ?
                <path fill="#008ef9" stroke="#008ef9"
                      d="M17.9199 14.3203c-.26.25-.38.619-.319.97l.889 4.92c.071.42-.099.839-.45 1.08-.34.25-.79.28-1.17.08l-4.429-2.31c-.161-.08-.331-.131-.5-.131h-.271c-.1.01-.189.051-.27.09l-4.43 2.321c-.22.11-.47.15-.71.11-.6-.12-.989-.681-.89-1.271l.89-4.92c.06-.359-.06-.719-.319-.979l-3.611-3.5c-.3-.3-.41-.731-.269-1.13.13-.391.469-.681.889-.75l4.97-.721c.38-.04.71-.269.88-.609l2.19-4.49c.05-.1.12-.191.201-.27l.089-.07c.04-.051.1-.09.161-.13l.109-.04.17-.07h.421c.38.04.71.269.88.599l2.219 4.471c.16.33.47.55.83.609l4.97.721c.42.06.771.35.91.75.13.399.02.84-.29 1.13l-3.74 3.54z" />
                :
                <path fill="transparent" stroke="#008ef9"
                      d="M17.9199 14.3203c-.26.25-.38.619-.319.97l.889 4.92c.071.42-.099.839-.45 1.08-.34.25-.79.28-1.17.08l-4.429-2.31c-.161-.08-.331-.131-.5-.131h-.271c-.1.01-.189.051-.27.09l-4.43 2.321c-.22.11-.47.15-.71.11-.6-.12-.989-.681-.89-1.271l.89-4.92c.06-.359-.06-.719-.319-.979l-3.611-3.5c-.3-.3-.41-.731-.269-1.13.13-.391.469-.681.889-.75l4.97-.721c.38-.04.71-.269.88-.609l2.19-4.49c.05-.1.12-.191.201-.27l.089-.07c.04-.051.1-.09.161-.13l.109-.04.17-.07h.421c.38.04.71.269.88.599l2.219 4.471c.16.33.47.55.83.609l4.97.721c.42.06.771.35.91.75.13.399.02.84-.29 1.13l-3.74 3.54z" />
            }
        </svg>
    )
}
export default FavouritesHandler
