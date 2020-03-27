import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import { Input, InputButton, ShoppingListContainer} from '../components/shoppingList';
import ItemPicker from '../components/picker/ItemPicker';
import { foodList } from '../assets/foodList';

interface DataPropTypes {
  done: boolean;
  item: string; 
  unit: string;
}

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<DataPropTypes[]>([])
  const [selectedValue, setSelectedValue] = useState('');
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
  
  const handleQuantityTextChange = (text: string) => {
    if (/^\d+$/.test(text) || text === '') { 
      setUnitInput(text);
    }
  };

  const handlePressAdd = () => {
    if (data?.filter(data => data.item === selectedValue).length > 0) {
      Alert.alert(`${selectedValue} is already in the shopping list`);
      return;
    }

    if (unitInput !== '') {
      const newItem = { 
        done: false,
        item: selectedValue, 
        unit: unitInput
      };
      setData(prev => [...prev, newItem])
    } else {
      Alert.alert('Please enter a number for quantity');
    }
  }

  const handlePressDelete = (item: string) => {
    const newData = data.filter(data => data.item !== item)
    setData(newData);
  };

  const handlePressMinus = (item: string) => {
    setData(prev => {
      const newData = prev.map(ele => {
        if (ele.item === item) {
          const currentUnit = parseInt(ele.unit);

          if (currentUnit > 1) {
            const newUnit = (currentUnit - 1).toString();
            return {...ele, unit: newUnit}    
          }
        }
        return ele;
      });

      return newData;
    });
  };

  const handlePressPlus = (item: string) => {
    setData(prev => {
      const newData = prev.map(ele => {
        if (ele.item === item) {
          const currentUnit = parseInt(ele.unit);
          const newUnit = (currentUnit + 1).toString();
          return {...ele, unit: newUnit}    
        }
        return ele;
      });

      return newData;
    });
  };

  return (
    <View>
      <Header />
      <View style={styles.shoppingContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.itemPicker}>
            <ItemPicker
             selectedValue={selectedValue}
             setSelectedValue={setSelectedValue}
             foodList={foodList}
            />
          </View>
          <View style={styles.inputUnit}>
            <Input value={unitInput} placeholder="Quantity" onChangeText={handleQuantityTextChange}/>          
          </View>
        </View>
        <InputButton title="Add" handlePress={handlePressAdd} />
        <ShoppingListContainer 
          data={data}
          onValueChange={handleCheckBoxChange}
          onDeletePress={handlePressDelete}
          onMinusPress={handlePressMinus}
          onPlusPress={handlePressPlus}/>
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
    marginVertical: 8,
  },  
  itemPicker: {
    flex: 4
  },
  inputUnit: {
    flex: 1,
    marginLeft: 4
  }
});

export default HomeScreen;
