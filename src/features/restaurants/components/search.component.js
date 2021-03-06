import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyWord, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyWord);
  useEffect(() => {
    search(searchKeyword);
  }, []);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggled}
        placeholder="Search a Location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
