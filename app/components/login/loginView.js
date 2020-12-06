import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../login/loginStyles';

const LoginView = (props) => {
  console.log("props", props);
  const { getUserInfo } = props;
  // navigation.navigate('Login')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUserInfo("hola");
  }, [getUserInfo]);

  const handleSubmitLogin = () => {
    // if (email && password) {
    //   props.navigation.navigate('Map');
    //   snackbar
    // } else {
    //   snackbar
    // }
    props.navigation.navigate('client')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MY APP</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="PAssword..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmitLogin()} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export { LoginView };