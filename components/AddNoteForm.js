import React from 'react';
import {View} from 'react-native';
const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');
  const handleSubmit = () => {
    const data = {title, textBody};

  };
  return (
    <View>
      <TextInput
        onTextChange={(text)=>setTitle(text)}
      />
      <TextInput
        multiline = {true}
        numberOfLines = {4}
        onTextChange={(text)=>setTextBody(text)}
      />
    </View>
  )
};

export default AddNoteForm;
