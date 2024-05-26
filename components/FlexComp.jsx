import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexComp() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 2, backgroundColor: 'blue' , flexDirection:'row'}}>
        <View style={{ flex: 2, backgroundColor: 'orange' , margin:10}}/>
        <View style={{ flex: 1, backgroundColor: 'orange' , margin:10}}/>
        <View style={{ flex: 1, backgroundColor: 'orange' , margin:10}}/>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }} />
      <View style={{ flex: 1, backgroundColor: 'red' }} />
    </View>
  )
}

const styles = StyleSheet.create({})