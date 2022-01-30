import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, Image, ImageBackground} from 'react-native'
import { styles } from './style/style';

export default function Desserts({navigation}){
  const [modalOpen, setModalOpen] = useState(false);
    return(
      <View style={styles.container}>
        <View style={styles.bodyContainer}>

          <Text style={styles.description}>
          Courses often end with a sweet, decadent course, known as the dessert, which can be either hot or cold, or accompanied by a glass of dessert wine, coffee, or tea.
          </Text>

        {/* Dish Buttons */}
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Kutsinta')}>
          <ImageBackground
              source={require('../assets/kutsinta.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Kutsinta Recipe</Text>
            </ImageBackground>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('LecheFlan')}>
          <ImageBackground
              source={require('../assets/dessert.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Leche Flan Recipe</Text>
            </ImageBackground>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Puto')}>
            <ImageBackground
              source={require('../assets/puto.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Puto Recipe</Text>
            </ImageBackground>
          </TouchableOpacity >        
          <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Halohalo')}>
            <ImageBackground
              source={require('../assets/halohalo.png')} 
              resizeMode="cover" style={styles.image}
            >
              <Text style={styles.boxText}>Halo-halo Recipe</Text>
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
