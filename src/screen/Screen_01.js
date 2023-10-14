import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../style/Screen_01_style";
import label from "../style/label";

const Screen_01 = ({ navigation, route }) => {
  const [img, setImg] = useState("");
  console.log(img);
  useEffect(() => {
    if (route.params?.post) {
      setImg(route.params.post);
      console.log(route.params.post);
    }
  }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {route.params?.post ? (
          <Image
            style={styles.img}
            source={route.params?.post}
            resizeMode="stretch"
          />
        ) : (
          <Image
            style={styles.img}
            source={require("../../assets/vs_blue.png")}
            resizeMode="stretch"
          />
        )}
      </View>
      {/*  */}
      <Text style={[label.text1, { marginBottom: 10 }]}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      {/* Star Rating */}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.starWrapper}>
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.star}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.star}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.star}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.star}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.star}
          />
        </View>
        <Text style={label.text1}>(Xem 828 đánh giá)</Text>
      </View>
      {/* Price */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Text style={[label.text2]}>1.790.000 đ</Text>
        <Text style={[label.text1, styles.text2]}>1.790.000 đ</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[label.text3, { color: "#FA0000" }]}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={styles.img2}
          source={require("../../assets/chamhoi.png")}
          resizeMode="stretch"
        />
      </View>
      {/* Selection */}
      <TouchableOpacity
        style={styles.selection}
        onPress={() => navigation.navigate("Selection")}
      >
        <Text style={[label.text1]}>4 MÀU-CHỌN MÀU</Text>
        <Image
          style={styles.img3}
          source={require("../../assets/Vector.png")}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={[label.text4, { color: "#F9F2F2" }]}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen_01;
