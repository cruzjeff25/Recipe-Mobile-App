import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native'
import { styles } from './style/style';

export default function SideDish({navigation}){
  const [modalOpen, setModalOpen] = useState(false);
    return(
      <View style={styles.container}>
        <View style={styles.bodyContainer}>

          <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet.
          </Text>

          {/* Dish Buttons */}
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate("TokwatBaboy")}>
            <Text>Tokwa't Baboy</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('PancitBihon')}>
            <Text>Pancit Bihon</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('PancitPalabok')}>
            <Text>Pancit Palabok</Text>
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
