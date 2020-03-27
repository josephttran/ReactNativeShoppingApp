import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PropTypes {
  color: string;
  pricePerUnit: string;
}

const PricePerUnit: React.FC<PropTypes> = (props) => {
  return (
    <View>
      <Text style={[styles.fs, {color: props.color}]}>{props.pricePerUnit}</Text>
      <Text style={[styles.fs, {color: props.color}]}>per unit</Text>
    </View>
  )
}

export default PricePerUnit;

const styles = StyleSheet.create({
  fs: {
    fontSize: 28,
  }
})
