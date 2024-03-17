import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ListEvents from './ListEvents';


export default function DashBord() {
  return (
    <View style={styles.TopLevelContainor}>
        <Text style={styles.Heading}>Ongoing Events</Text>
        <View>
          <ScrollView style={styles.Scroll}>
              <ListEvents name={'Varnem'} shedule={'Completed'} discription={'Color the World'} startDate={'21/03/2024'} endDate={'23/03/2024'} date={''} image={require('/home/ravi/ReactNative/event/assets/varnam.jpg')}/>
              <ListEvents name={'Onum'} shedule={'Completed'} discription={'ഹാപ്പി ഓണം ലൈവ് ദ ലൈഫ് ജോലി'} startDate={''} endDate={''} date={'23/07/2024'} image={require('/home/ravi/ReactNative/event/assets/Onum.jpeg')}/>
              <ListEvents name={'Diwali'} shedule={'Completed'} discription={'இனிய தீபாவளி வாழ்த்துக்கள்'} startDate={'21/03/2024'} endDate={'23/03/2024'} date={''} image={require('/home/ravi/ReactNative/event/assets/diwali.jpg')}/>
          </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    TopLevelContainor: {
      height: '750',
      width: 'auto',
      backgroundColor:'white',
      borderRadius:10,
    },
    Contanor_1:{
        width: 390,
        height: 730,
        marginTop:150,
        // marginLeft:10,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        elevation: 3,
    },
    Heading: {
        fontSize: 25,
        // padding:2,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color:'#aaa',
        marginLeft: 20,
    },
    Scroll:{
      height:700,
      borderRadius: 10,
    },
});