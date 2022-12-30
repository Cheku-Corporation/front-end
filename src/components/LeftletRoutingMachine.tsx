import {useMap} from "react-leaflet";
import React, {useEffect} from "react";
import L from "leaflet";

type coordinatesProps = {
    tripNumber: number,
    start: {
        latitude: number,
        longitude: number
    },
    end: {
        latitude: number,
        longitude: number
    }
}


export const LeftletRoutingMachine: React.FC<{coordinates:coordinatesProps[]}> = ({coordinates}) => {
    const map = useMap();
    useEffect(() => {

            coordinates.forEach((coordinate) => {
                const start = L.latLng(coordinate.start.latitude, coordinate.start.longitude);
                const end = L.latLng(coordinate.end.latitude, coordinate.end.longitude);
                L.Routing.control({
                    waypoints: [
                        start,
                        end
                    ],
                    routeWhileDragging: false,
                    addWaypoints: false,
                    fitSelectedRoutes: true,
                    showAlternatives: false,
                    lineOptions: {
                        extendToWaypoints: false,
                        missingRouteTolerance: 100,
                        styles: [
                            {
                                color: "#65c3c8",
                                opacity: 1,
                                weight: 4,
                                lineCap: "round",
                            },
                        ],
                    },
                }).addTo(map);
            }
        )


            // L.Routing.control({
            //     waypoints: [
            //         L.latLng(coordinates[0].start.latitude, coordinates[0].start.longitude),
            //         L.latLng(coordinates[0].end.latitude, coordinates[0].end.longitude),
            //     ],
            //     routeWhileDragging: false,
            //     addWaypoints: false,
            //     fitSelectedRoutes: true,
            //     showAlternatives: false,
            //     lineOptions: {
            //         extendToWaypoints: false,
            //         missingRouteTolerance: 100,
            //         styles: [
            //             {
            //                 color: "#65c3c8",
            //                 opacity: 1,
            //                 weight: 4,
            //                 lineCap: "round",
            //             },
            //         ],
            //     },
            // }).addTo(map);
    }, [coordinates]);
    return null;
};
