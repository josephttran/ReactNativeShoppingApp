import React from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';

interface PropTypes {
  done: boolean;
  item: string;
  unit: string;
  onValueChange: (item: string) => void;
}

const Item: React.FC<PropTypes> = (props) => {
  return (
    <View style={styles.container}>
      <CheckBox value={props.done} onValueChange={() => props.onValueChange(props.item)}></CheckBox>
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
    flex: 1
  },
  unit: {
    backgroundColor: 'gray'
  }
});

export default Item;
