import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Houses = () => {
  return (
    <View>
        <Text style={{ color: "black", fontSize: 20, marginLeft: 5 }}>Nearby Places</Text>
     <Image
        source={require("../assets/images-icons/house3.jpg")}
        style={{ width: 250, height: 340, padding: 10, borderRadius: 20,margin: 10 }}
    />
          

    </View>
  );
};

export default Houses;
