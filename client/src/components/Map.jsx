// import { useEffect, useState, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import Sidebar from './Sidebar';
// import PopupTable from './PopupTable';
// import 'leaflet/dist/leaflet.css';
// import MarkerClusterGroup from 'react-leaflet-cluster';

// function Map() {
//   const mapRef = useRef(null);
//   const [center, setCenter] = useState([34.173111, -118.457062]);
//   const [crashes, setCrashes] = useState([]);
//   const [filtered, setFiltered] = useState(crashes);

//   useEffect(() => {
//     fetch('/api')
//       .then((response) => response.json())
//       .then((data) => {
//         setCrashes(data);
//         setFiltered(data);
//       });
//   }, []);

//   const handleMarkerClick = (crash) => {
//     const { POINT_Y, POINT_X } = crash; // Get the latitude and longitude of the clicked marker
//     setCenter([POINT_Y, POINT_X]); // Update the state with the clicked marker's coordinates

//     if (mapRef.current) {
//       mapRef.current.setView([POINT_Y, POINT_X], 15); // Set the map view to the clicked marker's position and adjust the zoom level (here, 15) as per your preference
//     }
//   };

//   const crashIcon = new Icon({
//     iconUrl:
//       'https://www.freepnglogos.com/uploads/dot-png/file-red-dot-svg-wikimedia-commons-23.png', //'https://cdn-icons-png.flaticon.com/512/5111/5111178.png ',
//     iconSize: [10, 10],
//   });

//   console.log(filtered);

//   return (
//     <div className="flex">
//       <Sidebar crashes={crashes} setFiltered={setFiltered} />{' '}
//       <MapContainer
//         center={center} // Set the initial map center coordinates
//         zoom={10} // Set the initial map zoom level
//         style={{ height: '100vh', width: '100%' }} // Adjust the map container style
//       >
//         <TileLayer
//           url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_TL_ACCESS_KEY}`} // Set the tile layer source
//           attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors" // Set the attribution text
//         />{' '}
//         {/* Add additional map layers, markers, and other components as needed */}{' '}
//         <MarkerClusterGroup>
//           {' '}
//           {filtered &&
//             filtered.map((crash, index) => (
//               <Marker
//                 key={index}
//                 position={[crash.POINT_Y, crash.POINT_X]}
//                 icon={crashIcon}
//                 eventHandlers={{
//                   click: () => handleMarkerClick(crash),
//                 }}
//               >
//                 {' '}
//                 <Popup>
//                   {' '}
//                   <PopupTable data={crash} />{' '}
//                 </Popup>{' '}
//               </Marker>
//             ))}{' '}
//         </MarkerClusterGroup>{' '}
//       </MapContainer>{' '}
//     </div>
//   );
// }

// export default Map;

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Sidebar from './Sidebar';
import PopupTable from './PopupTable';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';

function Map() {
  const mapRef = useRef(null);
  const [center, setCenter] = useState([34.173111, -118.457062]);
  const [zoomLevel, setZoomLevel] = useState(10);
  const [crashes, setCrashes] = useState([]);
  const [filtered, setFiltered] = useState(crashes);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setCrashes(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    // This useEffect will be triggered once when the component mounts
    if (crashes.length > 0 && mapRef.current) {
      // Check if crashes data is available and the mapRef is ready
      const { POINT_Y, POINT_X } = crashes[0]; // Get the latitude and longitude of the first marker (you can change this logic if needed)
      setCenter([POINT_Y, POINT_X]); // Update the state with the first marker's coordinates
      mapRef.current.setView([POINT_Y, POINT_X], 15); // Set the map view to the first marker's position and adjust the zoom level (here, 15) as per your preference
    }
  }, []); // Empty dependency array ensures this useEffect runs only once

  const handleMarkerClick = (crash) => {
    const { POINT_Y, POINT_X } = crash; // Get the latitude and longitude of the clicked marker
    setCenter([POINT_Y, POINT_X]); // Update the state with the clicked marker's coordinates

    if (mapRef.current) {
      const currentZoomLevel = mapRef.current.getZoom();
      console.log('Current Zoom Level:', currentZoomLevel);

      if (currentZoomLevel < 13) {
        mapRef.current.setView([POINT_Y, POINT_X], 15); // Set the map view to the clicked marker's position and adjust the zoom level (here, 15) as per your preference
      }
    }
  };

  const fatalIcon = new Icon({
    iconUrl:
      'https://www.freepnglogos.com/uploads/dot-png/file-red-dot-svg-wikimedia-commons-23.png',
    iconSize: [11, 11],
  });

  return (
    <div className="flex">
      <Sidebar crashes={crashes} setFiltered={setFiltered} />
      <MapContainer
        center={center}
        zoom={zoomLevel}
        style={{ height: '100vh', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_TL_ACCESS_KEY}`}
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        <MarkerClusterGroup maxClusterRadius={35}>
          {filtered &&
            filtered.map((crash, index) => (
              <Marker
                key={index}
                position={[crash.POINT_Y, crash.POINT_X]}
                icon={fatalIcon}
                eventHandlers={{
                  click: () => handleMarkerClick(crash),
                }}
              >
                <Popup>
                  <PopupTable data={crash} />
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
