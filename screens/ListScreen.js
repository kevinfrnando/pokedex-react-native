import React , { useEffect, useState }from "react";
import { SafeAreaView, View, FlatList,  Text, StyleSheet, StatusBar, Image, Button, Alert, TouchableHighlight} from 'react-native';
import { getCapitalized, getId } from "../helpers/helper";
import { GET_POKEMONS } from "../services/PokemonService";
import { MaterialIcons } from '@expo/vector-icons';

const ListScreen = () =>{

    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const [ pokemons, setPokemons ] = useState( [{}] );
    const [ previous, setPrevious ] = useState("");
    const [ next, setNext ] = useState("");


    useEffect( () => {
        getPokemons(); 
    }, []);

    const getPokemons = async ( pagination ) => {
        const response = await GET_POKEMONS( pagination );
        setPokemons( response.results );
        setPrevious( response.previous );
        setNext( response.next );
    }


    const Item = ({ title, url }) => (
        <View style={styles.item}>
            <Image style={styles.tinyLogo} source={{
                uri: `${imageUrl}${ getId(url) }.png`,
            }}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item  }) => (
        <Item title={ getCapitalized( item.name ) } url={ item.url }/>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ pokemons }
                renderItem={renderItem}
                keyExtractor={item => getId( item.url )}
            />
            <View style={styles.buttonsContainer}>
                <TouchableHighlight onPress={ () => getPokemons( previous )}>
                    <View style={styles.button}>
                        <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={ () => getPokemons( next )}>
                    <View style={styles.button}>
                    <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex : 1,
        flexDirection : 'row',
        height: 60,
        backgroundColor: 'gray',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    tinyLogo: {
        width: '20%',
        height: 50,
    },
    title: {
        fontSize: 32,
        width: '80%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        borderRadius : '50%',
        backgroundColor:'red',
        padding: 10,
        margin: 20
    }
});

export default ListScreen;