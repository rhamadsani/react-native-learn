import { View, Image, Text, ScrollView, Button} from "react-native";
const logoImage = require('./../assets/images/adaptive-icon.png')

export default function App() {
  return (
      <View style={{flex: 1, backgroundColor:"plum", padding: 60,}}>
        <ScrollView>
          <Image source={logoImage} style={{width: 300, height:300}}/>
          {/* <Image source={{uri: 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124'}} style={{width: 300, height:300}}/> */}
          {/* <ImageBackground source={logoImage} style={{flex: 1,}}>
            <Text>Image Text</Text>
          </ImageBackground> */}
          <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sint ut numquam, veniam aut quo dolorem placeat dicta ipsam nobis! Molestiae officia animi accusantium. Sit dolorem odit voluptatem nam a?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam quo neque similique vel! Consequatur illo dolorum dolore nisi placeat aut repellendus accusantium laboriosam, quisquam minima, tempore, nesciunt possimus in.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptate quisquam numquam iure asperiores officiis consectetur omnis odio quo incidunt, ratione quia molestiae ducimus laudantium odit? Vero aspernatur quis enim.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est possimus, veritatis dolorum vel asperiores esse voluptatum consectetur culpa, deleniti, tenetur architecto ex ab nobis ipsum velit quia optio voluptas eligendi.
          </Text>
          <Image source={logoImage} style={{width: 300, height:300}}/>
          <Button title="press" onPress={() => console.log('halo')} color="#e10102" disabled/>
        </ScrollView>
      </View>
  )
}