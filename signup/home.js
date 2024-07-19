import React from "react";
import { Image,View,StyleSheet } from "react-native";

export default function Home(){
return(
    <View>
    <Image style={styles.logo} source={require('./assets/home.png')}  />
    </View>
);
}

const styles = StyleSheet.create({
    logo:{
        resizeMode:'cover' ,
        width: 100,
        height: 100,
        
     }
});