import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      // saving error
      console.log("Error Writing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
      return jsonValue != null ? setFavourite(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
      console.log("Error Reading", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourite);
  }, [favourite]);

  const add = (restaurant) => {
    const favouriteRestaurants = setFavourite([...favourite, restaurant]);
    return favouriteRestaurants;
  };

  const remove = (restaurant) => {
    const filteredRestaurants = favourite.filter(
      (item) => item.placeId !== restaurant.placeId
    );

    setFavourite([...filteredRestaurants]);
    return filteredRestaurants;
  };
  return (
    <FavouriteContext.Provider
      value={{
        favourite,
        addFavouriteRestaurant: add,
        removeFavouriteRestaurant: remove,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
