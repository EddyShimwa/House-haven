import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Platform } from "react-native";

const Categories = () => {
  const categories = ['Offices', 'Houses', 'Apartments', 'Homes', 'Ghettos'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <>
      <Text style={{ color: "black", fontSize: 20, marginLeft: 30, fontWeight: 'bold' }}>Categories</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ padding: 20 }}
        style={{ overflow: 'hidden', height: 20, marginLeft: 15 }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(category)}
            style={{
                backgroundColor: category === selectedCategory ? '#2f2f2f' : 'white', // Change background color based on selection
                color: "black",
                padding: 12,
                borderRadius: 15,
                marginRight: 14,
                height: 45,
                ...Platform.select({
                  ios: {
                    shadowColor: 'red',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                  },
                  android: {
                    elevation: 4,
                  },
                }),
              }}
              
          >
            <Text style={{ color: category === selectedCategory ? 'white' : 'black' }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Categories;
