import React from "react";
import { StyleSheet, View } from "react-native";
import PokemonDetails from "../components/PokemonDetails";
import PokemonNotFound from "../components/PokemonNotFound";



const PokemonScreen = ( { pokemon , message } ) =>{
    
    return (
        <View style={ styles.pokemonContainer }>
           {
                JSON.stringify( pokemon ) === '{}' ?
                    <PokemonNotFound message={ message }/>
                :
                    <PokemonDetails pokemon={ pokemon}/>
           }
        </View>
    )
}
const styles = StyleSheet.create({

    pokemonContainer :{
        flex : 10,
        width: '100%',
        display : "flex",
        flexDirection : 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
export default PokemonScreen;