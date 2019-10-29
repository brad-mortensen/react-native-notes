import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  FlatList
} from 'react-native';

import Note from './Note';

const NoteList = ({ refetch }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch("https://lambda-notes-build.herokuapp.com/api/notes/");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchNotes()
      .then(data => setNotes(data))
      .catch(err => console.error(`Error getting Notes: ${err}`))
    console.log('fetching')
  }, [refetch]);

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
