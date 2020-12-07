import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { styles } from './formStyles';
import NetInfo from '@react-native-community/netinfo';

const FormView = (props) => {
  const { navigation, userImage, setUserImage } = props;
  const [connection, setConnection] = useState(false);
  const [name, setName] = useState(null);

  const isConnectedToNetwork = () => {
    return new Promise((resolve) => {
      if (Platform.OS === 'web') {
        resolve(true);
      } else {
        NetInfo.fetch().then((res) => {
          resolve(res.isConnected);
        });
      }
    });
  };

  let openImagePickerAsync = async () => {
    // TODO: search a way to implement wait connection logic.
    // const connection = await isConnectedToNetwork();
    // connection.then((data) => {
    //   if (data === true) {
    //     setConnection(true);
    //   } else {
    //     setConnection(false);
    //   }
    // });

    // if (connection) {

      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);

      if (pickerResult.cancelled === true) {
        return;
      }

      // setSelectedImage({ localUri: pickerResult.uri });
      setUserImage({ localUri: pickerResult.uri });
    // }
  }

  const handleOnCancel = () => {
    navigation.goBack();
  };

  const setImageName = (name) => {
    setName(name)
  };

  return (
    <View style={styles.container}>
      {userImage &&
        <Image
          source={{ uri: userImage.localUri }}
          style={styles.thumbnail}
        />
      }
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Set user name..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setImageName(text)}/>
      </View>
      <TouchableOpacity style={styles.btn} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>Set a profile picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handleOnCancel()}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export { FormView };