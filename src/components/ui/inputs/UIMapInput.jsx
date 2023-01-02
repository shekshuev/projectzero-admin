import { MapContainer, TileLayer, FeatureGroup, GeoJSON, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useInput } from "react-admin";
import { useEffect, useState } from "react";
import hash from "object-hash";

import * as turf from "@turf/turf";

import L from "leaflet";

const UIMapInput = props => {
    const {
        field: { onChange, value }
    } = useInput(props);

    const [center, setCenter] = useState([0, 0]);
    const [zoom, setZoom] = useState(2);
    const [state, setState] = useState();

    const ChangeMapView = ({ coords, zoom }) => {
        const map = useMap();
        map.setView(coords, zoom);
        return null;
    };

    const onCreated = data => {
        const geoJSON = data.layer.toGeoJSON();
        if (
            state?.type === "FeatureCollection" &&
            Object.prototype.toString.apply(state?.features) === "[object Array]" &&
            geoJSON.geometry.type === "Polygon"
        ) {
            const newState = { ...state };
            newState.features.push(geoJSON);
            setState(newState);
            onChange(newState);
        }
    };

    const onDeleted = () => {
        state.features.pop();
        onChange(state);
        setState(state);
    };

    useEffect(() => {
        if (value) {
            setState(value);
        } else {
            setState({
                type: "FeatureCollection",
                features: []
            });
        }
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
    }, [value]);

    L.EditToolbar.Delete.include({
        enable: function () {
            this.options.featureGroup.clearLayers();
            onDeleted();
        }
    });

    return (
        <MapContainer
            key={Math.random()}
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%", flexGrow: 1, marginBottom: "24px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <FeatureGroup>
                <EditControl
                    position="topright"
                    onCreated={onCreated}
                    draw={{
                        rectangle: false,
                        circle: false,
                        polyline: false,
                        circlemarker: false,
                        polygon: true,
                        marker: false
                    }}
                    edit={{
                        edit: false
                    }}
                />
                {state && <GeoJSON key={hash(state)} data={state} />}
            </FeatureGroup>
            <ChangeMapView coords={center} zoom={zoom} />
        </MapContainer>
    );
};

export default UIMapInput;
