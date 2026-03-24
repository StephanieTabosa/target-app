import { View, Button } from 'react-native';
import { router } from 'expo-router';

export default function Target() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='Voltar para Home' onPress={() => router.back()} />
    </View>
  );
}
