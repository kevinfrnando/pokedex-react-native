import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-navigation";
import { getCapitalized } from "../helpers/helper";
import ModalScreen from "../screens/ModalScreen";

const PokemonDetails = ( { pokemon } ) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const [ modalContent, setModalContent ] = useState( "" );
    return (
        <SafeAreaView style={ { flex: 1 } }>
            {
                pokemon.name != null ?
                <SafeAreaView style={ { flex: 1 } }>
                    <View  style={ styles.imageContainer }>
                        <Image 
                            style={ styles.pokemonImage }
                            source={{  uri: pokemon.sprites != null ? pokemon.sprites.other.home.front_default : ''}}
                        />
                        <Text style={ styles.pokemonId }>#{ pokemon.id }</Text>
                        <Text style={ styles.pokemonName }>{ getCapitalized( pokemon.name ) }</Text>
                    </View>
                    <View style={ styles.pokemonDescription }>
                        <View>
                            <Text style={ styles.titleBold }>Base Experience: </Text>
                            <Text style={ styles.titleBold }>Height: </Text>
                            <Text style={ styles.titleBold }>Weight: </Text>
                        </View>
                        <View>
                            <Text style={ styles.titleDescription }> { pokemon.base_experience} </Text>
                            <Text style={ styles.titleDescription }> { pokemon.height}  </Text>
                            <Text style={ styles.titleDescription }> { pokemon.weight}  </Text>
                        </View>
                    </View>
                    <View style={ styles.pokemonButtons }>
                        <TouchableHighlight onPress={() => { setModalContent('moves'); setModalVisible(true)} }>
                            <View style={styles.pokemonButton}>
                                <Image style={styles.pokemonImageButton}
                                source={ require('../assets/img/moves.png')}/>
                                <Text style={styles.buttonTitle}>Moves</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { setModalContent('stats'); setModalVisible(true)} }>
                            <View style={styles.pokemonButton}>
                                <Image style={styles.pokemonImageButton}
                                source={ require('../assets/img/stats.png')}/>
                                <Text style={styles.buttonTitle}>Stats</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <ModalScreen 
                        pokemon={ pokemon }
                        modalVisible= { modalVisible} 
                        setModalVisible={ setModalVisible } 
                        modalContent = { modalContent }/>
                </SafeAreaView>
                :
                <View>

                </View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({  
    imageContainer :{
        flex : 3,
        marginTop: 25,
        width : 400,
        display : "flex",
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokemonImage :{
        flex: 3,
        borderRadius : 100,
        backgroundColor: 'rgba(35, 36, 38, 0.5)',
        height : 200,
        width : 200, 
        resizeMode: 'cover'
    },
    pokemonId :{
        flex : 1,
        marginTop : 25,
        textAlign: 'center',
        fontSize : 25,
        fontWeight : 'bold'
    },
    pokemonName :{
        flex : 2,
        textAlign: 'center',
        fontSize : 50,
        fontWeight : 'bold'
    },
    pokemonDescription:{
        flex : 2,
        margin : 15,
        borderRadius : '25p',
        display : 'flex',
        flexDirection : 'row',
        padding : 30,
        backgroundColor: 'rgba(35, 36, 38, 0.4)',
    },
    titleBold : {
        textAlign : 'right',
        fontSize : 25,
        fontWeight : 'bold'
    },
    titleDescription:{
        fontSize : 25,
    },
    
    pokemonButton : {
        display : 'flex',
        alignItems : 'center',
        borderRadius : 15,
        borderWidth : 1,
        borderStyle : 'solid',
    },
    pokemonButtons : {
        flex : 1,
        marginTop : 15,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    pokemonImageButton : {
        borderColor : '#000000',
        height :70,
        width : 70
    },
    buttonTitle : {
        marginTop : 4,
        fontSize : 20,
        fontWeight : 'bold'
    }
});

export default PokemonDetails;