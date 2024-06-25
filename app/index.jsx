import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";

export default function index() {
  const [apiImage, setApiImage] = useState();

  async function fetchApiData() {
    try {
      const image = await fetch("https://dog.ceo/api/breeds/image/random");
      const response = await image.json();
      console.log(response);

      if (response.status == "success") {
        setApiImage(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Pressable onPress={fetchApiData} style={{backgroundColor:"red",width:"100%",height:"100%"}}>
        <Text>Fetch Data{apiImage}</Text>
        <Image style={{height:400,width:300}} source={{ uri: apiImage }} />
      </Pressable>
    </View>
  );
}

// https://res.cloudinary.com/demo/image/upload/v1689803100/ai/hiker.jpg
