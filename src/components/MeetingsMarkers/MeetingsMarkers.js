import React from "react";

const MeetingsMarkers = (props) => {

    return props.number.map((index) => <li key={index} className="meetingsMarker"/>);
}


export default MeetingsMarkers
