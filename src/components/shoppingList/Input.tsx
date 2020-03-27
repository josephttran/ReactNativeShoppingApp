import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface PropTypes {
  placeholder: string;
  value: string;
  onChangeText: (event: string) => void;
}

const InputButton: React.FC<PropTypes> = (props) => {
  return (
    <View>
        <TextInput
          style={styles.itemInput} 
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row'
  },
  itemInput: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
  }
});

export default InputButton;

