//@ts-nocheck
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
                    createMarker: function(i, wp) {
                        let options = {};
                        if (i === 1) {
                            options.icon = L.icon({
                                iconUrl: '/end-icon.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                        }
                        return L.marker(wp.latLng, options);
                    }
                } as any).addTo(map);

            }
        )
    }, [coordinates]);
    return null;
};
