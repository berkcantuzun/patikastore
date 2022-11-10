import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  out_stock: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
