import Cart from '../screens/cart'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import MainStack from './mainStack'
import Order from '../screens/order'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const TabStack = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabStack.Screen
        name="ShopStack"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IonicIcons name={focused ? 'home' : 'home-outline'} size={20} />
          ),
          title: 'Shop',
        }}
      />
      <TabStack.Screen
        name="CartStack"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <IonicIcons name={focused ? 'cart' : 'cart-outline'} size={20} />
          ),
          title: 'Cart',
        }}
      />
      <TabStack.Screen
        name="OrderStack"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => (
            <IonicIcons name={focused ? 'list' : 'list-outline'} size={20} />
          ),
          title: 'Order',
        }}
      />
    </TabStack.Navigator>
  )
}

export default MainNavigator
