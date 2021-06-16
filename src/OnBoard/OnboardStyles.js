import { StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import Colors from '../Items/Colors';
import { HORIZONTAL_MARGIN } from './constants';

const dimensions = Dimensions.get("window");
const windowHeight = dimensions.height;
const windowWidth = dimensions.width;

const OnboardStyles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.secondary_light,
  },
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  content_container: {
    flex: 7,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
  },
  page: {
    marginHorizontal: HORIZONTAL_MARGIN,
    width: windowWidth - 2 * HORIZONTAL_MARGIN,
  },
  top_navigation: {
    marginHorizontal: HORIZONTAL_MARGIN,
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  header: {
    flex: 6,
  },
  content: {
    flex: 1,
    width: "75%",
  },
  navigation: {
    marginHorizontal: HORIZONTAL_MARGIN,
    flex: 1.5,
    alignItems: "flex-end",
  },
  header_image: {
    flex: 3,
    marginVertical: "5%",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    paddingVertical: "2%",
  },
  navigation_control: {
    flex: 3,
    marginBottom: 52,
    width: "100%",
  },
  progress_bar_container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top_nav_text: {
    fontSize: 18,
    fontFamily: "Lato-Regular",
    color: "#9D9D9D",
  },
  head: {
    fontSize: 40,
    fontFamily: "Lato-Black",
    color: Colors.primary2,
  },
  text: {
    fontSize: 16,
    color: Colors.secondary2,
  },
  progress_bar_filled: {
    height: 3,
    width: "30%",
    borderRadius: 20,
    backgroundColor: Colors.progress_bar_filled,
  },
  progress_bar: {
    height: 3,
    width: "30%",
    borderRadius: 20,
    backgroundColor: Colors.progress_bar,
  },
});

export default OnboardStyles;
