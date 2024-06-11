import { View, Text, StyleSheet } from "react-native";
// import Greet from '../components/Greet';

export default function App() {
  return (
      <View style={styles.container}>
        {/* <Greet name="Rhamad Nursani Sidik"></Greet>
        <Greet name="Mudzaffar Bilal Sidik"></Greet> */}
        <Text style={styles.title}>Sylesheet API</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:"plum", padding: 60,},
  title: {}
})