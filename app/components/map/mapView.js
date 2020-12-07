import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
// import { Constants, MapView, Location } from 'expo';
import {  Permissions } from 'expo-permissions';
// import { LOCATION } from 'expo-location';
import { styles } from './mapStyles';

const MapsView = (props) => {
  // TODO: search a way to implement map offline logic.
  const [mapRegion, setMapRegion] = useState(null);
  const [hasLocationPermissions, setLocationPermissions] = useState(false);
  const [locationResult, setLocationResult] = useState(null);

  // useEffect(() => {
  //   getLocationAsync();
  // }, []);

  const getLocationAsync = async () => {
    // let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let { locationStatus } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setLocationResult('Permission to access location was denied');
    } else {
      setLocationPermissions(true);
    }
 
    let location = await Location.getCurrentPositionAsync({});
    setLocationResult(JSON.stringify(location));
    
    // Center the map on the location we just fetched.
    setMapRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
  };

  const handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    setMapRegion(mapRegion);
  };

  const handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView 
        style={{
          width: "100%",
          height: "60%",
        }} 
      />
       {/* <View>
        <Text>
          Pan, zoom, and tap on the map!
        </Text>
        
        {
          locationResult === null ?
          <Text>Finding your current location...</Text> :
          hasLocationPermissions === false ?
            <Text>Location permissions are not granted.</Text> :
            mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <MapView
              style={{ alignSelf: 'stretch', height: 400 }}
              region={mapRegion}
              onRegionChange={mapRegion => handleMapRegionChange(mapRegion)}
            />
        }
        
        <Text>
          Location: {locationResult}
        </Text>
      </View> */}
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleGoBack()} >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}


export default MapsView;