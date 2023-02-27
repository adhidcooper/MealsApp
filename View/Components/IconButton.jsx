import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconButton({ icon, onPress, color}) {

  return (

    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View>
            {/* <Text>Hello World</Text> */}
        <Icon name={icon} size={30} color={color} /> 
     </View>
    </Pressable>
 
  )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})