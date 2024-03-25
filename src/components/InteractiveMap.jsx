import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const InteractiveMap = () => {
  // Reference for the map container element
  const mapContainer = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    // Mapbox access token
    mapboxgl.accessToken = import.meta.env.REACT_APP_MAPBOXAPI;

    // Initialize map instance
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    // Clean up function to remove map on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default InteractiveMap;