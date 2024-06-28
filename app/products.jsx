import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

export default function products() {
  const firstIndex = useLocalSearchParams();
  console.log(firstIndex.id);

  const [sData, setSData] = useState({});

  async function singleData() {
    try {
      const singleImage = await fetch("https://fake-api.shipsar.in/products/"+firstIndex.id);
      const response = await singleImage.json();
      console.log(response)
      setSData(response);
    } 
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    singleData();
  }, []);


//   useEffect(() => {
//     console.log(sData);
//   }, [sData]);
  return (
    <View>
      <Text>{sData.price} </Text>
      <Text>{firstIndex.id} </Text>
    </View>
  );
}
