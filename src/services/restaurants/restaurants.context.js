import React, { useState, useContext, useEffect, createContext } from "react";
import { LocationContext } from "../locations/location.context";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantsContextprovider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantRequest(loc)
      .then(restaurantsTransform)
      .then((result) => {
        setTimeout(() => {
          setIsLoading(false);
          setRestaurants(result);
        }, 2000);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      const place = `${location.lat},${location.lng}`;
      retrieveRestaurants(place);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
