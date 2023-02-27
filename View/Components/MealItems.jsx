import { Pressable, StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import MealDetails from './MealDetails'
 
export default function MealItems({title , imageUrl, duration, complexity, affordability, onPress }) {
   
  return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}}
         style={({pressed}) => ( pressed? styles.btnPressed: null)} onPress={onPress} >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    mealItem: {
        margin:16,
        borderRadius: 20,
        backgroundColor: '#31AADE',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        overflow: Platform.OS ==="android" ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        
    },
    title: {
        fontWeight: 'center',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
        color: '#0D1C26'
    },
   
   
    btnPressed : {
        opacity: 0.5
    },
})