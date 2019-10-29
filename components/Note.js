import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';


const Note = ({ title, textBody }) => {
  const openAlert = () => {
    Alert.alert(
      title,
      textBody,
      [
        { text: 'Edit', onPress: () => console.log('Edit pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Delete', onPress: () => console.log('Delete Pressed') },
      ],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity style={styles.note} onPress={openAlert}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text style={styles.noteBody}>{textBody}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  note: {
    width: '70%',
    height: 'auto',
    alignSelf: 'center',
    padding: 10,
    height: 150,
    marginTop: 20,
    backgroundColor: 'white'
  },
  noteTitle: {
    textAlign: 'center',
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  noteBody: {
    fontSize: 18,
    overflow: 'hidden'
  }
})

export default Note;
