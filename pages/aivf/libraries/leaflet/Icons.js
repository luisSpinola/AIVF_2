import L from 'leaflet';

export const redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
export const greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
export const greyIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
export const yellowIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export function getBearingForOrientation(d){
    let coord1 =  [d.coordsI[1], d.coordsI[0]];
    let coord2 =  [d.coordsF[1], d.coordsF[0]];
    let deltaL = coord2[0] - coord1[0];
    let xVar = Math.cos(coord2[1]*Math.PI/180) * Math.sin(deltaL*Math.PI/180);
    let yVar = Math.cos(coord1[1]*Math.PI/180) * Math.sin(coord2[1]*Math.PI/180) - Math.sin(coord1[1]*Math.PI/180) * Math.cos(coord2[1]*Math.PI/180) * Math.cos(deltaL*Math.PI/180);
    let bearing = Math.atan2(xVar,yVar);
    let turnAngle = bearing * (180/Math.PI)
    return (-270-turnAngle);
}