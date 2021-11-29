import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function TokwatBaboy({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Tokwa't Baboy Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/tokwatBaboy.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1 lb pig ears</Text>
                        <Text>1 lb pork belly liempo</Text>
                        <Text>1 lb tofu extra firm tofu</Text>
                        <Text>1 1/2 cup white vinegar</Text>
                        <Text>1/4 cup soy sauce</Text>
                        <Text>1 tablespoon sugar</Text>
                        <Text>1 tablespoon salt</Text>
                        <Text>1 tablespoon whole peppercorn</Text>
                        <Text>1 piece onion sliced</Text>
                        <Text>2 stalks scallions cut in 1/2 inch length</Text>
                        <Text>1/8 teaspoon ground black pepper</Text>
                        <Text>5 cups water</Text>
                        <Text>2 cups cooking oil</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. Pour-in water in a pot and bring to a boil.</Text>
                        <Text>2. Add salt and whole peppercorn.</Text>
                        <Text>3. Put-in the pig's ears and pork belly then simmer until tender (about 30 mins to 1 hour).</Text>
                        <Text>4. Pour cooking oil on a separate pan and allow to heat.</Text>
                        <Text>5. When the oil is hot enough, deep-fry the tofu until color turns golden brown and outer texture is somewhat crispy.</Text>
                        <Text>6. Cube the fried tofu and slice the boiled pig's ears and pork belly into bite-sized pieces then set aside.</Text>
                        <Text>7. Combine the sugar, salt, soy sauce, and vinegar in bowl. Stir.</Text>
                        <Text>8. Microwave for 1 minute.</Text>
                        <Text>9. Add the ground black pepper, onions, green onions, and chili pepper. Transfer the sauce in a serving bowl.</Text>
                        <Text>10. Place the sliced meat and tofu in a serving plate with the bowl of sauce by the side.</Text>
                        <Text>11. Serve hot! Share and Enjoy!</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}