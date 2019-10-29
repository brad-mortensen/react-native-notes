import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import NoteList from './components/NoteList';

const App = () => {
  const [message, setMessage] = React.useState('name')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.mainHeader}>React Native Notes</Text>
        <Button
          title="Add A Note"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <NoteList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer:{
    justifyContent: 'center',
    height:80,
    textTransform: 'uppercase'
  },
  mainHeader:{
    fontSize: 36,
    textTransform: 'uppercase'
  },
  inputView: {
    flex: 1,
    borderColor: 'blue'
  }
});

export default App;