import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function ShowHide() {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Show/Hide Component</Text>
      <Button title='Hide User' onPress={() => {
        setShow(false); 
      }} disabled={!show}/>
      <Button title='Show User' onPress={() => {
        setShow(true);
      }} disabled={show}/>
      <Button title='Toggle User' onPress={() => {
        setShow(!show);
      }} />
      {
        show == true ? <User /> : <></>
      }
    </View>
  )
}
const User = () => {

  return (
    <View>
      <Text>Hello I am Child User</Text>
    </View>
  )
}
const styles = StyleSheet.create({})