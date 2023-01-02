import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useRecordContext } from "react-admin";
import { useEffect, useState } from "react";
import hash from "object-hash";
import { get } from "lodash";

import * as turf from "@turf/turf";

const UIMapField = ({ source }) => {
    const record = useRecordContext();

    const [center, setCenter] = useState([0, 0]);
    const [zoom, setZoom] = useState(2);
    const [state, setState] = useState(null);

    const ChangeMapView = ({ coords, zoom }) => {
        const map = useMap();
        map.setView(coords, zoom);
        return null;
    };

    useEffect(() => {
        if (record && source) {
            const value = get(record, source);
            setState(value);
            if (
                value?.type === "FeatureCollection" &&
                Object.prototype.toString.apply(value?.features) === "[object Array]" &&
                value?.features?.length > 0
            ) {
                const polygon = turf.multiPolygon(value.features?.map(f => f.geometry.coordinates));
                const centroid = turf.centroid(polygon);
                setCenter([centroid.geometry.coordinates[1], centroid.geometry.coordinates[0]]);
                setZoom(11);
            }
        }
    }, [record, source]);

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ minHeight: "500px", width: "100%", marginBottom: "24px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {state && <GeoJSON key={hash(state)} data={state} />}
            <ChangeMapView coords={center} zoom={zoom} />
        </MapContainer>
    );
};

export default UIMapField;
