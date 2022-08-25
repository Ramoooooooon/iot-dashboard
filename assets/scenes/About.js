import React, { Component } from "react";
import {
  Platform,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import QR from "../scenes/QRScanner";
import bglogin from "../bglogin.png";
import logoinv from "../logoinv.png";
import b from "../b.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ScannedName: "" };
  }

  render(props) {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bglogin}
          resizeMode="stretch"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: 20,
            }}
          >
            <Image
              source={logoinv}
              style={{
                height: 54,
                width: 37,
              }}
            />
          </View>
          <View style={{ height: 60 }} />
          <View
            style={{
              alignSelf: "flex-start",
              paddingLeft: 30,

              position: "absolute",
              top: 90,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
              About
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "normal", color: "#888888" }}
            >
              All about Ramon
            </Text>
          </View>

          <View style={styles.qr}>
            <Text style={{ color: "black", textAlign: "left", fontSize: 18 }}>
              This app is still in beta version so please bear with it. I will
              give future updates for this application but for now this is all I
              can give. Thank you for using my application. Padayon!
            </Text>
            <Text style={{ color: "black", textAlign: "left", fontSize: 18 , position:"absolute", bottom:0, left:5}}>
              -Ramon
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{ position: "absolute", top: 0, left: 0, paddingTop: 20 }}
          >
            <Image
              source={b}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopWidth: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderColor: "#800000",
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  buttonslots: {
    alignItems: "center",
  },

  buttons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
    height: 50,
    width: 150,
    borderRadius: 20,
  },
  buttonSignup: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
    width: 150,
    borderRadius: 20,
  },
  qr: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "80%",
    padding: 5,
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
