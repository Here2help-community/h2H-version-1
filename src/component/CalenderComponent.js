import React, { useState } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import Colors from "../Items/Colors";

const CalenderComponent = (props) => {
  const getMarkedDate = () => {
    return new Date().toISOString().substring(0, 10);
  };

  const [markedDate, nextOne] = useState(getMarkedDate(null));
  // this is added if user doesn't happen to select any value
  props.getDate(markedDate);
  return (
    <View style={{}}>
      <CalendarList
        onDayPress={(day) => {
          nextOne(day.dateString), props.getDate(day.dateString);
        }}
        style={{
          height: "100%",
        }}
        horizontal={true}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        minDate={getMarkedDate()}
        markedDates={{
          [markedDate]: {
            selected: true,
            marked: true,
            selectedColor: Colors.primary2,
          },
        }}
        theme={{
          backgroundColor: "black",
          calendarBackground: "#ffffff",
          textMonthFontWeight: "bold",
          monthTextColor: Colors.primary2,
          textMonthFontSize: 22,
          textDayFontSize: 15,
        }}
      />
    </View>
  );
};

export default CalenderComponent;
