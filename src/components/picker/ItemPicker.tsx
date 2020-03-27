import React from 'react'
import { Picker, StyleSheet, View } from 'react-native'

interface PropTypes {
  foodList: string[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<string>
}

const ItemPicker: React.FC<PropTypes> = (props) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={props.selectedValue}
        onValueChange={(itemValue) => props.setSelectedValue(itemValue)}
      >
        <Picker.Item label='Please select an option...' value='0' />
        {props.foodList.map(food => <Picker.Item key={food} label={food} value={food}></Picker.Item>)}
      </Picker>
    </View>
  )
}

export default ItemPicker

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray'
  }
})
