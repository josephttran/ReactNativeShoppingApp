import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

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
    marginVertical: 8,
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
  }
});

export default InputButton;

