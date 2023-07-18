import { View, Text, StyleSheet } from "react-native"

function List({data}){
    return (
        data.map( text => (
            <View key={text} style={styles.listItem}>
                <Text style={styles.itemText}>{text}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})


export default List