import React from 'react';
import { View, Text } from 'react-native';


const Note = ({ title, textBody }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{textBody}</Text>
    </View>
  )
}

export default Note;
