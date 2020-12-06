import * as React from "react";
import { View, TouchableOpacity } from "react-native";

const ClientView = (props) => {
  const defaultAvatar = require('../../assets/images/user.jpeg');

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
          source={defaultAvatar}
          style={{ width: wp('16%'), height: wp('16%') }}
        />
      </View>
      <Text>
        props
      </Text>
    </View>
  );
}


export default ClientView;