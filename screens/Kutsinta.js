import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function Kutsinta({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Kutsinta Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/kutsinta.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1 1/2 cup rice flour</Text>
                        <Text>1/2 cup all-purpose flour</Text>
                        <Text>1 cup brown sugar</Text>
                        <Text>3 cups water</Text>
                        <Text>1 1/2 tsp lye water</Text>
                        <Text>2 tsp anatto seeds</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. In a mixing bowl, combine all the dry ingredients starting from the rice flour, all-purpose flour, and brown sugar then mix all the ingredients.</Text>
                        <Text>2. While mixing, add water gradually and continue to mix until all ingredients are completely distributed.</Text>
                        <Text>3. Add lye water and anatto water (soak the anatto seed in 3 tbsp water) then continue mixing.</Text>
                        <Text>4. Place the mixture into individual molds and steam for 40 minutes to an hour.</Text>
                        <Text>5. Serve with grated or shredder coconut on top. Share and Enjoy!</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}