import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ShoppingItem from './ShoppingItem';

type shoppingItem = {
  done: boolean,
  item: string,
  unit: string
}

interface PropTypes {
  data: shoppingItem[];
  onValueChange: (item: string) => void;
}

const ShoppingListContainer: React.FC<PropTypes> = (props) => {
  return (
    <View>
      <Text style={styles.listHeader}>LIST</Text>
      <ScrollView style={styles.scrollContainer}>
        {props.data.length > 0 
          ? props.data.map((item, index) => {
            return <ShoppingItem key={index} done={item.done} item={item.item} unit={item.unit} onValueChange={props.onValueChange}/>
          })
          : <Text>There are no items!</Text>
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 8,
    fontSize: 24
  },
  scrollContainer: {
    paddingRight: 8,
    height: 365,
  }
});

export default ShoppingListContainer;

