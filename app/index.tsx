import { View, StyleSheet } from "react-native";
import Box from "../components/Box";

export default function App() {
  return (
      <View style={styles.container}>
        <Box style={{backgroundColor: "#8e9b00"}}>Box 1</Box>
        <Box style={{backgroundColor: "#2196f3"}}>Box 2</Box>
        <Box style={{backgroundColor: "#ff5722"}}>Box 3</Box>
        <Box style={{backgroundColor: "#ffeb3b"}}>Box 4</Box>
        <Box style={{backgroundColor: "#e91e63"}}>Box 5</Box>
        <Box style={{backgroundColor: "#4caf50"}}>Box 6</Box>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  },
})