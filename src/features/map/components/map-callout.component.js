import React from "react";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../../../components/restaurant/CompactRestaurantInfo.component";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => {
  return (
    <>
      <CompactRestaurantInfo restaurant={restaurant} isMap />
    </>
  );
};
