import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WebView} from'react-native-webview'

export default function WebViewComp() {
  return (
    <WebView source={{uri: 'https://www.google.com'}}></WebView>
  )
}

const styles = StyleSheet.create({})