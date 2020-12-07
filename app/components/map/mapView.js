import * as React from "react";
import { View } from "react-native";
import MapView from 'react-native-maps';

const MapsView = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView style={{
        width: "100%",
        height: "100%",
      }} />
    </View>
  );
}


export default MapsView;