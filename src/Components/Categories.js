import React from "react";
import { View, Text, ScrollView } from "react-native";

const Categories = () => {
  const categories = ['Offices', 'Houses', 'Apartments', 'Homes', 'Ghettos'];

  return (
    <>
    <Text style={{ color: "black", fontSize: 20, marginLeft: 30, fontWeight: 'bold' }}>Categories</Text>
    <ScrollView
      horizontal={true} // Enable horizontal scrolling
      contentContainerStyle={{ padding: 20 }}
      style={{ overflow: 'hidden', height: 20, marginLeft: 15 }} 
    >
      {categories.map((category, index) => (
        <Text
          key={index}
          style={{
            color: "black",
            padding: 12,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 15,
            marginRight: 14,
            height: 45,
          }}
        >
          {category}
        </Text>
      ))}
    </ScrollView>
    </>
  );
};

export default Categories;
