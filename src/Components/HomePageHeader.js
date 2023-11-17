import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomePageHeader = () => {

  return (
    <View
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <View>
        <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold' }}>Location</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images-icons/location.png")} // Replace with the correct path to your custom icon
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold' }}>California, USA</Text>
        </View>
      </View>
      <Icon name="bell" style={{ color: "black", fontSize: 30 }} />
    </View>
  );
};

export default HomePageHeader;
