import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HouseDetailsScreen = ({ route }) => {
  const { houseId } = route.params;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ color: "blue", marginTop: 30 }}>
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
            <TouchableOpacity onPress={handleBack} style={{borderWidth: 2, borderRadius: 10, width: 60 }}>
                {/* <Text style={{ color: "#000", padding: 5, backgroundColor: "#fff"}}>Back</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack} style={{borderWidth: 2, borderRadius: 10 }}>
                {/* <Text style={{ color: "#000", padding: 5, borderWidth: 2, fontSize: 20 }}>...</Text> */}
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

