import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';


const Note = ({ title, textBody }) => {
  const openAlert = () => {
    Alert.alert(
      'Choose Action',
      'My Alert Msg',
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
  }
  return (
    <TouchableOpacity style={styles.note} onPress={openAlert}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text>{textBody}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  note: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: '80%',
    height: 150,
    alignSelf: 'center',
    padding: 10,
    marginTop: 10
  },
  noteTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  noteBody: {

  }
})

export default Note;
