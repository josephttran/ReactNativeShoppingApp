import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PropTypes {
  checkboxSize: number;
  isChecked: boolean;
}

const Checkbox: React.FC<PropTypes> = (props) => {
  return (
    <View>
      {props.isChecked 
        ? <MaterialCommunityIcon name='checkbox-marked' color='green' size={props.checkboxSize} />
        : <MaterialCommunityIcon name='checkbox-blank-outline' size={props.checkboxSize} />
      }
    </View>
  );
};

export default Checkbox;
