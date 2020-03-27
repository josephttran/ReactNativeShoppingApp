import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PricePerUnit from './PricePerUnit';

interface PropTypes {
  pricePerUnitOne: string;
  pricePerUnitTwo: string;
}

const PricePerUnitCompare: React.FC<PropTypes> = (props) => {
  return (
    <View style={styles.container}>
        <PricePerUnit 
          pricePerUnit={props.pricePerUnitOne} 
          color={props.pricePerUnitOne < props.pricePerUnitTwo ? 'blue' : 'gray'}
        />
        {props.pricePerUnitOne === props.pricePerUnitTwo
          ? <MaterialCommunityIcon name='equal' size={24} />
          : props.pricePerUnitOne > props.pricePerUnitTwo
          ? <MaterialCommunityIcon name='greater-than' size={24} />
          : <MaterialCommunityIcon name='less-than' size={24} />
        }
        <PricePerUnit
          pricePerUnit={props.pricePerUnitTwo}
          color={props.pricePerUnitTwo < props.pricePerUnitOne ? 'blue' : 'gray'}
        />
    </View>
  )
}

export default PricePerUnitCompare;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
