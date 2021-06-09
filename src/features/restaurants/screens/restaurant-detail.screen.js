import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return <RestaurantInfoCard restaurant={restaurant} />;
};
