import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { userProfileImage } from '../../assets/images/index';
import { NavigationActions } from 'react-navigation';
import { styles } from './clientStyles';


const ClientView = (props) => {
  const { userData } = props;
  // const defaultAvatar = require('../../assets/images/user.jpeg');

  const navigateTo = (where) => {
    switch (where) {
      case 'form':
        props.navigation.navigate('form');
        break;
      case 'map':
        props.navigation.navigate('map');
        break;
      case 'logout':
        props.navigation.navigate('logout');
        break;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={ userProfileImage }
          style={{ width: '50%', height: '50%' }}
        />
      </View>
      <Text>
        Name: {userData ? userData.name : ''}
      </Text>
      <Text>
        Email: {userData ? userData.email : ''}
      </Text>
      <Text>
        User ID: {userData ? userData.addressId : ''}
      </Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigateTo('form')} >
        <Text style={styles.loginText}>Form</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigateTo('map')} >
        <Text style={styles.loginText}>Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigateTo('logout')} >
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export { ClientView };