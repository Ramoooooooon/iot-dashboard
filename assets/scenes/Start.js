import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import bg from "../bg.png";
import perps from "../perps.png";
import logo from "../logo.png";
import welcome from "../welcome.png";

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bg}
          style={{ flex: 1, width: "100%", height: "100%" }}
          resizeMode="stretch" 
        >
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={logo}
              style={{
                opacity: 0,
                height: 54,
                width: 37,
              }}
            />
            <Image source={perps} style={{ height: 300, width: 209 }} />
            <Image
              source={logo}
              style={{
                opacity: 0,
                height: 54,
                width: 37,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-start",
              padding: 20,
              
              position:"absolute",
              bottom:0

            }}
          >
            <View style={{ height: 10 }} />
            <Image
              source={welcome}
              style={{
                height: 120,
                width: 257,
              }}
            />
            <View style={{ height: 100 }} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SecurityLogin");
              }}
              style={{
                position: "absolute",
                bottom: 20,
                marginLeft: 20,
                height: 38,
                width: 180,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#800000" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    borderColor: "white",
  },
});
