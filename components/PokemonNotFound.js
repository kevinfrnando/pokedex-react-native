import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


const PokemonNotFound = ( { message } ) =>{

    return (
        <View>
            <View  style={ styles.imageContainer }>
                <Text style = { styles.notFoundText }>{ message }</Text>
                <Image 
                    style={ styles.pokemonNotFound }
                    source={ message != '' ? require('../assets/img/not-found.gif') : null }
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
     
    imageContainer :{
        marginTop: 25,
        width : 400,
        display : "flex",
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundText  : {
        marginTop : 50, 
        fontSize : 40,
        fontWeight : 'bold'
    },
    pokemonNotFound : {
        height : 300,
        width : 300,
        resizeMode : 'contain'
    },
});

export default PokemonNotFound;