import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList
} from 'react-native';

import NoteList from './components/NoteList';

const App = () => {
  const [message, setMessage] = React.useState('name')

  return (
    <View style={styles.container}>
      <Text>Hello {message}!</Text>
      <TextInput
        style={{
          backgroundColor: "lightblue",
          height: 40,
          width: "80%"
        }}
        onChangeText={(text) => setMessage(text)}
      />
      <NoteList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;