import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HouseDetailsScreen = ({ route }) => {
  const { houseId } = route.params;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); // Go back to the previous screen (in this case, HomeScreen)
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={handleBack}>
        <Text style={{ color: "blue", marginTop: 10 }}>Go Back to Home</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: '100%' }}>
        <Text>House Details for ID: {houseId}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'red', alignItems: "center", justifyContent: "center", width: '100%', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <Text>For Details Description</Text>
      </View>
    </View>
  );
};


export default HouseDetailsScreen;
