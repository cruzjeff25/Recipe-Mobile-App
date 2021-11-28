import React from "react";
import {View, SafeAreaView,  Text, TouchableOpacity, ScrollView, ImageBackground, Image} from 'react-native'
import { styles } from './style/style';


export default function Home({navigation}){

  return(
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Lutong Pinoy</Text>
          <Text style={styles.subtitle}>Your Signature Filipino Food Recipe App!</Text>
        </View> 

        {/* Body */}
        <View style={styles.bodyContainer}>

          <Text style={styles.description}>
            Lutong Pinoy offers you Filipino food recipes that are known for basta ayun
          </Text>

          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('MainDish')}>
            <ImageBackground
            source={require('../assets/mainDish.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Main Dish</Text>
            </ImageBackground>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('SideDish')}>
            <ImageBackground
              source={require('../assets/sidedish.png')} 
              resizeMode="cover" style={styles.image}
              >
                <Text style={styles.boxText}>Side Dish</Text>
            </ImageBackground>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Desserts')}>
            <ImageBackground
              source={require('../assets/dessert.png')} 
              resizeMode="cover" style={styles.image}
              >
                <Text style={styles.boxText}>Desserts</Text>
            </ImageBackground>
          </TouchableOpacity >        
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('AllRecipe')}>
            <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>View All Recipe</Text>
          </TouchableOpacity >    
        </View>  
    </SafeAreaView>
    )
}