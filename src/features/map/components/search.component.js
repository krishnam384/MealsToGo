import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;
export const Search = () => {
  const { keyWord, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyWord);
  useEffect(() => {
    setSearchKeyword(keyWord);
  }, [keyWord]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search a Location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
