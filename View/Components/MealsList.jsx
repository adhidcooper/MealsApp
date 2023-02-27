import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MealItems from './MealItems';
import { useNavigation } from '@react-navigation/native';

export default function MealsList({items}) {
    const navigation = useNavigation();

    const renderMealItems = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
          id : item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity : item.complexity,
          affordability: item.affordability,
        }
        return ( <MealItems {...mealItemProps} 
          onPress={() => navigation.navigate('MealDetails', {mealId: mealItemProps.id})} /> )
      }
      return (
        <View style={styles.container}>
          <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItems} />
        </View>
      )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})