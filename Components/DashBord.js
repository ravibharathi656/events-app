import { View, Text, StyleSheet, Systrace } from 'react-native'
import React from 'react'

export default function DashBord() {
  return (
    <View style={styles.TopLevelContainor}>
      <View style={styles.Contanor_1}>
        <Text style={styles.Heading}>Ongoing Events</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    TopLevelContainor: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor:'#2e5bcd',
    },
    Contanor_1:{
        width: 390,
        height: 730,
        marginTop:150,
        marginLeft:10,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        elevation: 3,
    },
    Heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color:'#aaa',
        marginLeft: 10,
    },
});