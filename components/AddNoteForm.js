import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';


const AddNoteForm = ({ setAdding, setRefetch, refetch }) => {
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');

  const handleSubmit = async () => {
    const data = { title, textBody };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    await fetch("https://lambda-notes-build.herokuapp.com/api/notes/", options)
      .then(setRefetch(!refetch))
      .then(setAdding(false))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.titleInput}
        onChangeText={text => setTitle(text)}
        placeholder='Note Title'
      />
      <TextInput
        style={styles.bodyInput}
        multiline={true}
        onChangeText={text => setTextBody(text)}
        placeholder='Note Body'
      />
      <Button
        title='submit'
        onPress={handleSubmit}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    padding: 15,
    fontSize: 24
  },
  bodyInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 200,
    marginBottom: 20,
    padding: 15,
    fontSize: 24
  },
})
export default AddNoteForm;
