import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList
} from 'react-native';

import Note from './Note';

const NoteList = () => {
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
  }, [])
  console.log(notes)
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
    />
    :
    <Text>No Notes</Text>
  )
};

export default NoteList;
