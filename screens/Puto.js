import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function Puto({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Puto Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/puto.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1 cup all-purpose flour</Text>
                        <Text>1/2 cup granulated white sugar</Text>
                        <Text>3 teaspoons baking powder</Text>
                        <Text>1 cup fresh milk</Text>
                        <Text>1/4 teaspoon vanilla extract</Text>
                        <Text>3/4 cup shredded sharp cheddar cheese</Text>
                        <Text>5 cups water for steaming</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. Pour the water into a steamer or cooking pot. Let boil.</Text>
                        <Text>2. Sift flour, sugar, and baking powder. Combine in a bowl. Mix well.</Text>
                        <Text>3. Gradually add the milk while stirring. Continue to stir until the texture of the mixture becomes smooth.</Text>
                        <Text>4. Stir-in the vanilla extract and half of the cheese.</Text>
                        <Text>5. Pour the mixture into small to medium sized molds. Arrange in a steamer. Cover and steam for 25 minutes. Top each puto with the remaining cheese. Steam for 5 minutes more.</Text>
                        <Text>6. Take the steamed cheese puto out of the steamer. Let it cool down.</Text>
                        <Text>7. Gently remove the puto from the mold with the help of a spatula.</Text>
                        <Text>8. Arrange in serving plate. Serve.</Text>
                        <Text>9. Share and enjoy!</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}