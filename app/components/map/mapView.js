import * as React from "react";
import { View } from "react-native";
import { MapView as Map } from 'react-native-maps';

const MapView = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Map style={{
        width: "100%",
        height: "100%",
      }} />
    </View>
  );
}


export default MapView;