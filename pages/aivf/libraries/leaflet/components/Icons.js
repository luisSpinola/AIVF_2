import L from 'leaflet';


const iconPopupAnchor = [12,21];
export const blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: iconPopupAnchor,
    shadowSize: [41, 41]
});
export const redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: iconPopupAnchor,
    shadowSize: [41, 41]
});
export const greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: iconPopupAnchor,
    shadowSize: [41, 41],
});
export const greyIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: iconPopupAnchor,
    shadowSize: [41, 41]
});
export const yellowIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: iconPopupAnchor,
    shadowSize: [41, 41]
})


const carIconSize = [26,52];
const carIconAnchor = [13, 26];
const carIconPopupAnchor = [13, 26];
export const carDefault = new L.Icon({
    iconUrl: '/car_icon_gray.png',
    iconSize: carIconSize,
    iconAnchor: carIconAnchor,
    popupAnchor: carIconPopupAnchor,
    iconAngle: 0
});
export const carGreen = new L.Icon({
    iconUrl: '/car_icon_green.png',
    iconSize: carIconSize,
    iconAnchor: carIconAnchor,
    popupAnchor: carIconPopupAnchor,
    iconAngle: 0
});
export const carYellow = new L.Icon({
    iconUrl: '/car_icon_yellow.png',
    iconSize: carIconSize,
    iconAnchor: carIconAnchor,
    popupAnchor: carIconPopupAnchor,
    iconAngle: 0
});

export function getBearingForOrientation(d){
    let coord1 =  d.coordsI;
    let coord2 =  d.coordsF;
    let deltaL = coord2[0] - coord1[0];
    let xVar = Math.cos(coord2[1]*Math.PI/180) * Math.sin(deltaL*Math.PI/180);
    let yVar = Math.cos(coord1[1]*Math.PI/180) * Math.sin(coord2[1]*Math.PI/180) - Math.sin(coord1[1]*Math.PI/180) * Math.cos(coord2[1]*Math.PI/180) * Math.cos(deltaL*Math.PI/180);
    let bearing = Math.atan2(xVar,yVar);
    let turnAngle = bearing * (180/Math.PI)
    return (-270-turnAngle);
}