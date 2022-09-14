import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>José Luis Hernández Delgadillo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#87CEEB', 
    fontWeight: '400',
  }
});
