import React from "react";
import {View, Image, Button, Text, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function Halohalo({navigation}){
    return(
        <View>
        <ScrollView style={styles.scrollView}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.recipeTitle}>
                Halo-halo Recipe
            </Text>
            <Text style={{fontSize: 16, fontStyle: 'italic'}}>
                Published on November 26, 2021
            </Text>
            <Image
                style={styles.recipeImage}
                source={require('../assets/halohalo.png')}
            />
            <View style={styles.recipeBody}>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Ingredients
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>2 cups of shaved ice</Text>
                        <Text>1 ripe large banana</Text>
                        <Text>1 cup young shredded coconut, fresh or bottled</Text>
                        <Text>1/2 cup sweet corn or chickpeas (garbanzos)</Text>
                        <Text>2 cups evaporated milk</Text>
                        <Text>1 cup firm gelatin set into a gel and cut into 1/2 inch cubes</Text>
                        <Text>2 ripe mangoes</Text>
                        <Text>1 cup ripe jackfruit</Text>
                        <Text>1 cup cooked sweet yams or (ube halaya)</Text>
                        <Text>4 scoops of favorite ice cream</Text>
                        <Text>1/2 cup rice pop</Text>
                    </View>
                </View>
                <View style={styles.recipeArea}>
                    <Text style={styles.recipeAreaTitle}>
                        Procedure
                    </Text>
                    <View style={styles.recipeAreaDetail}>
                        <Text>1. Peel mangoes and slice into half-inch cubes.</Text>
                        <Text>2. Divide each ingredient into 4 equal parts. Get 4 tall glasses, then place each ingredients layer by layer.</Text>
                        <Text>3. Put the one-half cup of shaved ice to each glass.</Text>
                        <Text>4. Pour a quarter of milk evap over shaved ice to each glass.</Text>
                        <Text>5. Put a scoop of ice cream on top.</Text>
                        <Text>6. Drizzle some nuts or rice crispies on top of the ice cream.</Text>
                    </View>
                </View>
            </View>
        </View>    
        </ScrollView>
        </View>
    )
}