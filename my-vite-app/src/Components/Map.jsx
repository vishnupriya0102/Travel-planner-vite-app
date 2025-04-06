import React, { useEffect, useState } from "react";
import { 
  GoogleMap, 
  LoadScript, 
  Marker, 
  InfoWindow, 
  Autocomplete, 
  DirectionsService, 
  DirectionsRenderer 
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 11.1271, // Approximate center of Tamil Nadu
  lng: 78.6569,
};

const GoogleMapsComponent = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("markers")) || [];
    } catch {
      return [];
    }
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [directions, setDirections] = useState(null);
  const [destination, setDestination] = useState(null);
  const [markerNames, setMarkerNames] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("markerNames")) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("markers", JSON.stringify(markers));
    localStorage.setItem("markerNames", JSON.stringify(markerNames));
  }, [markers, markerNames]);

  const onLoad = (mapInstance) => setMap(mapInstance);
  const onUnmount = () => setMap(null);

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const newMarker = { lat, lng };

    // Prevent duplicate markers
    if (!markers.some((marker) => marker.lat === lat && marker.lng === lng)) {
      setMarkers((prev) => [...prev, newMarker]);

      // Reverse geocode marker to get the address
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          setMarkerNames((prev) => ({
            ...prev,
            [`${lat},${lng}`]: results[0].formatted_address,
          }));
        }
      });
    }
  };

  const onPlaceSelected = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setDestination(place.geometry.location);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} onClick={() => setSelectedMarker(marker)} />
        ))}

        {selectedMarker && (
          <InfoWindow position={selectedMarker} onCloseClick={() => setSelectedMarker(null)}>
            <div>{markerNames[`${selectedMarker.lat},${selectedMarker.lng}`] || "Loading..."}</div>
          </InfoWindow>
        )}

        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}>
          <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceSelected}>
            <input
              type="text"
              placeholder="Search a location"
              style={{
                width: "300px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Autocomplete>
        </div>

        {destination && (
          <DirectionsService
            options={{
              destination,
              origin: center,
              travelMode: "DRIVING",
            }}
            callback={(result) => result && setDirections(result)}
          />
        )}

        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
