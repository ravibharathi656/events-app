import React ,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const NewRegistrationEventListener = () => {
    alert('New registration');
  }
  
  const ValidateEmail = () => {
    if (email.length === 0) {
      setEmailError('Please enter an email address');
    } else if (email.indexOf('@') === -1) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  const ValidatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          placeholderTextColor="#aaa"
          onChangeText={(val) => setEmail(val)}
          onChange={ValidateEmail}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          onChangeText={(val) => setPassword(val)}
          onChange={ValidatePassword}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.lineStyle} >
        </View>
        <TouchableOpacity >
          <Text style={styles.linkText}>Create an Account</Text>
        </TouchableOpacity>
        {/* <Text>email:{password}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    height: 'auto',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    marginBottom: 20,
    color:'black',
    marginLeft: 60,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#2e5bcd',
    width: '100%',
    padding: 10,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'semibold',
  },
  lineStyle:{
    width: '100%',
    height: 1,
    backgroundColor: "#aaa",
    marginTop:12,
    borderRadius:40
  },
  linkText:{
    marginTop:10,
    color: '#2e5bcd',
    textDecorationLine: 'underline',
    marginLeft: 70,

  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    marginLeft: 10,
    fontSize:12,
  },
});
