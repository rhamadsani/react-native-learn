import { View, Text} from 'react-native' 

export default function Greet({ name }) {
  return (
    <View>
      <Text>Hallo, {name}</Text>
    </View>
  );
}