import React, { useState } from "react";
import {View, SafeAreaView,  Text, TouchableOpacity, ScrollView, ImageBackground, Image, Modal} from 'react-native'
import { styles } from './style/style';

export default function Home({navigation}){
  const [modalOpen, setModalOpen] = useState(false);

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
            Lutong Pinoy offers you Filipino food recipes that are known to many, especially Filipino food munchers. Enjoy your stay and have fun cooking!
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
            <ImageBackground
              source={require('../assets/allrecipes.png')} 
              resizeMode="cover" style={styles.image}
              >
                <Text style={styles.boxText}>All Recipes</Text>
            </ImageBackground>
          </TouchableOpacity > 

          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Others')}>
            <ImageBackground
              source={require('../assets/coffee.png')} 
              resizeMode="cover" style={styles.image}
              >
                <Text style={styles.boxText}>API Screen</Text>
            </ImageBackground>
          </TouchableOpacity >

          {/* Menu button */}
      <TouchableOpacity style={styles.menuBttn} onPress={() => setModalOpen(true)}>
        <Image
          style={{width:34, height:34}}
          source={require('../assets/menu.png')}
        />
      </TouchableOpacity>

      {/* Menu Modal */}
      <Modal visible={modalOpen} animationType="fade">
        <View style={styles.modalBG}>
          <View style={styles.menuModal}>

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('Home')}>
            <Text>Home</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('MainDish')}>
            <Text>Main Dish</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('SideDish')}>
            <Text>Side dish</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('Desserts')}>
            <Text>Desserts</Text>
          </TouchableOpacity >    

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('AllRecipe')}>
            <Text>All Recipe</Text>
          </TouchableOpacity >   

          
          </View>
        </View>

        <TouchableOpacity style={styles.menuBttn} onPress={() => setModalOpen(false)}>
        <Image
          style={{width:34, height:34}}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
      </Modal>   
        </View>  
    </SafeAreaView>
  )
}