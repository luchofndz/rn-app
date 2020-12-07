import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../login/loginStyles';
import AsyncStorage from '@react-native-community/async-storage';

const LogoutView = (props) => {
  const { setUserInfo } = props;

  const handleLogout = () => {
    AsyncStorage.clear();
    props.navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <Text >Are you sure to quit?</Text>
      <TouchableOpacity onPress={() => handleLogout()} >
        <Text >Exit</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text >Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export { LogoutView };