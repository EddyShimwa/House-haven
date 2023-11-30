import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

const imgs = [
  require("../assets/images-icons/house3.jpg"),
  require("../assets/images-icons/house2.jpg"),
  require("../assets/images-icons/house1.jpg"),
  require("../assets/images-icons/house3.jpg"),
  require("../assets/images-icons/house2.jpg"),
  require("../assets/images-icons/house1.jpg"),
];

const Favorites = () => {
  const favoriteHouses = [
    { id: 1, title: "Favorite House 1", img: imgs[0] },
    { id: 2, title: "Favorite House 2", img: imgs[1] },
    { id: 3, title: "Favorite House 3", img: imgs[2] },
    { id: 4, title: "Favorite House 4", img: imgs[3] },
    { id: 5, title: "Favorite House 5", img: imgs[4] },
    { id: 6, title: "Favorite House 6", img: imgs[5] },
  ];

  const handleFavoritePress = (houseId) => {
    console.log(`Favorite house with ID ${houseId} is clicked`);
  };

  return (
    <>
    <View style={{marginTop: 50,  }}>
     <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'  }}  >My Favoritess</Text>
     </View>
     <ScrollView vertical={true} contentContainerStyle={{ margin: 10 }}>
        {favoriteHouses.map((favoriteHouse) => (
          <TouchableOpacity
            key={favoriteHouse.id}
            onPress={() => handleFavoritePress(favoriteHouse.id)}
          >
          <View style={{display: 'flex', margin: 10, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, borderWidth: 3, borderColor: '#cccccc'}}>
            <Image
              source={favoriteHouse.img}
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                borderColor: '#d4d9d5',
                borderRadius: 50,
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
              <Text style={{marginRight: 20 }}>{favoriteHouse.title}</Text>
          </View>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Favorites;
