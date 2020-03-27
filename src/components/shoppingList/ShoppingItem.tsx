import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Checkbox } from '../checkbox';

interface PropTypes {
  done: boolean;
  item: string;
  unit: string;
  onDeletePress: (item: string) => void;
  onMinusPress: (item: string) => void;
  onPlusPress: (item: string) => void;
  onValueChange: (item: string) => void;
}

const Item: React.FC<PropTypes> = (props) => {
  const iconSize = 24;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => props.onValueChange(props.item)}>
        <Checkbox isChecked={props.done} checkboxSize={iconSize} />
      </TouchableHighlight>

      <Text style={[styles.item, styles.itemFontSize]}>{props.item}</Text>

      <TouchableHighlight onPress={() => props.onMinusPress(props.item)}>
        <MaterialCommunityIcon name='minus-circle' size={iconSize} />
      </TouchableHighlight>
      <Text style={[styles.unit, styles.itemFontSize]}>{props.unit}</Text>
      <TouchableHighlight onPress={() => props.onPlusPress(props.item)}>
        <MaterialCommunityIcon name='plus-circle' size={iconSize} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.onDeletePress(props.item)}>
        <MaterialCommunityIcon style={styles.trash} name='trash-can' size={iconSize} />
      </TouchableHighlight>
   
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
    marginHorizontal: 4,
    paddingHorizontal: 4,
    backgroundColor: '#fff'
  },
  trash: {
    marginLeft: 8
  }
});

export default Item;
