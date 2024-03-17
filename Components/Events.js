import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Animated } from 'react-native';
import DashBord from './DashBord';
import ListEvents from './ListEvents';
import SideBar from './SideBar';


const source = require('/home/ravi/ReactNative/event/assets/list-ul-svgrepo-com.png');

const EventsScreen = ({ navigation }) => {
    

    return (
        <View style={styles.MainContainer}>
            <View style={styles.HeaderContainer}>
                <View style={styles.ListContainer}>
                    <TouchableOpacity>
                        <Image source={source} style={styles.ImageContainer} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NamingContainer}>
                    <Text style={styles.TextContainer}>Events</Text>
                </View>
            </View>
            <View style={styles.ContentContainer}>
                <DashBord />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#2e5bcd',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    HeaderContainer: {
        height: 50,
        width: 370,
        backgroundColor: 'white',
        marginTop: 60,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    ListContainer: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageContainer: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    NamingContainer: {
        height: '100%',
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    TextContainer: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#aaa',
        fontSize: 20,
        marginLeft: 90,
        marginTop: 13,
    },
    ContentContainer: {
        height: 750,
        width: 370,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
    },
});

export default EventsScreen;
