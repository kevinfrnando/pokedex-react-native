import React, { useEffect } from "react";
import { View, Text,SafeAreaView , FlatList , StyleSheet } from "react-native";
import { getCapitalized } from "../helpers/helper";


const Moves = ( { moves } ) =>{


    const Item = ({ movement }) => (
        <View style={ styles.item }>
            <Text style={ styles.itemTitle }>{movement}</Text>
        </View>
    );

    const renderItem = ({ item  }) => (
        <Item movement={ getCapitalized( item.move.name ) } />
    );
    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ moves }
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        width : '90%',
        height : '90%',
    },
    itemTitle : {
        margin : 5,
        fontSize : 25,
    }

});

export default Moves;