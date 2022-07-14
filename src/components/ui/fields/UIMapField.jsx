import { MapContainer, TileLayer } from "react-leaflet";

const UIMapField = ({ width, height }) => {
    return (
        <MapContainer center={[51.505, -0.09]}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: height, width: width }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
};

export default UIMapField;