import * as React from "react";
import { ActivityIndicator, Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import logo from "../assets/images/react-logo.png";

function Index() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      {/* <Image source={logo} /> */}
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        mode="parallax"
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            {/* <ActivityIndicator size="small" /> */}
            {/* <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text> */}
            <Image style={{ alignSelf: "center" }} source={logo} />
          </View>
        )}
      />
    </View>
  );
}

export default Index;
