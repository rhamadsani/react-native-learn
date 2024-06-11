import { View, ActivityIndicator } from "react-native";

export default function App() {
  return (
      <View style={{flex: 1, backgroundColor:"plum", padding: 60,}}>
        {/* size, color */}
        <ActivityIndicator/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="large" color="black"/>
        <ActivityIndicator size="large" color="white" animating={false}/>
      </View>
  )
}