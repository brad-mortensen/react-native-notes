import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList
} from 'react-native';

import Note from './Note';

const NoteList = ({ notes }) => {

  return (
    notes ?
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <Note
            title={item.title}
            textBody={item.textBody}
          />
        )}
        keyExtractor={note => note.id.toString()}
        style={styles.noteList}
      />
      :
      <Text>No Notes</Text>
  )
};
const styles = StyleSheet.create({
  noteList: {
    width: '100%',
  },
})
export default NoteList;
