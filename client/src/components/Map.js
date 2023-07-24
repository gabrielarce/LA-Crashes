import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Sidebar from './Sidebar';
import PopupTable from './PopupTable';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';

function Map() {
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

  const crashIcon = new Icon({
    iconUrl:
      'https://www.freepnglogos.com/uploads/dot-png/file-red-dot-svg-wikimedia-commons-23.png', //'https://cdn-icons-png.flaticon.com/512/5111/5111178.png ',
    iconSize: [10, 10],
  });

  console.log(filtered);

  return (
    <div className="flex">
      <Sidebar crashes={crashes} setFiltered={setFiltered} />{' '}
      <MapContainer
        center={[34.173111, -118.457062]} // Set the initial map center coordinates
        zoom={10} // Set the initial map zoom level
        style={{ height: '100vh', width: '100%' }} // Adjust the map container style
      >
        <TileLayer
          url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_TL_ACCESS_KEY}`} // Set the tile layer source
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors" // Set the attribution text
        />{' '}
        {/* Add additional map layers, markers, and other components as needed */}{' '}
        <MarkerClusterGroup>
          {' '}
          {filtered &&
            filtered.map((crash) => (
              <Marker
                position={[crash.POINT_Y, crash.POINT_X]}
                icon={crashIcon}
              >
                {' '}
                <Popup>
                  {' '}
                  <PopupTable data={crash} />{' '}
                </Popup>{' '}
              </Marker>
            ))}{' '}
        </MarkerClusterGroup>{' '}
      </MapContainer>{' '}
    </div>
  );
}

export default Map;
