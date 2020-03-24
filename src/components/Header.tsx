import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PropTypes {
  title?: string;
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#2929FF'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 34,
  }
});

const Header: React.FC<PropTypes> = ({ title = "SHOPPING APP" }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
};

export default Header;