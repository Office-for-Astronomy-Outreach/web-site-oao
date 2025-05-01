// components/Map.tsx
import { useEffect, useRef } from "react";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom?: number;
  markers?: google.maps.LatLngLiteral[];
}

const EventsMap = ({ center, zoom = 8, markers = [] }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    markers.forEach((position) => {
      new google.maps.Marker({
        position,
        map,
      });
    });
  }, [center, zoom, markers]);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default EventsMap;
