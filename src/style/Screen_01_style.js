import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:30
  },
  wrapper: {
    marginTop: 20,
    width:windownWidth-60,
    height: 361,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
    
  },
  img: {
    width: 301,
    height: 361,
  },
  starWrapper: {
    flexDirection: "row",
    marginRight:50,
    marginBottom:15
  },
  star: {
    width: 23,
    height: 25,
  },
  text1:{
    marginRight:50
  },
  text2:{
    textDecorationLine:'line-through',
    marginLeft:45,
    color:'#000000'
  },
  img2:{
    width:20,
    height:20,
     marginLeft:5
  },
  selection:{
    width:332,
    height:34,
    borderWidth:1,
    borderColor:'#000000',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    flexDirection:'row'
  },
  img3:{
    width:12,
    height:14,
    position:'absolute',
    right:10
  },
  button:{
    width:326,
    height:44,
    borderWidth:1,
    backgroundColor:'#CA1536',
    justifyContent:'center',
    alignItems:'center',
    marginTop:90,
    borderRadius:10
  }
});
export default styles;
