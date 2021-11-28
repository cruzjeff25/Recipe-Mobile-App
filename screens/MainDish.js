import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, Image, ImageBackground} from 'react-native'
import { styles } from './style/style';

export default function MainDish({navigation}){
  const [modalOpen, setModalOpen] = useState(false);
  
  const ginilingImage = { uri: "https://lh4.googleusercontent.com/_rBrnSm1Xl08/Tccz4bW_OSI/AAAAAAAAJQ4/rIK_K7Grfnc/s800/pork-giniling.jpg" };
  const sisigImage = { uri: "https://cdn.shopify.com/s/files/1/0471/6517/8023/products/thomson-road-kitchen-4555-800x800_800x.jpg?v=1600624959" };

    return(

/* Body */

    <View style={styles.container}>  
      <View style={styles.bodyContainer}>

        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet.
        </Text>
        {/* Dish Buttons */}
        <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('PorkGiniling')}>
          <ImageBackground
            source={require('../assets/giniling.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Pork Giniling Recipe</Text>
          </ImageBackground>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('PorkSisig')}>
        <ImageBackground
            source={require('../assets/sisig.png')} 
            resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Pork Sisig Recipe</Text>
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
