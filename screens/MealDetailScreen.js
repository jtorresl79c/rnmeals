import { useLayoutEffect } from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"

import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"

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



    return (
    <ScrollView style={styles.container}>

        <Image source={ {uri: mealItem.imageUrl} } style={styles.image}/>
        <Text style={styles.title}>{mealItem.title}</Text>
        <View>
            <MealDetails 
                duration={mealItem.duration}
                affordability={mealItem.affordability}
                complexity={mealItem.complexity}
                textStyle={styles.detailText}
            />
        </View>

        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={mealItem.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={mealItem.steps}/>
            </View>
        </View>

        {/* {mealItem.ingredients.map( ingredient => <Text key={ingredient}>{ingredient}</Text> )} */}



        {/* <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
        </View> */}
            {/* {mealItem.steps.map( step => <Text key={step}>{step}</Text> )} */}

        {/* <Text>{mealItem.id}</Text>
        <Text>{mealItem.categoryIds}</Text>
        <Text>{mealItem.title}</Text>
        <Text>{mealItem.imageUrl}</Text>
        <Text>{mealItem.ingredients}</Text>
        <Text>{mealItem.steps}</Text>
        <Text>{mealItem.duration}</Text>
        <Text>{mealItem.complexity}</Text>
        <Text>{mealItem.affordability}</Text>
        <Text>{mealItem.isGlutenFree}</Text>
        <Text>{mealItem.isVegan}</Text>
        <Text>{mealItem.isVegetarian}</Text>
        <Text>{mealItem.isLactoseFree}</Text> */}
    </ScrollView>)

}

const styles = StyleSheet.create({
    container: {
        // padding: 40,
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',

    }
})

export default MealDetailsScreen