import React from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import Moves from "../components/Moves";
import Stats from "../components/Stats";


const ModalScreen = ( {modalVisible, setModalVisible, modalContent, pokemon } ) =>{


    return (
        <View >
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {
                            modalContent === 'stats'
                            ?
                            <Stats stats={ pokemon.stats }/>
                            :
                            <Moves moves = { pokemon.moves } />
                        }
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
        height : 500,
        width : 250,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop : 20
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
  });
export default ModalScreen;