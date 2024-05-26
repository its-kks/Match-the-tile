import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Radio from './Radio'

export default function Home({navigation}) {
  const difficultyObj = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard'
  }

  let [currDiff, setCurr] = useState(-1);
  return (
    <View style={{ flex: 1 ,backgroundColor:'#505050'}}>
      <View style={{ flex: 3, alignItems: "center", justifyContent: 'flex-end' }}>
        <Text style={styles.gameTitle}>Tile Game</Text>
        <Text style={styles.note}>{currDiff == -1 ? "(select difficulty)" : "(all set)"}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {Object.keys(difficultyObj).map((key) => (
            <View key={key} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Radio name={difficultyObj[key]} id={key} prev={currDiff} setPrev={setCurr} />
            </View>
          ))}
        </View>
        <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity disabled={currDiff==-1} onPress={()=>{
            navigation.navigate("Game",{difficulty:difficultyObj[currDiff]})
          }}>
            <Text style={styles.startButton}>START</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gameTitle: {
    fontSize: 50,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  note: {
    fontSize: 15,
    fontFamily: 'monospace',
    color: '#ffffff55'
  },
  startButton: {
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
    margin:10
  }
})