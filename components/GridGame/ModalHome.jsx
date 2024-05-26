import { Modal, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ModalHome({ show, text, nav }) {
    return (
        <Modal transparent={true} animationType='fade' visible={show}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00000088' }}>
                <View style={styles.dialogBox}>
                    <View style={styles.dialogBoxContainer}>
                        <Text style={{ color: 'black', fontSize: 25 }}>{text}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            nav("Home")
                        }}
                    >
                        <Text style={styles.homeButton}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    dialogBox: {
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,

    },
    dialogBoxContainer: {
        margin: 50
    },
    homeButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'monospace',
        paddingTop:8,
        backgroundColor: '#FFAA00',
        borderRadius:50,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        margin:10,
        marginBottom:30
      }

})