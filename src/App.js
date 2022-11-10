import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import Card from './components/Card';
import Header from './components/Header/Header';
import data from './data.json';
const App = () => {
  const renderProducts = ({item}) => (
    <View style={styles.productCard}>
      <Card data={item} />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        style={styles.productList}
        numColumns={2}
        data={data}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  productList: {
    marginRight: 5,
    marginLeft: 5,
  },

  productCard: {
    width: '50%',
    padding: 5,
  },
});
export default App;
