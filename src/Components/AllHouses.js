import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

const Houses = ({ houseProps = { width: 300, height: 290, title: "NearBy Places" } }) => {
  const navigation = useNavigation();
  const houseImages = [
    require("../assets/images-icons/house3.jpg"),
    require("../assets/images-icons/house2.jpg"),
    require("../assets/images-icons/house1.jpg"),
    require("../assets/images-icons/house3.jpg"),
    require("../assets/images-icons/house2.jpg"),
    require("../assets/images-icons/house1.jpg"),
  ];

  const handleHousePress = (houseId) => {
    navigation.navigate("HouseDetails", { houseId });
  };

  return (
    <>
      <View>
        <Text style={{ color: "black", fontSize: 20, marginLeft: 30, fontWeight: 'bold' }}>{houseProps.title}</Text>
        <ScrollView
          horizontal={true} 
          contentContainerStyle={{ padding: 20 }}
          style={{ width: "100%" }}
        >
          {houseImages.map((houseImage, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleHousePress(index + 1)} 
            >
              <Image
                key={index}
                source={houseImage}
                style={{
                  width: houseProps.width,
                  height: houseProps.height,
                  borderRadius: 20,
                  margin: 10,
                  ...Platform.select({
                    ios: {
                      shadowColor: 'black',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 1.5,
                      shadowRadius: 4,
                    },
                    android: {
                      elevation: 6,
                    },
                  }),
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Houses;
