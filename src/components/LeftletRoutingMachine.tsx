import {useMap} from "react-leaflet";
import {useEffect} from "react";
import L from "leaflet";

export const LeftletRoutingMachine = () => {
    const map = useMap();
    useEffect(() => {
        L.Routing.control({
            waypoints: [
                L.latLng( 40.631895, -8.650621 ),
                L.latLng( 40.623199, -8.645783 )
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
            lineOptions : {
                extendToWaypoints: false,
                missingRouteTolerance : 100,
                styles: [{
                    color: '#65c3c8', opacity: 1, weight: 4,
                    lineCap: 'round'
                }]
            }
        }).addTo(map);
    },[])
    return null
}
