import React, {useEffect, useState} from "react"
import {Marker, useMap} from "react-leaflet"
import L from "leaflet"

export const LeafletLiveMarker = (props: any) => {

    const [cord, setCord] = useState({lat: 0, lng: 0})
    const markerRef = React.useRef(null)

    return (
        <Marker
            draggable={false}
            position={props.position}
            ref={markerRef}
        />
    )
}