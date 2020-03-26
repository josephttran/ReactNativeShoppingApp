import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import UnitPriceForm from '../components/unitPrice/UnitPriceForm';

const UnitPriceScreen: React.FC = () => {
  const [firstItem, setFirstItem] = useState({
    formName: "Item One",
    unitAmount: 0,
    price: 0.00
  });

  const [secondItem, setSecondItem] = useState({
    formName: "Item Two",
    unitAmount: 1,
    price: 1.02
  });

  return (
    <View>
      <Header title="COMPARE UNIT PRICE"/>
      <View style={styles.formsContainer}>
        <View style={styles.form}>
          <UnitPriceForm 
            formName={firstItem.formName}
            unitAmount={firstItem.unitAmount}
            price={firstItem.price}
          />
        </View>
        <View style={styles.form}>
          <UnitPriceForm
            formName={secondItem.formName}
            unitAmount={secondItem.unitAmount}
            price={secondItem.price}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formsContainer: {
    flexDirection: 'row',
    marginTop: 50
  },
  form: {
    flex: 1,
    margin: 4
  }
})

export default UnitPriceScreen;
