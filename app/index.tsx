import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.lighblueBg, styles.box]}> LightBlue Box</Text>
          <Text style={[styles.lightgreenBg, styles.box]}> LightGreen Box</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:"plum", padding: 60},
  box: {
    width: 100, 
    height: 100, 
    padding: 10,
  },
  lighblueBg: {
    backgroundColor: "lightblue", 
  },
  lightgreenBg: {
    backgroundColor: "lightgreen", 
  }
})