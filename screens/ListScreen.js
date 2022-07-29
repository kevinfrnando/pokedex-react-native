import React , { useEffect, useState }from "react";
import { SafeAreaView, View, FlatList,  Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import { getCapitalized, getId } from "../helpers/helper";
import { GET_POKEMONS } from "../services/PokemonService";
import LoadingScreen from "./LoadingScreen";
import { AntDesign } from '@expo/vector-icons';

const ListScreen = ( { navigation } ) =>{

    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const [ pokemons, setPokemons ] = useState( [] );
    const [ previous, setPrevious ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ next, setNext ] = useState("");
    const [ loading, setLoading ] = useState( false );


    useEffect( () => {
        getPokemons(); 
    }, []);

    const getPokemons = async ( nextPrevious ) => {
        setLoading( true );
        const response = await GET_POKEMONS( nextPrevious );
        setPokemons( response.data.results );
        setPrevious( response.data.previous );
        setNext( response.data.next );
        setMessage( response.data.message );
        setLoading( false );
    }


    const Item = ({ title, url }) => (
        <TouchableOpacity onPress={ () => navigation.navigate('Search', { name : title })}>
            <View style={styles.item} >
                <Image style={styles.tinyLogo} source={{
                    uri: `${imageUrl}${ getId(url) }.png`,
                }}/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
        
    ); 

    const renderItem = ({ item  }) => (
        <Item title={ getCapitalized( item.name ) } url={ item.url }/>
    );
    return (
        <SafeAreaView style={styles.container}>
            {
                loading 
                ?
                <View>
                    <LoadingScreen/>
                </View>
                :
                <View style={ { flex: 1 } }>
                    <FlatList                 
                        data={ pokemons }
                        renderItem={renderItem}
                        keyExtractor={item => getId( item.url )}>
                    </FlatList>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={ () => getPokemons( previous )}>
                            <View style={styles.button}>
                                <Text>
                                    <AntDesign name="caretleft" size={24} color="black" />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => getPokemons( next )}>
                            <View style={styles.button}>
                                <Text>
                                <AntDesign name="caretright" size={24} color="black" />
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor : 'red',
    },
    item: {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        height: 60,
        backgroundColor: 'rgba(35, 36, 38, 0.5)',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius : 10
    },
    tinyLogo: {
        width: 40,
        height: 50,
    },
    title: {
        fontWeight : 'bold',
        fontSize: 32,
        width: '80%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        borderRadius : 50,
        backgroundColor: 'rgba(35, 36, 38, 0.5)',
        padding: 10,
        margin: 20
    }
});

export default ListScreen;