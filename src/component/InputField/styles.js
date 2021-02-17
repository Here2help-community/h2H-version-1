import { StyleSheet } from "react-native";
import Colors from "../../Items/Colors";

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    color: Colors.secondary2,
    lineHeight: 24,
  },

  input: {
    fontSize: 18,
    fontFamily: "Lato-Regular",
    borderBottomColor: Colors.secondary2,
    borderBottomWidth: 1,
    color: Colors.secondary2,
    lineHeight: 28,
  },

  input_onFocus: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },

  inputError: {
    borderBottomColor: Colors.error,
  },

  additionalInfo: {
    fontSize: 14,
  },

  success: {
    color: Colors.success,
  },

  successBG: {
    backgroundColor: Colors.success,
  },

  error: {
    color: Colors.error,
  },

  info: {
    color: Colors.info,
  },
});

export default styles;
