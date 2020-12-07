import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../login/loginStyles';

const LoginView = (props) => {
  console.log("props", props);
  const { getUserInfo, userData } = props;
  // navigation.navigate('Login')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userData) {
      props.navigation.navigate('client');
    }
  }, [userData]);

  const handleSubmitLogin = async () => {
    if (email && password) {
      await getUserInfo("data");
      props.navigation.navigate('client')
      // snackbar
    } else {
      // snackbar
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>APP NAME</Text>
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