import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';

export default function App() {
  return (
    <View>
      <View style={styles.LoginContainor}>
        {/* <Login/> */}
        <CreateAccount/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginContainor:{
    backgroundColor:'#2e5bcd',
    height:'100%',
    alignItems:'center',
    width:'100%'
  }
});
