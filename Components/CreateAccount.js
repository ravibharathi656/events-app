import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import React , {useState}from 'react'
export default function CreateAccount({ onClose }) {
    const [name, setName] = useState('');
    const [errorname, setErrorname] = useState('');
    const [password, setPassword] = useState('');
    const [errorpassword, setErrorpassword] = useState('');
    const [conformpassword, setConformpassword] = useState('');
    const [errorconformpassword, setErrorconformpassword] = useState('');
    const [CollegeName, setCollegeName] = useState('');
    const [errorCollegeName, setErrorCollegeName] = useState('');
    const [CollegeCode, setCollegeCode] = useState('');
    const [errorCollegeCode, setErrorCollegeCode] = useState('');

    const ValidateName = () => {
        if (name.length === 0) {
          setErrorname('Please enter the name');
        } else {
          setErrorname('');
        }
    }
    const handleClose = () => {
        onClose(false);
    };
    const validatePassword = () => {
        if (password.length < 7) {
          setErrorpassword('Password must be at least 8 characters');
        } else {
          setErrorpassword('');
        }
    }

    const validateConformPassword = () => {
        if (password!== conformpassword) {
          setErrorconformpassword('Passwords do not match');
        } else {
          setErrorconformpassword('');
        }
    }

    const ValidateCollageName = () => {
        if (CollegeName.length === 0) {
          setErrorCollegeName('Please enter College name');
        } else {
          setErrorCollegeName('');
        }
    }

    const ValidateCollageCode = () => {
        if (CollegeCode.length === 0) {
          setErrorCollegeCode('Please enter College code');
        } else if(CollegeCode.length < 3)  {
          setErrorCollegeCode('College code atleast have 4 digits');
        } else {
            setErrorCollegeCode('');
        }
    }

    const ValidateRegister = ()=> {
        if(name.length == 0) {
            setErrorname('Please enter the name');
        }else if(password.length == 0){
            setErrorpassword('Please eneter the password');
        }else if(conformpassword.length == 0){
            setErrorconformpassword('Please re-enter a password');
        }else if(password != conformpassword){
            setErrorconformpassword('Password Not match')
        }else if(CollegeName.length == 0){
            setErrorCollegeName('Please enter a College Name')
        }else if (CollegeCode.length === 0) {
            setErrorCollegeCode('Please enter College code');
        } else if(CollegeCode.length < 3)  {
            setErrorCollegeCode('College code atleast have 4 digits');
        }else{
            alert('Registered Successfully');
            handleClose();
        }
    }

    return (
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Create an Account!</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#aaa"
              onChangeText={(val) => setName(val)}
              onChange={ValidateName}
            />
            {errorname? <Text style={styles.errorText}>{errorname}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              onChangeText={(val) => setPassword(val)}
              onChange={validatePassword}
            />
            {errorpassword? <Text style={styles.errorText}>{errorpassword}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              onChangeText={(val) => setConformpassword(val)}
              onChange={validateConformPassword}
            />
            {errorconformpassword? <Text style={styles.errorText}>{errorconformpassword}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Enter College name"
              placeholderTextColor="#aaa"
              onChangeText={(val) => setCollegeName(val)}
              onChange={ValidateCollageName}
            />
            {errorCollegeName? <Text style={styles.errorText}>{errorCollegeName}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Enter College code"
              placeholderTextColor="#aaa"
              onChangeText={(val) => setCollegeCode(val)}
              onChange={ValidateCollageCode}
            />
            {errorCollegeCode? <Text style={styles.errorText}>{errorCollegeCode}</Text> : null}
            <TouchableOpacity style={styles.loginButton} onPress={ValidateRegister}>
              <Text style={styles.buttonText}>Register Account</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} >
            </View>
            <TouchableOpacity>
              <Text style={styles.linkText1}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.linkText2}>Alreday have an account? Login!</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // backgroundColor:'lightblue',
        height: 100,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center', 
        // marginTop: 320,
      },
      loginContainer: {
        width: '80%',
        height: 'auto',
        backgroundColor: '#f2f2f2',
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
        marginLeft: 40,
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
      select:{
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 20,
      },
      loginButton: {
        backgroundColor: '#2e5bcd',
        width: '100%',
        padding: 10,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
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
      linkText1:{
        marginTop:10,
        color: '#2e5bcd',
        textDecorationLine: 'underline',
        marginLeft:80
      },
      linkText2:{
        marginTop:10,
        color: '#2e5bcd',
        textDecorationLine: 'underline',
        marginLeft:35
      },
      errorText: {
        color: 'red',
        marginBottom: 5,
        marginLeft: 10,
        fontSize:12,
      },
    });