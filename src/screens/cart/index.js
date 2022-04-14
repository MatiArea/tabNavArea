import { Button, FlatList, Text, View } from 'react-native'
import { confirmCart, removeItem } from '../../store/actions/cart.action'
import { connect, useDispatch, useSelector } from 'react-redux'

import CartItem from '../../components/cartItem/index'
import React from 'react'
import { styles } from './styles'

const Cart = ({ navigation }) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state['cart']['items'])
  const total = useSelector((state) => state['cart']['total'])
  const user = useSelector((state) => state['auth']['userId'])

  const handleDeleteItem = (id) => dispatch(removeItem(id))

  const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem} />

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total, user))
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList data={items} keyExtractor={(item) => item['id']} renderItem={renderItem} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.totalPrice}>${total}</Text>
        <Button title="Comprar" onPress={() => handleConfirmCart()} color="#212121" />
      </View>
    </View>
  )
}

export default connect()(Cart)
