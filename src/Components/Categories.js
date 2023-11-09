import React from "react";
import { View, Text, ScrollView } from "react-native";

const Categories = () => {
  const categories = ['Offices', 'Houses', 'Apartments', 'Homes', 'Ghettos'];

  return (
    
    <ScrollView
      horizontal={true} // Enable horizontal scrolling
      contentContainerStyle={{ padding: 20 }}
      style={{ overflow: 'hidden', height: 20 }} 
    >
      {categories.map((category, index) => (
        <Text
          key={index}
          style={{
            color: "white",
            padding: 20,
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 15,
            marginRight: 14,
            height: 60,
          }}
        >
          {category}
        </Text>
      ))}
    </ScrollView>
    
  );
};

export default Categories;
