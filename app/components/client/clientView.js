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
      style={styles.container}
    >
      {/* <View>
        <Image
          source={ userProfileImage }
          style={{ width: '50%', height: '50%' }}
        />
      </View> */}
      <Text style={styles.buttonText}>
        Name: {userData ? userData.name : ''}
      </Text>
      <Text style={styles.buttonText}>
        Email: {userData ? userData.email : ''}
      </Text>
      <Text style={styles.buttonText}>
        User ID: {userData ? userData.addressId : ''}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigateTo('form')} >
        <Text style={styles.buttonText}>Form</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigateTo('map')} >
        <Text style={styles.buttonText}>Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigateTo('logout')} >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export { ClientView };