import { View, ScrollView, Button, Modal, Text} from "react-native";
import { useState } from "react";

const logoImage = require('./../assets/images/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false)
  return (
      <View style={{flex: 1, backgroundColor:"plum", padding: 60,}}>
        <ScrollView>
          <Button title="press" onPress={() => setModalVisible(true)} color="#e10102"/>
          {/* animationType => fade, slide |presentationStyle => formSheet, pageSheet  */}
          <Modal presentationStyle="pageSheet" animationType="slide" visible={isModalVisible} onRequestClose={() => setModalVisible(false)}>
               <View style={{flex: 1, backgroundColor:"lightblue", padding: 60,}}>
                  <Text>Modal Content</Text>
                  <Button onPress={() => setModalVisible(false)} title="Close" color="red"/>
               </View>
          </Modal>
        </ScrollView>
      </View>
  )
}