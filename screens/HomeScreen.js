import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";


const HomeScreen = () =>{

    return (
        <View style={styles.container}>
            <ImageBackground source={ require('../assets/img/background.jpg') } resizeMode="cover" style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    }
});

export default HomeScreen;