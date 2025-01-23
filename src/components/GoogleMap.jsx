import React, { useEffect } from "react";
import L from "leaflet"; // Leaflet for rendering the map
import "leaflet/dist/leaflet.css"; // Leaflet CSS

const GoogleMap = () => {
  useEffect(() => {
    // Define the map initialization function
    const initMap = async () => {
      // Fetch map data from RapidAPI
      const response = await fetch(
        "https://google-api31.p.rapidapi.com/map",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "65a35712e5mshaa66a0ab5621163p17c08cjsne09fd3690f18",
            "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();

      // Example: Use fetched data to determine map center
      const location = {
        lat: data.latitude || 37.7749, // Default to San Francisco if no data
        lng: data.longitude || -122.4194,
      };

      // Create the map instance using Leaflet.js
      const map = L.map("map").setView([location.lat, location.lng], 8);

      // Add OpenStreetMap tiles (free alternative to Google Maps)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker to the map
      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup("You are here!")
        .openPopup();
    };

    // Initialize the map
    initMap();
  }, []);

  // Render a container for the map
  return (
    <div className="flex flex-col items-center justify-center p-4">
      
      <div
        id="map"
        className="w-full h-72 rounded-lg shadow-lg border border-gray-200"
      ></div>
    </div>
  );
};

export default GoogleMap;
