import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function PorkGiniling({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Pork Giniling Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021.
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/giniling.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1 1/2 lb ground pork</Text>
                        <Text>1 1/2 cups potatoes diced</Text>
                        <Text>1 cup carrots diced</Text>
                        <Text>8 ounces tomato sauce</Text>
                        <Text>6 cloves garlic crushed</Text>
                        <Text>1 medium-sized onion minced</Text>
                        <Text>1 teaspoon granulated sugar</Text>
                        <Text>1 piece beef or pork cube</Text>
                        <Text>4 boiled eggs shelled (optional)</Text>
                        <Text>Salt and pepper to taste</Text>
                        <Text>3 tablespoons cooking oil</Text>
                        <Text>1 cup water</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. Heat a cooking pot and pour-in the cooking oil.</Text>
                        <Text>2. When the oil is hot enough, put-in the garlic and sauté until the color turns light brown.</Text>
                        <Text>3. Add the onions and sauté until the texture becomes soft.</Text>
                        <Text>4. Put-in the ground pork and cook for 5 minutes.</Text>
                        <Text>5. Add the beef or pork cube, tomato sauce, and water and let boil. Simmer for 20 minutes.</Text>
                        <Text>6. Put the carrots and potatoes in then stir until every ingredient is properly distributed. Simmer for 10 to 12 minutes.</Text>
                        <Text>7. Add salt, ground black pepper, and sugar then stir.</Text>
                        <Text>8. Put in the boiled eggs and turn off the heat.</Text>
                        <Text>9. Transfer to a serving bowl and serve.</Text>
                        <Text>10. Share and enjoy!</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}