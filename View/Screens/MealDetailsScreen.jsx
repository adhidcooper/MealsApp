import { StyleSheet, Text,Image, View, ScrollView, Button } from 'react-native'
import React, { useContext } from 'react'
import { MEALS } from '../../Data/dummy-data'
import { useLayoutEffect } from 'react'
import MealDetails from '../Components/MealDetails'
import Subtitle from '../Components/Subtitle'
import List from '../Components/List'
import IconButton from '../Components/IconButton'
import {FavouritesContext} from '../../store/context/favouriteContext'


export default function MealDetailsScreen({route, navigation}) {
    
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const favouriteMealsCtx = useContext(FavouritesContext)
    const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId)


    const headerButtonHandler= () => {
      if (mealIsFavourite) {
        favouriteMealsCtx.removeFavourite(mealId)
      } else {
        favouriteMealsCtx.addFavourite(mealId)
      }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (<IconButton icon={mealIsFavourite ? 'star' : 'star-outline'} color={'white'} onPress={headerButtonHandler}/>)
        }
      })
    },[navigation, headerButtonHandler])
  return (
    <ScrollView style={styles.rootContainer}>
    <View style={styles.container}>
        <Image source={{ uri : selectedMeal.imageUrl }} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} textStyle={{color: 'white'}} />
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredient" />
        
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
    container: {
        padding: 10
    },
    image: {
        elevation: 5,
        width: '90%',
        height: 290,
        borderRadius: 18,
        margin: 30,
        alignSelf: 'center',
        
    },
    title: {
        
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        margin: 8,
    },
    mealText: {
        color: 'white',
    },
    listOuterContainer: {
      alignItems: 'center'
    },
    listContainer: {
      width: '80%'
    }
   

})