import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Checkbox } from '../checkbox';

interface PropTypes {
  done: boolean;
  item: string;
  unit: string;
  onValueChange: (item: string) => void;
}

const Item: React.FC<PropTypes> = (props) => {
  const checkboxSize = 24;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => props.onValueChange(props.item)}>
        <Checkbox isChecked={props.done} checkboxSize={checkboxSize} />
      </TouchableHighlight>
      <Text style={[styles.item, styles.itemFontSize]}>{props.item}</Text>
      <Text style={[styles.unit, styles.itemFontSize]}>{props.unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 4,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#ddd'
  },
  itemFontSize: {
    fontSize: 24
  },
  item: {
    flex: 1,
    marginLeft: 4
  },
  unit: {
    backgroundColor: 'gray'
  }
});

export default Item;
