import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0cdbd',
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
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle:{
    padding: 3,
    borderRadius: 5,
    borderWidth: .9,
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
    textAlign:'center',
    fontSize: 16,
    padding: 2,
    marginBottom: 25,
    margin: 10,
    lineHeight: 25,
    color:'black',
  },
  box:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "44%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  boxText:{
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    borderRadius: 10, 
    padding: 5,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },  
  image:{
    width: 144,
    height: 122,
    alignItems: 'center',
    justifyContent:'center',
  },
  // Home end

  // AllRecipe
  recipeList:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "45%",
    height: "11%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1.5,
  },

  //Recipe webpage
  recipeTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 22,
    margin: 5,
  },
  recipeImage:{
    width: "92%",
    height: 215,
    margin: 28,
  },
  recipeBody:{
    width: "92%",
    borderRadius: 18,
    paddingHorizontal: 25,
    color: "white",
    backgroundColor: "#f57b42",
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal: 30,
  },
  recipeArea:{
    marginVertical: 20,
    marginHorizontal: 30,
  },
  recipeAreaTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeAreaDetail:{
    display:'flex',
    flexDirection: 'column',
    alignContent: 'center',
    
    fontSize: 14,
  },
});
