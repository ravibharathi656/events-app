import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SubEvents() {
  return (
    <View style={styles.MainContainor}>
        <View style={styles.EventContainor}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    MainContainor:{
        height:'100%',
        width:'100%',
        backgroundColor:'#2e5bcd',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    EventContainor:{},
});