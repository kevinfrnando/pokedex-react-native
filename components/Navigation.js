// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from '@react-navigation/native'
import HomeScreen from "../screens/HomeScreen.js";
import ListScreen from "../screens/ListScreen.js";
import { FontAwesome } from '@expo/vector-icons';
import SearchScreen from "../screens/SearchScreen.js";
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();




function MyTabs(){
    
    return(
        <Tab.Navigator 
            initialRouteName="Home"
            barStyle={{ backgroundColor: 'tomato' }}
            screenOptions={
                { tabBarActiveTintColor: 'purple' , headerShown: false, backgroundColor: 'black'}
            }> 
            <Tab.Screen 
                name="Search" 
                component={ SearchScreen }
                options={{
                    tabBarIcon : ( ) => (
                        <FontAwesome name="search" size={24} color="black" />
                    )
                }}/>
            <Tab.Screen 
                name="Home" 
                component={ HomeScreen }
                options={{
                    tabBarIcon : ( ) => (
                        <FontAwesome name="home" size={24} color="black" />
                    )
                }}/>
            <Tab.Screen 
                name="List" 
                component={ ListScreen }
                options={{
                    tabBarIcon : ( ) => (
                        <FontAwesome name="list" size={24} color="black" />
                    )
                }}/>
        </Tab.Navigator>
    )
};
const styles = StyleSheet.create({
    container: {  
        backgroundColor : '#fa0001'
    },
    containerLoading: {
        flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      backgroundColor : '#fa0001'
    }
}); 



export default function Navigation (){
    const [ loading, setLoading ] = useState( false );

    useEffect( ()=>{

        setLoading( true );
        setTimeout( ()=> {
            setLoading( false );
        }, 4500)
    }, []);
    return (
        <NavigationContainer>

            {
                loading 
                ?
                <View style={styles.containerLoading}>
                    <ImageBackground source={ require('../assets/splash.gif') } resizeMode="contain" style={styles.image} />
                </View>
                :
                <MyTabs/>
            }

        </NavigationContainer>
    )
};

