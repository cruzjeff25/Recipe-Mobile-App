import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home'
import MainDishScreen from './screens/MainDish'
import SideDishScreen from './screens/SideDish'
import DessertsScreen from './screens/Desserts'
import AllRecipeScreen from './screens/AllRecipe'
import PorkGinilingScreen from './screens/PorkGiniling'
import PorkSisigScreen from './screens/PorkSisig'
import TokwatBaboyScreen from './screens/TokwatBaboy'
import PancitBihonScreen from './screens/PancitBihon'
import PancitPalabokScreen from './screens/PancitPalabok'
import KutsintaScreen from './screens/Kutsinta'
import LecheFlanScreen from './screens/LecheFlan'
import PutoScreen from './screens/Puto'
import HalohaloScreen from './screens/Halohalo'
import OthersScreen from './screens/Others'
import { ScrollView } from "react-native";


const Stack = createNativeStackNavigator();

const MyStack = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="MainDish" component={MainDishScreen}/>
        <Stack.Screen name="SideDish" component={SideDishScreen}/>
        <Stack.Screen name="Desserts" component={DessertsScreen}/>
        <Stack.Screen name="AllRecipe" component={AllRecipeScreen}/>
        <Stack.Screen name="PorkGiniling" component={PorkGinilingScreen}/>
        <Stack.Screen name="PorkSisig" component={PorkSisigScreen}/>
        <Stack.Screen name="TokwatBaboy" component={TokwatBaboyScreen}/>
        <Stack.Screen name="PancitBihon" component={PancitBihonScreen}/>
        <Stack.Screen name="PancitPalabok" component={PancitPalabokScreen}/>
        <Stack.Screen name="Kutsinta" component={KutsintaScreen}/>
        <Stack.Screen name="LecheFlan" component={LecheFlanScreen}/>
        <Stack.Screen name="Puto" component={PutoScreen}/>
        <Stack.Screen name="Halohalo" component={HalohaloScreen}/>
        <Stack.Screen name="Others" component={OthersScreen}/>
      </Stack.Navigator>
  
    </NavigationContainer>
  );
};

export default MyStack