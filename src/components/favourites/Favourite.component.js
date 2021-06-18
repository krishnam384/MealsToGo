import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouriteContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const {
    favourite,
    addFavouriteRestaurant,
    removeFavouriteRestaurant,
  } = useContext(FavouriteContext);

  const isFavourite = favourite.find((item) => {
    return item.placeId === restaurant.placeId;
  });

  const handleFavourites = () =>
    !isFavourite
      ? console.log(addFavouriteRestaurant(restaurant))
      : removeFavouriteRestaurant(restaurant);

  return (
    <FavouriteButton onPress={handleFavourites}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
