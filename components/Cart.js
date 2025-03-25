import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const loadCart = async () => {
      const savedCart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
      setCart(savedCart);
      setTotal(savedCart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
    };
    loadCart();
  }, []);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cart.map((item, index) => (
          <Text key={index}>
            {item.title} - ${item.price}
          </Text>
        ))
      )}
      <Text>Total: ${total}</Text>
      <Button title="Proceed to Checkout" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Cart;
