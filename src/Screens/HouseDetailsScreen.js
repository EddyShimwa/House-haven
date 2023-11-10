// HouseDetailsScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HouseDetailsScreen = ({ route }) => {
  const { houseId } = route.params;
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack(); 
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={handleBack}>
        <Text style={{ color: "blue", marginTop: 10 }}>Go Back to Home</Text>
      </TouchableOpacity>
      <Text>House Details for ID: {houseId}</Text>
      <View styles={}>
        
      </View>
    </View>
  );
};


export default HouseDetailsScreen;
