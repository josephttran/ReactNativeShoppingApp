import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import { Input, InputButton, ShoppingListContainer} from '../components/shoppingList';

const testData = [
  { done: false, item: 'Paper Towel', unit: '12'},
  { done: true, item: 'Water', unit: '24'},
  { done: true, item: 'Milk', unit: '1'},
  { done: false, item: 'Charger', unit: '1'},
  { done: false, item: 'Rice', unit: '2'},
  { done: false, item: 'Beef', unit: '1'},
  { done: false, item: 'Chicken', unit: '1'},
  { done: false, item: 'Fish', unit: '1'},
  { done: false, item: 'Pork', unit: '1'},
  { done: false, item: 'Butter', unit: '1'},
];

const HomeScreen: React.FC = () => {
  const [data, setData] = useState(testData)
  const [itemInput, setItemInput] = useState('');
  const [unitInput, setUnitInput] = useState('');

  useEffect(() => {

  }, [data])

  const handleCheckBoxChange = (item: string) => {
    setData(prev => {
      return prev.map((ele) => { 
        if (ele.item === item) {
          return {
            ...ele,
            done: !ele.done
          };
        }
        return ele;
      });
    });
  };

  const handleItemTextChange = (text: string) => {
    setItemInput(text);
  };

  const handleQuantityTextChange = (text: string) => {
    if (/^\d+$/.test(text) || text === '') { 
      setUnitInput(text);
    }
  };

  const handlePressAdd = () => {
    if (itemInput !== '' && unitInput !== '') {
      const newItem = { 
        done: false,
        item: itemInput, 
        unit: unitInput
      };
      //setData(prev => [...prev, newItem])
    } else if (itemInput === ''){
      Alert.alert('Please enter an item');
    } else {
      Alert.alert('Please enter a number for quantity');
    }
  }

  return (
    <View>
      <Header />
      <View style={styles.shoppingContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputItem}>
            <Input value={itemInput} placeholder="Item Name" onChangeText={handleItemTextChange}/>            
          </View>
          <View style={styles.inputUnit}>
            <Input value={unitInput} placeholder="Quantity" onChangeText={handleQuantityTextChange}/>          
          </View>
        </View>
        <InputButton title="Add" handlePress={handlePressAdd} />
        <ShoppingListContainer data={data} onValueChange={handleCheckBoxChange}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingContainer: {
    marginHorizontal: 8
  },
  inputContainer: {
    flexDirection: 'row',
  },  
  inputItem: {
    flex: 4
  },
  inputUnit: {
    flex: 1
  }
});

export default HomeScreen;
