import {useMap} from "react-leaflet";
import React, {useEffect} from "react";


type liveCoordinatesProps = {
    latitude: number,
    longitude: number
}
export const LiveMarker: React.FC<{coordinates: liveCoordinatesProps}> = ({coordinates}) => {
    const map = useMap();

    useEffect(() => {
        map.panTo([coordinates.latitude, coordinates.longitude]);
    }, [coordinates])
    return null;
}
