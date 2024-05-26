import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Unmount() {
    const [show, setShow] = useState(true);

    return (
      <View>
        <Text style={{ fontSize: 20 }}>Show/Hide Component</Text>
        <Button title='Del User' onPress={() => {
          setShow(false);
        }} />
        {
          show == true ? <User /> : null
        }
      </View>
    )
  }
  const User = () => {
    let timer = setInterval(()=>{
        console.warn("Timer Running");
    },1000)

    useEffect(()=>{
        return ()=> {
            clearInterval(timer)
        }
    })
    return (
      <View>
        <Text>Hello I am Child User</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({})