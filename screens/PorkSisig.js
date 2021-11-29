import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function PorkSisig({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Pork Sisig Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/sisig.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1 1/2 lb pork belly</Text>
                        <Text>1 piece onion minced</Text>
                        <Text>3 tablespoons soy sauce</Text>
                        <Text>1/4 teaspoon ground black pepper</Text>
                        <Text>1 knob ginger minced (optional)</Text>
                        <Text>3 tablespoons chili flakes</Text>
                        <Text>1/2 teaspoon garlic powder</Text>
                        <Text>1 piece lemon or 3 to 5 pieces calamansi</Text>
                        <Text>½ cup butter or margarine</Text>
                        <Text>¼ lb chicken liver</Text>
                        <Text>6 cups water</Text>
                        <Text>3 tablespoons mayonnaise</Text>
                        <Text>1/2 teaspoon salt</Text>
                        <Text>1 piece egg (optional)</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. Pour the water in a pan and bring to a boil Add salt and pepper.</Text>
                        <Text>2. Put-in the pig’s ears and pork belly then simmer for 40 minutes to 1 hour (or until tender).</Text>
                        <Text>3. Remove the boiled ingredients from the pot then drain excess water.</Text>
                        <Text>4. Grill the boiled pig ears and pork belly until done.</Text>
                        <Text>5. Chop the pig ears and pork belly into fine piece.s</Text>
                        <Text>6. In a wide pan, melt the butter or margarine. Add the onions. Cook until onions are soft.</Text>
                        <Text>7. Put-in the ginger and cook for 2 minutes.</Text>
                        <Text>8. Add the chicken liver. Crush the chicken liver while cooking it in the pan.</Text>
                        <Text>9. Add the chopped pig ears and pork belly. Cook for 10 to 12 minutes.</Text>
                        <Text>10. Put-in the soy sauce, garlic powder, and chili. Mix well.</Text>
                        <Text>11. Add salt and pepper to taste.</Text>
                        <Text>12. Put-in the mayonnaise and mix with the other ingredients.</Text>
                        <Text>13. Transfer to a serving plate. Top with chopped green onions and raw egg.</Text>
                        <Text>14. Serve hot. Share and Enjoy (add the lemon or calamansi before eating).</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}