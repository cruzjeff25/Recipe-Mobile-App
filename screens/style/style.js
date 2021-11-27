import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
  },

  // Menu button
  menuBttn:{
    backgroundColor: "#f57b42",
    position: "absolute",
    right: "8%",
    bottom: "8%",
    padding: 14,
    borderRadius: 100,
    borderWidth: .5,
    elevation: 10,
  },

  // Menu Modal 
  modalBG:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  menuModal:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height:"80%",
    width:"80%",
    backgroundColor: "#fff",
  },
  menu:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "85%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1.5,
  },

  // Home
  // Header
  header:{
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderBottomWidth: 1.5,
    alignItems: 'center',
    width: "100%",
    borderBottomColor: "black",
  },
  title:{
    fontFamily: 'Roboto',
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  subtitle:{
    borderRadius: 5,
    borderWidth: .5,
    fontSize: 14,
    paddingHorizontal: 20,
    color: "white",
    backgroundColor: "#f57b42",
  },
  // Body
  bodyContainer:{
    width: "100%",
    height: "85%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  description:{
    padding: 5,
    margin: 10,
    lineHeight: 25,
  },
  box:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "44%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2.5,
  },
  image:{
    flex: 1,
    justifyContent: "center"
  },
  // Home end

  // AllRecipe
  recipeList:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "85%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1.5,
  }



});
