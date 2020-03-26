import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import UnitPriceForm from '../components/unitPrice/UnitPriceForm';
import { isTextValidNumber, isTextValidPrice } from '../utils/validation';

const UnitPriceScreen: React.FC = () => {
  const [firstItem, setFirstItem] = useState({
    formName: "Item One",
    unitAmount: "0",
    price: "0.00"
  });

  const [secondItem, setSecondItem] = useState({
    formName: "Item Two",
    unitAmount: "1",
    price: "1.02"
  });

  const handleUnitChange = (formName: string, text: string) => {
    if (isTextValidNumber(text) || text === '') {
      const unit = text === '' ? '' : text;

      if (formName === "Item One") {
        setFirstItem(prevState => {
          return {
            ...prevState,
            unitAmount: unit
          }
        });
      } else {
        setSecondItem(prevState => {
          return {
            ...prevState, 
            unitAmount: unit 
          }
        });
      }
    }
  };

  const handlePriceChange = (formName: string, text: string) => {
    if (isTextValidPrice(text) || text === '') {
      const price = text === '' ? '' : text;

      if (formName === "Item One") {
        setFirstItem(prevState => {
          return {
            ...prevState,
            price: price
          }
        });
      } else {
        setSecondItem(prevState => {
          return {
            ...prevState, 
            price: price 
          }
        });
      }
    }
  }

  return (
    <View>
      <Header title="COMPARE UNIT PRICE"/>
      <View style={styles.formsContainer}>
        <View style={styles.form}>
          <UnitPriceForm 
            formName={firstItem.formName}
            unitAmount={firstItem.unitAmount}
            price={firstItem.price}
            handleUnitChange={handleUnitChange}
            handlePriceChange={handlePriceChange}
          />
        </View>
        <View style={styles.form}>
          <UnitPriceForm
            formName={secondItem.formName}
            unitAmount={secondItem.unitAmount}
            price={secondItem.price}
            handleUnitChange={handleUnitChange}
            handlePriceChange={handlePriceChange}
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
