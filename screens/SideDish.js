import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, Image, ImageBackground} from 'react-native'
import { styles } from './style/style';

export default function SideDish({navigation}){
  const [modalOpen, setModalOpen] = useState(false);
    return(
      <View style={styles.container}>
        <View style={styles.bodyContainer}>

          <Text style={styles.description}>
          Side dishes or appetizers are served before the main course. It is usually a small serving of food
          which stimulates one's appetite and prepares eaters for the main course.
          </Text>

          {/* Dish Buttons */}
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate("TokwatBaboy")}>
            <ImageBackground
              source={require('../assets/tokwatBaboy.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Tokwa't Baboy Recipe</Text>
            </ImageBackground>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('PancitBihon')}>
          <ImageBackground
            source={require('../assets/sidedish.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Pancit Bihon Recipe</Text>
          </ImageBackground>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('PancitPalabok')}>
          <ImageBackground
            source={require('../assets/pancitPalabok.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Pancit Palabok Recipe</Text>
          </ImageBackground>
          </TouchableOpacity > 
        </View>
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

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('APIScreen')}>
            <Text>API Screen Testing</Text>
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
    )
}
