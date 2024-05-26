import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>My Name is Ekow</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: '24',
  },

  container: {
    flex: 1,
    backgroundColor: '#D4ECD4',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
