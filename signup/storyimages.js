import React from "react";
import { View, StyleSheet, Image } from "react-native";
export default function Stories(){
    return(
        <View>

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
        </View>
    );
}


const styles = StyleSheet.create({
   


    storydesign: {

        height: 200,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 20,

    },

});