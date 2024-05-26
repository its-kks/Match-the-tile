import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Radio({name, id, prev, setPrev}) {
  return (
    <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.radioButtonOut} onPress={() => {
          console.warn(prev)
          if(prev == -1){
            setPrev(id)
          }
          else if(prev==id){
            setPrev(-1)
          }
          else{
            setPrev(id)
          }
        }}>
          <View style={[styles.radioButtonIn, { backgroundColor: prev == id ? 'red' : 'transparent' }]} />
        </TouchableOpacity>
      </View>
      <Text style={styles.radioText}>{name.length >= 15 ? (name.substring(0, 12) + "...") : name.substring(0, 15)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  radioText: {
    fontSize: 25,
    flex: 4,
    color: 'white'
  },
  radioButtonOut: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButtonIn: {
    height: 20,
    width: 20,
    borderRadius: 50,
  }
})