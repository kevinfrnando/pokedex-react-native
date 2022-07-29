import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";


const LoadingScreen = () =>{

    return (
        <View style={ styles.loadingContainer }>
            <Image style={ styles.loadingImage } source={ require('../assets/img/loading.gif')}/>
            <Text style={ styles.loadingText }>Loading...</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    loadingContainer :{
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingImage: {
        height: 250,
        width: 250,
    },
    loadingText:{
        marginTop: -55,
        color: 'white'
    }
});

export default LoadingScreen;