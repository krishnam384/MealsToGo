import React, { useEffect } from "react";
import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      reject("Location Not Found!");
    }

    resolve(location);
  });
};

export const locationTransform = (result) => {
  const formattedLocation = camelize(result);
  const { geometry } = formattedLocation.results[0];
  const { location } = geometry;
  const { lat, lng } = location;
  return { lat, lng, viewport: geometry.viewport };
};
