import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ListEvents({name,shedule,discription,startDate,endDate,date,image}) {


  return (
    <TouchableOpacity>
      <View style={styles.MainCotainor}>
        <View style={styles.ImageContainor}>
          <Image style={styles.Images} source={image}></Image>
        </View>
        <View style={styles.Containor1}>
          <View style={styles.Containor2}>
            <Text style={styles.Name1}>{name}</Text>
          </View>
          <View style={styles.Containor3}>
            <Text style={styles.Name2}>{shedule}</Text>
          </View>
        </View>
        <View style={styles.DiscriptionContainor}>
          <Text style={{fontWeight:'bold',marginLeft:25,fontSize:12,}}>Discription : </Text>
          <Text style={{fontWeight:'semibold',marginLeft:10,fontSize:12,width:'100%',height:'100%'}}>{discription}</Text>
        </View>
        <View style={styles.DateContainor}>
          {
            date ?
            <View style={styles.DateAllocteContainor}>
              <Text style={{fontWeight:'bold',marginLeft:25,fontSize:12,}}>Date : </Text>
              <Text style={{fontWeight:'semibold',marginLeft:10,fontSize:12,width:'100%',height:'100%'}}>{date}</Text>
            </View>
            :
            null
          }
          {
            startDate ?
            <View style={styles.DateAllocteContainor}>
              <Text style={{fontWeight:'bold',marginLeft:25,fontSize:12,}}>Start-date : </Text>
              <Text style={{fontWeight:'semibold',marginLeft:10,fontSize:12,width:'100%',height:'100%'}}>{startDate}</Text>
            </View>
            :
            null
          }
          {
            endDate ?
            <View style={styles.DateAllocteContainor}>
              <Text style={{fontWeight:'bold',marginLeft:25,fontSize:12,}}>End-date : </Text>
              <Text style={{fontWeight:'semibold',marginLeft:10,fontSize:12,width:'100%',height:'100%'}}>{endDate}</Text>
            </View>
            :
            null
          }
        </View>
        <Text style={styles.DetailText}>Click To Know More About This...</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    MainCotainor: {
      boxShadow:true,
      shadowColor: 'black', 
      shadowOpacity: 0.5, 
      shadowRadius: 5, 
      shadowOffset: { width: 0, height: 2 },  
      elevation: 5,
      width:350,
      marginTop:10,
      height:270,
      backgroundColor:'white',
      borderRadius:10,
      marginLeft:10,
    },
    ImageContainor: {
        height:100,
        width:350,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Images:{
      height:80,
      width:180,
      borderRadius:10,
    },
    Containor1:{
        height:40,
        width:350,
        backgroundColor:'white',
        borderRadius:10,
        borderColor:'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    Containor2: {
        // textAlign: 'center',
        borderRadius:10,
        height:'100%',
        width:200,
        backgroundColor: 'white',
    },
    Containor3: {
        textAlign: 'center',
        borderRadius:10,
        height:'100%',
        width:100,
        backgroundColor: 'white',
    },
    Name1:{
        // textAlign: 'center',
        marginLeft:10,
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
        height:'100%',
        width:185,
    },
    Name2:{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'semibold',
        marginLeft: 20,
        color: 'green',
    },
    DiscriptionContainor: {
      height: 40,
      width:350,
      backgroundColor:'white',
      borderRadius:10,
      display: 'flex',
      flexDirection: 'row',
    },
    DateContainor:{
      height: 60,
      width:350,
      backgroundColor:'white',
      borderRadius:10,
    },
    DateAllocteContainor:{
      height: 20,
      width:350,
      backgroundColor:'white',
      borderRadius:1,
      display: 'flex',
      flexDirection: 'row',
    },
    DetailText:{
      fontFamily:'Helvetica',
      fontSize:'12px',
      color:'blue',
      fontWeight:'semibold',
      marginLeft:25,
      marginTop:5,
    },
});