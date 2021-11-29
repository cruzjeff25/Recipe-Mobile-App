import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function PancitPalabok({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Pancit Palabok Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/pancitPalabok.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1 lb pancit bihon Rice Noodles</Text>
                        <Text>1/2 lb. pork cut into small thin slices</Text>
                        <Text>1/2 lb. chicken cooked, deboned, and cut into thin slices</Text>
                        <Text>1/8 lb. pea pods or snow pea</Text>
                        <Text>1 cup carrot</Text>
                        <Text>1/2 small cabbage chopped</Text>
                        <Text>1 cup celery leaves chopped finely</Text>
                        <Text>1 medium sized onion chopped</Text>
                        <Text>1/2 tbsp garlic minced</Text>
                        <Text>1 pc chicken cube</Text>
                        <Text>5 tbsp soy sauce</Text>
                        <Text>3 to 4 cups water</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. In a large pot, Saute the garlic and onion.</Text>
                        <Text>2. Add the pork and chicken then let cook for 2 minutes.</Text>
                        <Text>3. Add the chicken cube and water then simmer for 15 minutes.</Text>
                        <Text>4. Put in the carrots, pea pod, cabbage, and celery leaves and simmer for a few minutes.</Text>
                        <Text>5. Remove all the ingredients in the pot except for the liquid and set them aside.</Text>
                        <Text>6. In the pot with the liquid in, add the soy sauce and mix well.</Text>
                        <Text>7. Add the pancit bihon (makes sure to first soak it in water for about 10 minutes) and mix well. Cook until liquid evaporates completely.</Text>
                        <Text>8. Put-in the vegetables and meat that were previously cooked and simmer for a minute or two.</Text>
                        <Text>9. Serve hot. Share and enjoy!</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}