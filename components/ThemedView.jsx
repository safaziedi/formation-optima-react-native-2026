import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors";

// useful if we have dark & light theme
const ThemedView = ({style}) => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light
  return (
    <View >
    </View>
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
