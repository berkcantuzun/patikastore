import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Header.style';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patikastore</Text>
      <TextInput style={styles.searchInput} placeholder="Ara..." />
    </View>
  );
};

export default Header;
