import { View, StatusBar } from "react-native";

export default function App() {
  return (
      <View style={{flex: 1, backgroundColor:"plum", padding: 60,}}>
        {/* barStyle=> default, dark-content, light-content | hidden ->hide status bar */}
        <StatusBar backgroundColor="plum" barStyle="light-content"/>
      </View>
  )
}