import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.darkMode}>
          {/* inheritance work on Text -> Text not View -> Text */}
            <Text style={styles.darkModeText}>Halo, <Text style={styles.boldText}>Rhamad Nursani Sidik</Text></Text>
        </View>
        <View>
          <Text style={[styles.lighblueBg, styles.box, styles.boxShadow]}> LightBlue Box</Text>
          <Text style={[styles.lightgreenBg, styles.box, styles.androidShadow]}> LightGreen Box</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:"white", padding: 60},
  darkMode : {
    backgroundColor: "black", 
    padding: 10,
  },
  darkModeText: {
    color: "white",
  },
  boldText : {
    fontWeight: "bold"
  }, 
  box: {
    width: 250, 
    height: 250, 
    // padding: 10,
    paddingHorizontal: 10, 
    paddingVertical: 20, 
    marginVertical: 10, 
    borderWidth: 2, 
    borderColor: '#C7C8CC', 
    borderRadius: 20

  },
  lighblueBg: {
    backgroundColor: "lightblue", 
  },
  lightgreenBg: {
    backgroundColor: "lightgreen", 
  }, 
  boxShadow: {
    shadowColor: "blue", 
    shadowOffset: {
      width: 6, 
      height: 6,
    }, 
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10,
  }
})