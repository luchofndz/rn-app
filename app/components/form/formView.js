import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { styles } from './formStyles';

const FormView = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

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

    setSelectedImage({ localUri: pickerResult.uri });
  }

  return (
    <View style={styles.container}>
      {selectedImage &&
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      }
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

// export { FormView };
export default FormView;