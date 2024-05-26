import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Radio({name, id, prev, setPrev}) {
  return (
    <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin:20 }}>
        <TouchableOpacity style={styles.radioButtonOut} onPress={() => {
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
          <View style={[styles.radioButtonIn, { backgroundColor: prev == id ? 'grey' : 'transparent' }]} />
        </TouchableOpacity>
      </View>
      <Text style={styles.radioText}>{name.length >= 15 ? (name.substring(0, 12) + "...") : name.substring(0, 15)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  radioText: {
    fontSize: 15,
    flex: 4,
    color: 'white',
    fontFamily:'monospace'
  },
  radioButtonOut: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIn: {
    height: 15,
    width: 15,
    borderRadius: 50,
  }
})