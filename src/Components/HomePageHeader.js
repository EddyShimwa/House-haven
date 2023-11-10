import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomePageHeader = () => {

  return (
    <View
      style={{
        // backgroundColor: "blue",
        padding: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
      }}
    >
      <View>
        <Text style={{ color: "black", fontSize: 20 }}>Location</Text>
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
      <Icon name="bell" style={{ color: "black", fontSize: 30, opacity: 16 }} />
    </View>
  );
};

export default HomePageHeader;
