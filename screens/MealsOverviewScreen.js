import { useLayoutEffect } from "react"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { View, Text, StyleSheet, FlatList } from "react-native"

import { useRoute } from "@react-navigation/native"
import MealItem from "../components/MealItem"

function MealsOverviewScreen({ navigation, route }) {

    const catId = route.params.categoryId

    
    
    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catId) >= 0)
    
    
    useLayoutEffect(() => {
        console.log('hola miundo')
        console.log('hola miundo')
        console.log('hola miundo')
        console.log('hola miundo')
        console.log('hola miundo')
        const category = CATEGORIES.find(category => category.id == catId)
        console.log(category)
        const categoryTitle = category.title
        
        navigation.setOptions({
            title: categoryTitle
        })

    }, [catId, navigation])

    
    function renderMealItem(itemData){

        const item = itemData.item

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return <MealItem { ...mealItemProps }/>
    }

    return (
        <View style={styles.container}>
            {/* <Text>{categoryTitle}</Text> */}


            {/* {displayedMeals.map( obj => <Text key={obj.id}>{obj.title}</Text> )} */}
            <FlatList
                data={displayedMeals}
                renderItem={itemData => renderMealItem(itemData)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen