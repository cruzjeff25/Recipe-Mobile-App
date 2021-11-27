import React from "react";
import {View, SafeAreaView,  Text, TouchableOpacity, ScrollView, ImageBackground, Image} from 'react-native'
import { styles } from './style/style';


export default function Home({navigation}){
   
  return(
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>The Recipe</Text>
          <Text style={styles.subtitle}>Filipino Foods</Text>
        </View> 

        {/* Body */}
        <View style={styles.bodyContainer}>

          <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet.
          </Text>

          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('MainDish')}>
            <Text>Main Dish</Text>
            <ImageBackground
            source={require('../assets/mainDish.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.text}>Inside</Text>
            </ImageBackground>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('SideDish')}>
            <Text>Side Dish</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Desserts')}>
            <Text>Desserts</Text>
          </TouchableOpacity >        
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('AllRecipe')}>
            <Text>All</Text>
          </TouchableOpacity >    
        </View>  
    </SafeAreaView>
    )
}