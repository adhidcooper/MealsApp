import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Subtitle({title}) {
  return (
    <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{title}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      subtitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 10,
        marginVertical: 4,
        
      }
})