import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './logoutStyles';
import AsyncStorage from '@react-native-community/async-storage';

const LogoutView = (props) => {
  const { setUserInfo, navigation } = props;

  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('login');
  };

  const handleOnCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to quit?</Text>
      <TouchableOpacity style={styles.btn} onPress={() => handleLogout()}>
        <Text style={styles.text}>Exit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handleOnCancel()}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export { LogoutView };