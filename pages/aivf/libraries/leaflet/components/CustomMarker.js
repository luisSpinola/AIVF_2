import React, {forwardRef, useRef, useEffect} from "react";
import "leaflet-rotatedmarker";
import { Marker } from 'react-leaflet/Marker';

export const CustomMarker = forwardRef(({ children, ...props }, forwardRef) => {
    const markerRef = useRef();
    
    const { rotationAngle, rotationOrigin } = props;
    useEffect(() => {
    const marker = markerRef.current;
    if (marker) {
        marker.setRotationAngle(rotationAngle);
        marker.setRotationOrigin(rotationOrigin);
    }
    }, [rotationAngle, rotationOrigin]);

    return (
        <Marker ref={(ref) => { markerRef.current = ref; if (forwardRef) { forwardRef.current = ref;}}} {...props}>
            {children}
        </Marker>
    );
});