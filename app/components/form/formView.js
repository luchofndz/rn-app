import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { styles } from './formStyles';

const FormView = (props) => {
  const { navigation, userImage, setUserImage } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState(null);

  let openImagePickerAsync = async () => {
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