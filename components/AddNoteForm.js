import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');

  const handleSubmit = () => {
    const data = { title, textBody };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://lambda-notes-build.herokuapp.com/api/notes/", options)
      .then(res => console.log(res.status))
      .catch(err => console.log(err))
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.titleInput}
        onTextChange={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.bodyInput}
        multiline={true}
        numberOfLines={4}
        onTextChange={(text) => setTextBody(text)}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40
  },
  titleInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    marginBottom: 40,
    padding: 10
  },
  bodyInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 200,
    padding: 10
  },
})
export default AddNoteForm;
