import React from "react";
import { StyleSheet, Image, View } from "react-native";
import styled from "styled-components/native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Info,
  Rating,
  Section,
  SectionEnd,
  Address,
  StyledCard,
  StyledCardCover,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard elevation={5}>
      <StyledCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="body">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml width={20} height={20} xml={star} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml width={20} height={20} xml={open} />}
              </Spacer>

              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};
