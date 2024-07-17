import React from "react";
import { Image,View,StyleSheet } from "react-native";

export default function Logo(){
return(
    <View>
    <Image style={styles.logo} source={require('./assets/lucachat.png')}  />
    </View>
);
}

const styles = StyleSheet.create({
    logo:{
        resizeMode:'cover' ,
        width: 350,
        height: 150,
     }
});