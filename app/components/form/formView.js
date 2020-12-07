import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";


const FormView = (props) => {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Name
      </Text>
    </View>
  );
}

// export { FormView };
export default FormView;