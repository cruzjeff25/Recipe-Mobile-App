import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function LecheFlan({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Leche Flan Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/dessert.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>10 pieces eggs</Text>  
                        <Text>1 can condensed milk (14 oz)</Text>
                        <Text>1 cup fresh milk or evaporated milk</Text>
                        <Text>1 cup granulated sugar</Text>
                        <Text>1 teaspoon vanilla extract</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. Using all the eggs, separate the yolk from the egg white (only egg yolks will be used).</Text>
                        <Text>2. Place the egg yolks in a big bowl then beat them using a fork or an egg beater.</Text>
                        <Text>3. Add the condensed milk and mix thoroughly.</Text>
                        <Text>4. Pour in the fresh milk and Vanilla. Mix well.</Text>
                        <Text>5. Put the mold (llanera) on top of the stove and heat using low fire.</Text>
                        <Text>6. Put in the granulated sugar on the mold and mix thoroughly until the solid sugar turns into liquid (caramel) having a light brown color. Note: Sometimes it is hard to find a Llanera (Traditional flan mold) depending on your location. I find it more convenient to use individual Round Pans in making leche flan.</Text>
                        <Text>7. Spread the caramel (liquid sugar) evenly on the flat side of the mold.</Text>
                        <Text>8. Wait for 5 minutes then pour the egg yolk and milk mixture on the mold.</Text>
                        <Text>9. Cover the top of the mold using an Aluminum foil.</Text>
                        <Text>10. Steam the mold with egg and milk mixture for 30 to 35 minutes.</Text>
                        <Text>11. After steaming, let the temperature cool down then refrigerate.</Text>
                        <Text>12. Serve for dessert. Share and Enjoy!</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}