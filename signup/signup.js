import React from 'react';
import { Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import { useState } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import Logo from './Logo';
import { useNavigation } from '@react-navigation/native';


export default function SignUp() { 
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth= FIREBASE_AUTH;

  const handleRegister = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      Alert.alert('User registered!', `Welcome ${userCredential.user.email}`); 
      navigation.navigate('homescreen'); // Navigate to 'homescreen' after successful registration

    })
    
    .catch((error) => {
      Alert.alert('Registration Error', error.message);
    });

};

  return (
    <SafeAreaView style={styles.container}>

      <Logo/>
      <Image
      
      style={styles.imagedesign}
      source={{ uri: 'https://img.freepik.com/premium-vector/friends-meeting-cafe-bar_1016-1411.jpg' }}
      resizeMode={'cover'}

    />
      <Text
        style={styles.signupdesign}>Create an account
      </Text>

      
    
      <TextInput 
      style={styles.inputdesign} 
      keyboardType="email-address" 
      placeholder="Email"
      onChangeText = {(text) => setEmail(text)}
      value={email}

      >
      </TextInput>

      <TextInput
      style={styles.inputdesign}
      secureTextEntry
      placeholder="Password"
      onChangeText = {(text) => setPassword(text)}
      value={password}
      
      >
      </TextInput>

      <TouchableOpacity
      style={styles.signupbuttondesign}
      onPress={handleRegister}
      >
      
      <Text style={styles.signuptextdesign}>Sign up</Text>
      
      </TouchableOpacity>

      <Text style={styles.testdesign}></Text>


     

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

  paragraph: {
    margin: 24,
    borderRadius: 10,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#121711',
  },

  signupdesign: {

    marginTop: 60,
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#121711',
    marginBottom: 30,

  },
  imagedesign: {

    width: 375,
    height: 200,

  },

  inputdesign: {
    color:'#868686',
    borderWidth: 3,
    borderColor: '#868686',
    fontSize: 20,
    padding: 10,
    width: 350,
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 15,

  },

  signupbuttondesign: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 3,
    width: 350,
    height: 80,
    borderColor: '#153b68',
    backgroundColor: '#153b68',
    borderRadius: 30,

  },

  signuptextdesign: {
    color:'#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,

  },

  testdesign: {

    backgroundColor: '#ffffff',
    width: 100,
    height: 100,

  }


});
