import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen = ({ navigation }) => {
  const handleProductSelect = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products"
        // Add functionality to filter products by title or category
      />
      <ProductList onProductSelect={handleProductSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default HomeScreen;
