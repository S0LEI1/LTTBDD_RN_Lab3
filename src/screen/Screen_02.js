import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "../style/Screen_02_style";
import label from "../style/label";
import { TouchableOpacity } from "react-native-web";

const Screen_02 = ({navigation, route}) => {
  const [img, setImg] = useState(require("../../assets/vs_blue.png"));
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={img} resizeMode="stretch" />
        <Text style={[label.text1, {marginTop:20, marginHorizontal:20}]}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={styles.selectWrapper}>
        <Text style={[label.text5,{marginVertical:20, marginLeft:10}]}>Chọn một màu bên dưới:</Text>
        <View style={styles.select}>
            <TouchableOpacity onPress={()=> setImg(require('../../assets/vs_silver.png'))} style={[styles.button, {backgroundColor:'#C5F1FB'}]} />
            <TouchableOpacity onPress={()=> setImg(require('../../assets/vs_red.png'))} style={[styles.button,{backgroundColor:'#F30D0D'}]} />
            <TouchableOpacity onPress={()=> setImg(require('../../assets/vs_black.png'))} style={[styles.button,{backgroundColor:'#000000'} ]} />
            <TouchableOpacity onPress={()=> setImg(require('../../assets/vs_blue.png'))} style={[styles.button,{backgroundColor:'#234896'}]} />
        </View>
        <TouchableOpacity style={styles.button2}
           onPress={() => {
            navigation.navigate({
              name: 'Home',
              params: { post: img },
              merge: true,
            });
          }}
        >
            <Text style={[label.text4, {color:'#fff'}]}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen_02;
