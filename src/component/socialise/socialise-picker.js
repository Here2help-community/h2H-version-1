import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SmoothPicker from "react-native-smooth-picker";

// data need to change afterwards
const dataCity = [
  "Coffee meet",
  "Event",
  "Small gathering",
  "Function",
  "Party",
  "Professional meet",
  "Emergency meet",
];

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 22,
  1: 15,
  2: 7,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? "#011131" : "transparent",
          width: vertical ? 220 : "auto",
        },
      ]}
    >
      <Text style={{ fontSize }}>{name}</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 4) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

const Picker = (props) => {
  function handleChange(index) {
    setSelected(index);
    refPicker.current.scrollToIndex({
      animated: false,
      index: index,
      viewOffset: -50,
    });
  }

  const [selected, setSelected] = useState(1);
  // this is added if user doesn't happen to select any value
  props.selectType(dataCity[selected]);

  const refPicker = useRef(null);

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          refFlatList={refPicker}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataCity}
          scrollAnimatio={false}
          onSelected={({ item, index }) => {
            handleChange(index), props.selectType(item);
          }}
          selectOnPress={true}
          renderItem={(option) => ItemToRender(option, selected, true)}
          magnet={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperVertical: {
    flex: 0.9,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    color: "black",
  },
  OptionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    height: 55,
    borderWidth: 3,
    borderRadius: 20,
  },
});

export default Picker;
