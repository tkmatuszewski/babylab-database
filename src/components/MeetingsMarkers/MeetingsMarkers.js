import React from "react";

const MeetingsMarkers = ({number}) => {

    return number.map((index) => <li key={index} className="meetingsMarker"/>);
}


export default MeetingsMarkers
