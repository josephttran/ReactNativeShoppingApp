import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface PropTypes {
  formName: string
  unitAmount: string;
  price: string;
  handleUnitChange: (formName: string, text: string) => void;
  handlePriceChange: (formName: string, text: string) => void;
}

const UnitPriceForm: React.FC<PropTypes> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formName}>{props.formName}</Text>
      <View style={styles.row}>
        <Text style={styles.inputName}>UNITS</Text>
        <TextInput 
          style={styles.input}
          keyboardType='number-pad'
          value={props.unitAmount.toString()}
          onChangeText={(text) => props.handleUnitChange(props.formName, text)}
        />        
      </View>
      <View style={styles.row}>
        <Text style={styles.inputName}>PRICE</Text>
        <TextInput
          style={styles.input}
          keyboardType='decimal-pad'
          value={props.price}
          onChangeText={(text) => props.handlePriceChange(props.formName, text)}
        />
      </View>
    </View>
  )
}

export default UnitPriceForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 8,
    borderWidth: 1
  },
  formName: {
    paddingVertical:4,
    fontSize: 18,
    textAlign: 'center',
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 8
  },
  inputName: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 14
  },
  input: {
    flex: 2,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    fontSize: 14
  }
});
