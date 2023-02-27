import { StyleSheet, StatusBar, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './View/Screens/CategoriesScreen'
import MealsOverviewScreen from './View/Screens/MealsOverviewScreen'
import MealDetailsScreen from './View/Screens/MealDetailsScreen'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';

import FavouritesScreen from './View/Screens/FavouritesScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import FavouritesContextProvider from './store/context/favouriteContext'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  return (
  <Drawer.Navigator screenOptions={{
    headerStyle:{ backgroundColor: '#0D1C26'}, 
    headerTintColor: '#f2f2f2',
    sceneContainerStyle: {backgroundColor: '#1F3140'},
    drawerContentStyle: {backgroundColor: '#1F3140'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#0D1C26',
    drawerActiveBackgroundColor: '#31AADE',
}}>
    <Drawer.Screen name="All Categories" component={CategoriesScreen} options={{ drawerIcon: ({ color, size }) => ( <Icon name="list" color={color} size={size} />), }}/>
    <Drawer.Screen name="Favourites" component={FavouritesScreen}  options={{ drawerIcon: ({ color, size }) => ( <Icon name="star" color={color} size={size} />), }}/>
  </Drawer.Navigator>)
}
export default function App() {
  return (
   <FavouritesContextProvider>
      <NavigationContainer>
      <StatusBar style="light" backgroundColor={'#0D1C26'} ></StatusBar>

          <Stack.Navigator screenOptions={{
              headerStyle:{ backgroundColor: '#0D1C26', textAlign: 'center'}, 
              headerTintColor: '#f2f2f2',
              contentStyle: {backgroundColor: '#1F3140'}
          }}>
            <Stack.Screen name='Drawer' options={{ headerShown: false }} component={DrawerNavigator} />
            {/* <Stack.Screen name="Categories" options={{ title: 'All Categories' }} component={CategoriesScreen} /> */}
            <Stack.Screen name='MealDetails'  component={MealDetailsScreen}  options={{ title: 'About The Meal'}}/>
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}  />
          </Stack.Navigator>
      
      </NavigationContainer>
    </FavouritesContextProvider>


  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#262324',
  }
})