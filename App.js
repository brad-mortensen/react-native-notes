import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';

const App = () => {
  const [adding, setAdding] = useState(false);
  const [refetch, setRefetch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.mainHeader}>React Native Notes</Text>
        <TouchableOpacity
          onPress={() => setAdding(!adding)}
        >
          <Text
            style={styles.addNote}
          >
            {!adding ? 'Add a Note' : 'Close'}
          </Text>
        </TouchableOpacity>
      </View>
      {adding && <AddNoteForm setAdding={setAdding} refetch={refetch} setRefetch={setRefetch} />}
      <NoteList refetch={refetch} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    justifyContent: 'center',
    height: 80,
  },
  mainHeader: {
    fontSize: 36,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 30,
  },
  inputView: {
    flex: 1,
    borderColor: 'blue'
  },
  addNote: {
    fontSize: 30,
    color: 'darkslategray',
    textAlign: 'center',
    paddingBottom: 20
  },
});

export default App;