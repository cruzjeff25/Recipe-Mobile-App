import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, Image, ScrollView, ImageBackground} from 'react-native'
import { styles } from './style/style';

export default function AllRecipe({navigation}){
    // const [modalOpen, setModalOpen] = useState(false);
    return(
      <ScrollView>
         <View style={{flex:1, height:'100%', width:"100%", paddingBottom:170, alignItems:'center', backgroundColor:'#f0cdbd'}}>
         <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PorkGiniling')}>
          <ImageBackground
            source={require('../assets/giniling.png')} 
            resizeMode="cover" style={styles.image}>
              <Text style={styles.boxText}>Pork Giniling Recipe</Text>
          </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PorkSisig')}>
          <ImageBackground
            source={require('../assets/sisig.png')} 
            resizeMode="cover" style={styles.image}>
              <Text style={styles.boxText}>Pork Sisig Recipe</Text>
          </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate("TokwatBaboy")}>
          <ImageBackground
              source={require('../assets/tokwatBaboy.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Tokwa't Baboy Recipe</Text>
            </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PancitBihon')}>
          <ImageBackground
            source={require('../assets/sidedish.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Pancit Bihon Recipe</Text>
          </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('PancitPalabok')}>
          <ImageBackground
            source={require('../assets/pancitPalabok.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Pancit Palabok Recipe</Text>
          </ImageBackground>
        </TouchableOpacity > 
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('Kutsinta')}>
          <ImageBackground
              source={require('../assets/kutsinta.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Kutsinta Recipe</Text>
            </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('LecheFlan')}>
          <ImageBackground
              source={require('../assets/dessert.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Leche Flan Recipe</Text>
            </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('Puto')}>
          <ImageBackground
              source={require('../assets/puto.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Puto Recipe</Text>
            </ImageBackground>
        </TouchableOpacity >        
        <TouchableOpacity  style={styles.recipeList} onPress = {() => navigation.navigate('Halohalo')}>
          <ImageBackground
              source={require('../assets/halohalo.png')} 
              resizeMode="cover" style={styles.image}>
              <Text style={styles.boxText}>Halo-Halo Recipe</Text>
            </ImageBackground>
        </TouchableOpacity >    
      </View>
      </ScrollView>
    )
}
