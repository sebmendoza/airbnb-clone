import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocations, setSelectedLocations] = useState({});

  // Transform the searchResults object into a different form
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  // console.log({ searchResults });
  // console.log(coordinates);

  const center = getCenter(coordinates);
  // console.log({ center });

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  console.log({ selectedLocations });
  return (
    <ReactMapGL
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/sebmendoza/cl8yx3nzy001115phkcmkie5w"
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => {
        console.log({ result });
        return (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              // offsetLeft={-20}
              // offsetTop={-10}
            >
              <p
                role="img"
                onClick={() => setSelectedLocations(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>

            {/* Popup */}
            {selectedLocations.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocations({})}
                latitude={result.lat}
                longitude={result.long}
              ></Popup>
            ) : null}
          </div>
        );
      })}
    </ReactMapGL>
  );
}

export default Map;
