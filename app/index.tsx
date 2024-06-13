import { View, StyleSheet } from "react-native";
import Box from "../components/Box";

export default function App() {
  return (
    // <View style={{backgroundColor: "plum", flex: 1,}}>

    // </View>
      <View style={styles.container}>
        <Box style={{backgroundColor: "#8e9b00", alignSelf: 'flex-start'}}>Box 1</Box>
        <Box style={{backgroundColor: "#2196f3", alignSelf: 'flex-end'}}>Box 2</Box>
        <Box style={{backgroundColor: "#ff5722", alignSelf: 'center'}}>Box 3</Box>
        <Box style={{backgroundColor: "#ffeb3b",  alignSelf: 'auto'}}>Box 4</Box>
        <Box style={{backgroundColor: "#e91e63"}}>Box 5</Box>
        <Box style={{backgroundColor: "#4caf50"}}>Box 6</Box>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-evenly", //flext-start, flext-end, center, space-between, space-around, space-evenly
    // flexDirection: "column-reverse", //column, column-reverse, row, row-reverse
    // flexDirection: "row",
    // alignItems: "baseline", //stretch(default value), flex-start, flex-end, baseline
    alignItems: "flex-end",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red" 
  },
})