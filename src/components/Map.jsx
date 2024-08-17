import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { useEffect } from "react"

function MapUpdater({latitude, longitude}) {
    const map = useMap()

    useEffect(() => {
        map.setView([latitude, longitude], 3)
    }, [map, latitude, longitude])
}

export function Map({latitude, longitude}) {
    return(
        <div>
            <MapContainer 
            center={[latitude, longitude]}
            zoom={3}
            style={{height: "500px", width: "600px"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        A marker at latitude {latitude} and longitude {longitude}
                    </Popup>
                </Marker>
                <MapUpdater latitude={latitude} longitude={longitude}/>
            </MapContainer>
        </div>
    )
}