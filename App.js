import React from "react";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { Audio } from 'expo-av';


const App = () =>{
  const [sound, setSound] = useState();

    async function playSound()  {
        const { sound } = await Audio.Sound.createAsync(
           require('./assets/audio/sound.mp3')
        );
        setSound( sound );
        await sound.playAsync(); 
    }
    useEffect( ()=>{
        setTimeout( ()=> {
            playSound();
        }, 4500)
    }, []);

  return (
    <Navigation/>  
  )
      
};

export default App;