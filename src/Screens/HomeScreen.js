import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import HomePageHeader from "../Components/HomePageHeader";
import { Icon, SearchBar } from "react-native-elements";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate a search operation (replace with your actual search logic)
    const results = mockSearch(searchText);
    setSearchResults(results);
  };

  const mockSearch = (searchText) => {
    // Mock search results based on the input
    // Replace this with your actual search logic
    return [
      "Result 1 for " + searchText,
      "Result 2 for " + searchText,
      "Result 3 for " + searchText,
    ];
  };
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <HomePageHeader />
      <View style={{ width: "80%", color: "red", padding: 10, display: 'flex', flexDirection: 'row' }}>
        <SearchBar
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          onSubmitEditing={handleSearch}
          cancelButtonTitle="Cancel"
        />
        <TouchableOpacity>
          <Image
            source={require("../assets/images-icons/filter.png")} // Replace with the correct path to your custom icon
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home page</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
