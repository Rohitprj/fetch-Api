import React, { useState } from "react";
import { View, Text } from "react-native";
import DatePicker from "react-native-date-picker";

const InlineTimePickerExample = () => {
  const [time, setTime] = useState(new Date());

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20 }}>
        Selected Time: {time.toLocaleTimeString()}
      </Text>
      <DatePicker date={time} mode="time" onDateChange={setTime} />
    </View>
  );
};

export default InlineTimePickerExample;
