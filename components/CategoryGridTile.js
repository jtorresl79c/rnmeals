import { Text } from "react-native"
import { Pressable } from "react-native"
import { View } from "react-native"

function CategoryGridTile(title){
    return <View>
        <Pressable>
            <View>
                <Text>{title.title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile