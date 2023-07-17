import { useLayoutEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data"
function MealDetailsScreen({ navigation, route }) {
    // console.log(route.params.mealId)
    const mealId = route.params.mealId

    const mealItem = MEALS.find(meal => meal.id === mealId)


    useLayoutEffect(() => {
        // const category = CATEGORIES.find(category => category.id == catId)
        // console.log(category)
        const mealTitle = mealItem.title
        
        navigation.setOptions({
            title: mealTitle
        })

    }, [mealId, navigation])



    return (<View style={styles.container}>
        <Text>{mealItem.id}</Text>
        <Text>{mealItem.categoryIds}</Text>
        <Text>{mealItem.title}</Text>
        {/* <Text>{mealItem.imageUrl}</Text> */}
        <Text>{mealItem.ingredients}</Text>
        <Text>{mealItem.steps}</Text>
        <Text>{mealItem.duration}</Text>
        <Text>{mealItem.complexity}</Text>
        <Text>{mealItem.affordability}</Text>
        <Text>{mealItem.isGlutenFree}</Text>
        <Text>{mealItem.isVegan}</Text>
        <Text>{mealItem.isVegetarian}</Text>
        <Text>{mealItem.isLactoseFree}</Text>
    </View>)

}

const styles = StyleSheet.create({
    container: {
        color: 'white',
        padding: 40
    }
})

export default MealDetailsScreen