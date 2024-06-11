import { View, Alert ,Button} from "react-native";

export default function App() {
  return (
      <View style={{flex: 1, backgroundColor:"plum", padding: 60,}}>
        <Button title="Alert" onPress={() => Alert.alert('Invalid Data Fetching')}/>
        <Button title="Alert With Title" onPress={() => Alert.alert('Invalid Data Fetching', 'Detai Data Fail')}/>
        <Button title="Alert With Optional Button" onPress={() => Alert.alert('Invalid Data Fetching', 'Detai Data Fail', [
          {
            text: 'Cancel', 
            onPress : () => {
              console.log("Cancel Pressed")
            }
          },
          {
            text: 'Oke', 
            onPress : () => {
              console.log("Oke Pressed")
            }
          }
        ])}/>
      </View>
  )
}