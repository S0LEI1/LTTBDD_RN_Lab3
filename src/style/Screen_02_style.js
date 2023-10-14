import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const windownWidth = Dimensions.get("window").width;
const windownHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgWrapper: {
    width: windownWidth,
    height: 0.2 * windownHeight,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  img: {
    width: 112,
    height: 132,
   

  },
  selectWrapper: {
    width: windownWidth,
    height: 0.8 * windownHeight,
    backgroundColor: "#C4C4C4",
  },
  select: {
    width: windownWidth,
    height: '60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  },
  button: {
    width: 85,
    height: 80,
    marginBottom: 10,
    backgroundColor:'red'
  },
  button2:{
    width:326,
    height:44,
    backgroundColor:'#1952E2',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    marginHorizontal:30
  }
});
export default styles;
