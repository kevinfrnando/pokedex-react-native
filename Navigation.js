import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from '@react-navigation/native'
import HomeScreen from "./screens/HomeScreen.js";
import PokemonScreen from "./screens/PokemonScreen.js";
import ListScreen from "./screens/ListScreen.js";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator 
            initialRouteName="Search"
            screenOptions={
                { tabBarActiveTintColor: 'purple' , headerShown: false}
            }> 
            <Tab.Screen 
                name="Search" 
                component={ PokemonScreen }
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

export default function Navigation (){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
};