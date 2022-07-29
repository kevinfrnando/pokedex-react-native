import React, { useEffect } from "react";
import { View, Text,SafeAreaView , FlatList , StyleSheet } from "react-native";
import { getCapitalized } from "../helpers/helper";


const Stats = ( { stats } ) =>{

    const Item = ({ stat, base }) => (
        <View style={ styles.item }>
            <Text style={ styles.bold }>{stat}:</Text>
            <Text style={ styles.itemTitle }>{base}</Text>
        </View>
    );

    const renderItem = ({ item  }) => (
        <Item 
            stat={ getCapitalized( item.stat.name ) }  
            base={ item.base_stat}
            />
    );
    return (
        <SafeAreaView style={ styles.container }>
            <FlatList style={ styles.itemContainer }
                data={ stats }
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
    bold : {
        margin : 5,
        fontSize : 20,
        fontWeight : 'bold'
    },
    item : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center'
    },  
    itemTitle : {
        margin : 5,
        fontSize : 20,
    }

});

export default Stats;