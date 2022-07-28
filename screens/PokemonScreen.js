import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from "react-native";
import { FIND_POKEMON } from "../services/PokemonService";




const PokemonScreen = () =>{

    const [ name, setName ] = useState( "" );
    const [ pokemon, setPokemon ] = useState( {} );

    const getPokemon = async (  ) => {
        const response = await FIND_POKEMON( name );
        setPokemon( response );
    }

    return (
        <SafeAreaView style={ styles.container}>
            <View style={ styles.searchInputs}>
                <TextInput
                    style={styles.searchInput}
                    value={name}
                    keyboardType='default'
                    onChangeText={ setName }
                    placeholder=" Type a pokemon "
                />
                <TouchableHighlight onPress={getPokemon }>
                    <View style={styles.seacrhButton}>
                        <Text>Search</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View  style={ styles.imageContainer }>
                <Image 
                    style={ styles.pokemonImage }
                    source={{  uri: pokemon.sprites.other.home.front_default }}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container :{
        height : '100%',
        backgroundColor : 'red',
    },  
    searchInputs :{
        display: 'flex',
        flexDirection : 'row',
    },

    searchInput: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    seacrhButton :{
        backgroundColor: 'blue',
        margin: 12,
        height: 40
    },
    imageContainer :{
        width : 400,
    },
    pokemonImage :{
        borderRadius: '100%',
        backgroundColor: 'grey',
        height : 300,
        width : '80%', 
        resizeMode: 'contain'
    }
});
export default PokemonScreen;