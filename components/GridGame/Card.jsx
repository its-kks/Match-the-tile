import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Card({ gameControl, id, setGameControl, changes, updateChange,
  increaseMatchTwo, textSize, heightBox, widthBox }) {

  return (
    <TouchableOpacity
      style={[styles.box, {
        backgroundColor: gameControl[id].disable ? '#00000000' : 'grey',
        height:heightBox,
        width:widthBox
      }]}
      onPress={() => {
        let curr = { ...gameControl }
        let changeNow = changes;

        if (gameControl[id].show) {
          changeNow -= 1
        }
        else {
          changeNow += 1
        }
        if (changeNow == 2) {
          changeNow -= 1
          // two are shown now
          let child = curr[id].child
          if (curr[child].show) {
            // match detected
            curr[id].disable = true;
            curr[child].disable = true;
            increaseMatchTwo()
          }
          else {
            // match not found hide disabled
            for (let key in curr) {
              if (curr[key].show && !curr[key].disable) {
                curr[key].show = false;
              }
            }
          }
        }
        curr[id].show = !curr[id].show
        setGameControl(curr)
        updateChange(changeNow)
      }}
      disabled={gameControl[id].disable}
    >

      <Text style={{ textAlign: 'center', color: 'white', fontSize:textSize }} >{gameControl[id].show ? gameControl[id].name : ''}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
  {
    box: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      padding: 10,
      borderRadius: 15,
    },
  }
)
