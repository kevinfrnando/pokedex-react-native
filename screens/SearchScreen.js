import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet,TouchableOpacity, View, Keyboard } from "react-native";
import { FIND_POKEMON } from "../services/PokemonService";
import LoadingScreen from "./LoadingScreen";
import PokemonScreen from "./PokemonScreen";
import { FontAwesome } from '@expo/vector-icons';



const SearchScreen = ( { route } ) =>{
    

    const [ name, setName ] = useState( '' );
    const [ pokemon, setPokemon ] = useState( {} );
    const [ loading, setLoading ] = useState( false );
    const [ message, setMessage ] = useState( "" );

    const getPokemon = async ( find ) => {
        Keyboard.dismiss();
        setLoading( true );
        await FIND_POKEMON( find )
            .then( ( response ) => { 
                setPokemon( response.data );
                setMessage( response.message );
            })
            .catch( ( ) => { setPokemon( {} ); });
        setLoading( false );
    }

    useState( ()=>{
        getPokemon( route?.params?.name ?? '' );
    }, [route])
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
                <TouchableOpacity onPress={ () => getPokemon( name )}>
                    <View style={styles.searchButton}>
                        <FontAwesome name="search" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            { 
                loading ?
                <LoadingScreen/>
                :
                <PokemonScreen pokemon={ pokemon } message={ message }/>                  
            }
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container :{
        flex : 1,
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
    searchButton :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
        height: 40,
        padding: 5,
        borderRadius : '50%',
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth : 1
    }
});
export default SearchScreen;