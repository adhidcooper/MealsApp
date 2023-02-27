import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={styles.gridItem}>
     <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => [styles.btn, pressed? styles.btnPressed: null]} 
        onPress={onPress}>
      <View style={[styles.innerContainer, {backgroundColor: color}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
     </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: '#262324',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 8,
    overflow: Platform.OS ==="android" ? 'hidden' : 'visible',
  },
  btn: {
    flex: 1,
  },
  btnPressed : {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1, 
    padding: 16, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.7
  }
})