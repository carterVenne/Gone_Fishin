import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "Lake Minnetonka",
    position: { lat: 44.9149628, lng: -93.6413485 }
  },
  {
    id: 2,
    name: "Lake Vermilion",
    position: { lat: 47.854741581, lng: -92.2930988276 }
  },
  {
    id: 3,
    name: "Lake Superior",
    position: { lat: 47.123087, lng: -90.999900 }
  },
  {
    id: 4,
    name: "Lake Bemidji",
    position: { lat: 47.47356, lng: -94.88028 }
  }
];

const google = window.google

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "75vw", height: "75vh", border: "5px solid black" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;