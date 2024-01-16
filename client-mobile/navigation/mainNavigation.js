import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../screens/login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductList from '../screens/productList';

const Stack = createNativeStackNavigator()

const mainNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            headerTitle: 'Product List'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default mainNavigation

const styles = StyleSheet.create({})