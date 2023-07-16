import { MEALS, CATEGORIES } from "../data/dummy-data"
import { View, Text, StyleSheet, FlatList } from "react-native"

import { useRoute } from "@react-navigation/native"
import MealItem from "../components/MealItem"

function MealsOverviewScreen({ navigation, route }) {

    const catId = route.params.categoryId

    const category = CATEGORIES.filter(category => category.id.indexOf(catId) >= 0)[0]

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catId) >= 0)

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
            {/* <Text>{category.title}</Text> */}


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