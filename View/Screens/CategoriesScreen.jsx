import { CATEGORIES } from '../../Data/dummy-data'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import CategoryGridTile from '../Components/CategoryGridTile'


export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const onPressHander = () => {
      navigation.navigate('MealsOverview', {categoryId: itemData.item.id})
    }
    return(
      <CategoryGridTile 
        title={itemData.item.title} color={itemData.item.color} onPress={onPressHander}/>
    )
  }
  return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
        
    />
  )
}

const styles = StyleSheet.create({})