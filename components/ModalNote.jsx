import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ModalNote({show, text}) {
    return (
        <Modal transparent={true} animationType='fade' visible={show}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00000088'}}>
                <View style={styles.dialogBox}>
                    <View style={styles.dialogBoxContainer}>
                        <Text style={{ color: 'black', fontSize:20}}>{text}</Text>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    dialogBox: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        elevation:2,
        
    },
    dialogBoxContainer:{
        margin:50 
    }

})