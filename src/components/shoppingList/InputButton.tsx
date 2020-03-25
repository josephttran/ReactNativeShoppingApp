import React from 'react';
import { View, Button } from 'react-native';

interface PropTypes {
  title: string
  handlePress: () => void;
}

const InputButton: React.FC<PropTypes> = (props) => {
  return (
    <View>
      <Button
        onPress={props.handlePress}
        title={props.title}
      />
    </View>
  );
};

export default InputButton;

