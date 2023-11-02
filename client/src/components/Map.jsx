import { React, useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Modal from './Modal';
import Legend from './Legend';
import PopupTable from './PopupTable';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import FadeLoader from 'react-spinners/FadeLoader';

function Map() {
  const mapRef = useRef(null);
  const [center, setCenter] = useState([34.173111, -118.457062]);
  const [zoomLevel, setZoomLevel] = useState(10);
  const [crashes, setCrashes] = useState([]);
  const [filtered, setFiltered] = useState(crashes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setCrashes(data);
        setFiltered(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleMarkerClick = (crash) => {
    const { point_y, point_x } = crash; // Get the latitude and longitude of the clicked marker
    setCenter([point_y, point_x]); // Update the state with the clicked marker's coordinates
    if (mapRef.current) {
      mapRef.current.setView([point_y, point_x], 15); // Set the map view to the clicked marker's position and adjust the zoom level (here, 15) as per your preference
    }
  };

  const iconSelector = (crash) => {
    return crash['collision_severity'] === 1 ? fatalIcon : severeIcon;
  };

  const fatalIcon = new Icon({
    iconUrl:
      'https://www.freepnglogos.com/uploads/dot-png/file-red-dot-svg-wikimedia-commons-23.png',
    iconSize: [12, 12],
  });

  const severeIcon = new Icon({
    iconUrl:
      'https://www.freepnglogos.com/uploads/dot-png/blue-dot-clip-art-clkerm-vector-clip-art-online-20.png',
    iconSize: [12, 12],
  });

  return (
    <div className="relative h-full w-full">
      {/* <Sidebar crashes={crashes} setFiltered={setFiltered} /> */}
      <div className="relative h-full w-full">
        <div className="absolute top-1/2 left-4 z-1000 p-0">
          <Modal
            crashes={crashes}
            filtered={filtered}
            setFiltered={setFiltered}
          />
        </div>
        <div className="absolute bottom-4 left-4 z-1000 p-0 shadow">
          <Legend />
        </div>
        <MapContainer
          center={center}
          zoom={zoomLevel}
          className="h-full w-full"
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_TL_ACCESS_KEY}`}
            attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
          />
          {/* Conditionally render Loading component while data is loading */}
          {isLoading ? (
            <div className="fixed inset-0 z-1000 flex items-center justify-center bg-white bg-opacity-80 transition-opacity duration-700 ease-in-out pointer-events-none">
              <FadeLoader color="#36d7b7" />
            </div>
          ) : (
            <MarkerClusterGroup maxClusterRadius={45}>
              {filtered &&
                filtered.map((crash, index) => (
                  <Marker
                    key={index}
                    position={[crash.point_y, crash.point_x]}
                    icon={iconSelector(crash)}
                    eventHandlers={{
                      click: () =>
                        mapRef.current && mapRef.current.getZoom() < 13
                          ? handleMarkerClick(crash)
                          : null,
                    }}
                  >
                    <Popup>
                      <PopupTable data={crash} />
                    </Popup>
                  </Marker>
                ))}
            </MarkerClusterGroup>
          )}
        </MapContainer>
      </div>
    </div>
  );
}
export default Map;
