import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { userProfileImage } from '../../assets/images/index';
import { NavigationActions } from 'react-navigation';


const ClientView = (props) => {
  const { userData } = props;
  // const defaultAvatar = require('../../assets/images/user.jpeg');

  const navigateTo = (where) => {
    switch (where) {
      case 'form':
        props.navigation.navigate('form');
        // NavigationActions.navigate({ screen: 'form' });
        break;
      case 'map':
        props.navigation.navigate('map');
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
      <TouchableOpacity onPress={() => navigateTo('form')} >
        <Text>Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('map')} >
        <Text>Maps</Text>
      </TouchableOpacity>
    </View>
  );
}

export { ClientView };