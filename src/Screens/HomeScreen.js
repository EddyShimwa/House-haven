import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import HomePageHeader from "../Components/HomePageHeader";
import { Icon, SearchBar } from "react-native-elements";
import Categories from "../Components/Categories";
import Houses from "../Components/Houses";
const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = mockSearch(searchText);
    setSearchResults(results);
  };

  const mockSearch = (searchText) => {
    return [
      "Result 1 for " + searchText,
      "Result 2 for " + searchText,
      "Result 3 for " + searchText,
    ];
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HomePageHeader />
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <View style={{ width: "80%", padding: 10, marginLeft: 25}}>
        <SearchBar
          placeholder="Search Here pleasef..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          onSubmitEditing={handleSearch}
          cancelButtonTitle="Cancel"
          inputContainerStyle={{ borderBottomWidth: 0, borderTopWidth: 0, backgroundColor: 'white', borderRadius: 10, height: 35, }}
          containerStyle={{ borderWidth: 1, backgroundColor: 'white', borderRadius: 10, width: '90%', }}
        />
          </View>
        <TouchableOpacity style={{ marginRight: 20}}>
          <Image
            source={require("../assets/images-icons/filter.png")} // Replace with the correct path to your custom icon
            style={{ width: 60, height: 60, marginRight: 20 }}
          />
        </TouchableOpacity>
    
      </View>

      <Categories />
      <Houses />
    </View>
  );
};

export default HomeScreen;
