import React from "react";
import { Text, TouchableOpacity,  ScrollView,SafeAreaView , StyleSheet, TextInput, Alert, FlatList} from 'react-native';
import {Image} from 'expo-image';
import Logo from "./Logo";
// import publishpost from "./understandpost";
import { useState } from 'react';




export default function homescreen () {

    const [post, setPost] = useState('');

    const alertPopup = () =>{
        Alert.alert("You posted:", post)
    }

    return (

        <SafeAreaView style={styles.container}>

            <Logo/>

            <Text
                style={styles.welcomedesign}>Welcome!
            </Text>

            {/* https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/line-1602152758.png */}


            <Image
            
            style={styles.linedesign}
            source= "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/line-1602152758.png"
            placeholder="line"
            contentFit="cover"
        
            >
            </Image>



            <Image
            
                style={styles.homedesign}
                source= "https://www.premiumsvg.com/wimg_thumb/product-free-svg-house-clipart.webp"
                placeholder="Home"
                contentFit="cover"
            
            >

            </Image>


            <TextInput

                style={styles.whatsonyourmind}
                placeholder="What's on your mind?"
                onChangeText = {(text) => setPost(text)}
                text={post}
                
            >

            </TextInput>

            <TouchableOpacity
            style={styles.postbuttondesign}
            onPress={alertPopup}
            >
                
            <Text style={styles.posttextdesign}>Post
            </Text>

            </TouchableOpacity>

            <Image
            
            style={styles.line2design}
            source= "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/line-1602152758.png"
            placeholder="line2"
            contentFit="cover"
        
            >
            </Image>



            <Image
            
                style={styles.storydesign}
                source= "https://i.pinimg.com/originals/0b/53/70/0b5370c200dba686f5e953deb8734e98.jpg"
                placeholder="story1"
                contentFit="cover"
        
            >
            </Image>

            <Image
            
                style={styles.storydesign}
                source= "https://i.pinimg.com/474x/b8/00/ed/b800ed532e7096a87ea129d17de6b74d.jpg"
                placeholder="story2"
                contentFit="cover"
        
            >
            </Image>

        </ SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        fontSize: 20,
        justifyContent: 'center',

      },
      scrollView: {
        flexGrow: 1,
       
      },

    welcomedesign: {

        fontSize: 30,

    },

      
    imagedesign: {

        width: 375,
        height: 200,
    
    },

    linedesign: {

        marginTop: 40,
        width: 450,
        height: 7,

    },

    homedesign: {

        marginTop: 30,
        width: 50,
        height: 50,
        color: '#1a78e3',


    },

    whatsonyourmind: {

        fontSize: 20,
        color: '#1f1f1f',
        width: 275,
        height: 50,
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: '#868686',

        marginTop: 20,
        marginBottom: 0,

    },

    postbuttondesign: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 80,
        height: 50,
        padding: 5,
        backgroundColor: '#1a78e3',
        borderRadius: 5,

    },

    posttextdesign: {

        fontSize: 20,
        color: '#ffffff',
        justifyContent: 'center',
        textAlign: 'center',

    },

    line2design: {

        marginTop: 40,
        width: 300,
        height: 7

    },

    whitebackground: {

        height: 500,
        width: 200,
        backgroundColor: '#ffffff',

    },

    storydesign: {

        height: 200,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 20,

    },

});