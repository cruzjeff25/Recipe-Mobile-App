import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, Image, ScrollView} from 'react-native'
import { styles } from './style/style';

export default function AllRecipe({navigation}){
    // const [modalOpen, setModalOpen] = useState(false);
    return(
      <ScrollView>
         <View style={{flex:1,height:'100%', width:"100%", paddingBottom:1500, alignItems:'center'}}>
         <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PorkGiniling')}>
          <Text>Pork Giniling</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PorkSisig')}>
        <Text>Pork Sisig</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate("TokwatBaboy")}>
          <Text>Tokwa't Baboy</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PancitBihon')}>
          <Text>Pancit Bihon</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PancitPalabok')}>
          <Text>Pancit Palabok</Text>
        </TouchableOpacity > 
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('Kutsinta')}>
          <Text>Kutsinta</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('LecheFlan')}>
          <Text>Leche Flan </Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('Puto')}>
          <Text>Puto</Text>
        </TouchableOpacity >        
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('Halohalo')}>
          <Text>Halo-halo</Text>
        </TouchableOpacity >    
      </View>
      </ScrollView>
    )
}
