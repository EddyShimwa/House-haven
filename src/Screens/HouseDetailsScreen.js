import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Houses from "../Components/Houses";
import { ScrollView } from "react-native-gesture-handler";

const HouseDetailsScreen = ({ route }) => {
  const { houseId } = route.params;
  const navigation = useNavigation();
  const houseImages = [
    require("../assets/images-icons/house3.jpg"),
    require("../assets/images-icons/house2.jpg"),
    require("../assets/images-icons/house1.jpg"),
    require("../assets/images-icons/house3.jpg"),
    require("../assets/images-icons/house2.jpg"),
    require("../assets/images-icons/house1.jpg"),
  ];


  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",  }}>
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
        </View>
      </ImageBackground>
     
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          marginTop: 20
          
        }}
      >
        <View style={{ alignItems: 'flex-start', marginLeft: 30, marginBottom: 5}}>
            <Text style={{fontSize: 25}}>Classic House</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Image source={require("../assets/images-icons/location.png")} style={{ width: 14, height: 18, marginRight: 5 }} />
                 <Text>California, USA</Text>
            </View>
        </View>

        <View style={{ alignItems: 'flex-start', marginLeft: 30, marginRight: 20}}>
            <Text style={{fontSize: 25}}>House Details</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
               <Text style={{textAlign: 'justify'}}>Praesent eu imperdiet ligula. Aliquam erat volutpat. Sed sollicitudin, libero a commodo consequat, ipsum lectus venenatis neque, in dapibus eros nibh vitae metus. Nam in nulla dolor. Nam ac ligula et est faucibus faucibus. Duis aliquam placerat dui, non rhoncus erat. Donec ut ipsum non nulla efficitur accumsan ut vel lorem. </Text>
            </View>
        </View>
       
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ padding: 2 }}
          style={{height: 0, margin: 20}}
        >
        {houseImages.map((houseImage, idx) => 
        <TouchableOpacity 
         style={{height: 2}}
        >
        <Image
            key={idx}
            style={{ height: 100, width: 100, borderRadius: 25, padding: 5, marginRight: 12, borderWidth: 5, borderColor: 'gray' }}
            source={houseImage}
        />
        </TouchableOpacity>
          )}
      </ScrollView>
    </View>

  );
};

export default HouseDetailsScreen;

