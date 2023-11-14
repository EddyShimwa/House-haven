import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HouseDetailsScreen = ({ route }) => {
  const { houseId } = route.params;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ marginTop: 30 }}>
      </View>

      <ImageBackground
        source={require("../assets/images-icons/house1.jpg")} // Replace with the path to your image
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: -50,
        }}
      >

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20}}>
        <TouchableOpacity
  onPress={handleBack}
  style={{
    padding: 12,
    borderWidth: 1,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    borderColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  }}
>
  <Image style={{ width: 20, height: 12 }} source={require("../assets/images-icons/backArrow.png")} />
</TouchableOpacity>

<TouchableOpacity
  onPress={handleBack}
  style={{
    padding: 12,
    borderWidth: 1,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    // Add box shadow styles based on the platform
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  }}
>
  <Image style={{ width: 26, height: 10 }} source={require("../assets/images-icons/threeDots.png")} />
</TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#fff" }}>
            House Details for ID: {houseId}
          </Text>
        </View>
      </ImageBackground>
     
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Text>For Details Description</Text>
      </View>
    </View>
  );
};

export default HouseDetailsScreen;

