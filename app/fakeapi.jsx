import { View, Text, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";

export default function index() {
  const [apiImage, setApiImage] = useState();

  async function fetchApiData() {
    try {
      const image = await fetch("https://fake-api.shipsar.in/products");
      const response = await image.json();
      // console.log(response);

      // if (response.category == "1") {
      // console.log(response[0].title);
      setApiImage(response);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <View>
      {/* <Text>Fetch Data{apiImage}</Text> */}
      <FlatList
        contentContainerStyle={{ gap: 60 }}
        data={apiImage}
        renderItem={({ item }) => {
          // console.log(item.imageURL);
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.subtitle}</Text>
              <Text>{item.price}</Text>
              <Text>{item.category}</Text>

              {/* <Pressable> */}
              <Link
                href={{ pathname: "products", params: { id: item.id } }}
              >
                <View>
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={{ uri: item.imageURL }}
                  />
                </View>
              </Link>
              {/* </Pressable> */}
            </View>
          );
        }}
      />
      {/* <Image style={{ height: 400, width: 300 }} source={{ uri: apiImage }} /> */}
    </View>
  );
}

// https://res.cloudinary.com/demo/image/upload/v1689803100/ai/hiker.jpg
