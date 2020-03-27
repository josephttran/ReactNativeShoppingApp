import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import UnitPriceForm from '../components/unitPrice/UnitPriceForm';
import PricePerUnitCompare from '../components/unitPrice/PricePerUnitCompare';
import { isTextValidNumber, isTextValidPrice } from '../utils/validation';
import { calculatePricePerUnit } from '../utils/calculation';

const UnitPriceScreen: React.FC = () => {
  const [showCompare, setShowCompare] = useState(true);
  
  const [firstItem, setFirstItem] = useState({
    formName: "Item One",
    unitAmount: "0",
    price: "0.00"
  });

  const [secondItem, setSecondItem] = useState({
    formName: "Item Two",
    unitAmount: "0",
    price: "0.00"
  });

  useEffect(() => {
    const inputs = [firstItem.unitAmount, firstItem.price, secondItem.unitAmount, secondItem.price]
    let shouldShowCompare = true;

    if (inputs.indexOf('') !== -1) {
      shouldShowCompare = false;
    }

    inputs.forEach(ele => {
      if (parseFloat(ele) == 0) {
        shouldShowCompare = false;
      }
    });

    if (shouldShowCompare) {
      setShowCompare(true);
    } else {
      setShowCompare(false);
    }

  }, [firstItem, secondItem]);

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
      <View style={styles.pricePerUnitContainer}>
        {showCompare 
          ? 
          <PricePerUnitCompare 
            pricePerUnitOne={calculatePricePerUnit(firstItem.unitAmount, firstItem.price)}
            pricePerUnitTwo={calculatePricePerUnit(secondItem.unitAmount, secondItem.price)}
          /> 
          : <Text style={{marginLeft: 8, fontSize: 18, backgroundColor: 'orange'}}>Units and prices must not be zero or empty!</Text>
        }
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
  },
  pricePerUnitContainer: {
    marginTop: 100
  }
})

export default UnitPriceScreen;
