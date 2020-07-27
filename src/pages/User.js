import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native';

export default function User({navigation}){

    useEffect(() =>  { 
       AsyncStorage.getItem('id').then(storagedId => {
           const id = storagedId;
       })
    },[]);

    async function handleSubmit(){
        navigation.navigate('Index')
    }

    return (
    <SafeAreaView style ={styles.container}>
        <Image style = {styles.image} source = {require('../../assets/logo-faccar.png')}/>
        <Text style= {styles.title}>Lista de Usuario</Text>
        <TouchableOpacity> 
            <Text>Adicionar Novo Usuário</Text>
        </TouchableOpacity>
        <View>
            <Text style = {styles.text} onPress = {handleSubmit} >voltar</Text>
        </View>
    </SafeAreaView >
)};

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    image: {
      height: 150 ,
      marginTop: 30,
      alignSelf: "center",
      resizeMode:"contain"
    },
    title:{
      fontSize: 26,
      paddingLeft: 10,
      marginTop: 15,
    },
    text:{
      color:"#000"
    }
});