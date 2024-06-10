import { View, Image, Text, ImageBackground} from "react-native";
const logoImage = require('./../assets/images/adaptive-icon.png')

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor:"plum", padding: 10,}}>
      {/* <Image source={logoImage} style={{width: 300, height:300}}/> */}
      {/* <Image source={{uri: 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124'}} style={{width: 300, height:300}}/> */}
      <ImageBackground source={logoImage} style={{flex: 1,}}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  )
}