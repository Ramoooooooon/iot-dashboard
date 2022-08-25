import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";
// import all basic components
import QRCode from "react-native-qrcode-svg";
import QR from "../scenes/QRScanner";
import bglogin from "../bglogin.png";
import logoinv from "../logoinv.png";
import b from "../b.png";

//import QRCode

class QRGenerator extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      // Default Value of the TextInput
      valueForQRCode: "1",
      // Default value for the QR Code
    };
  }

  getTextInputValue = () => {
    var StudentName = this.state.inputValue;
    if (StudentName.length == 0) {
      alert("Required Field is missing");
    } else {
      this.setState({ valueForQRCode: this.state.inputValue });
    }
  };

  render() {
    let navigation = this.props.navigation;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed keyboard");
        }}
      >
        <ImageBackground
          source={require("../bglogin.png")}
          style={{
            backgroundColor: "white",
            flex: 1,
            borderTopWidth:
              Platform.OS === "android" ? StatusBar.currentHeight : 0,
            borderTopColor: "#800000",
            justifyContent: "center",
          }}
          resizeMode="stretch"
        >
          <View
            style={{
              alignSelf: "flex-start",
              paddingLeft: 30,

              position: "absolute",
              top: 90,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
              QR Code Generator
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "normal", color: "#888888" }}
            >
              Generate, Screenshot, Send!
            </Text>
          </View>
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

          <View style={{ height: 60, }}></View>

          <View style={styles.MainContainer}>
            <QRCode
              value={this.state.valueForQRCode}
              //Setting the value of QRCode
              size={200}
              //Size of QRCode
              bgColor="#000"
              //Backgroun Color of QRCode
              fgColor="#fff"
              //Front Color of QRCode
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.TextInputStyle}
              placeholderTextColor="black"
              keyboardType="ascii-capable"
              onChangeText={(text) => this.setState({ inputValue: text })}
              underlineColorAndroid="transparent"
              placeholder="Enter Full Name"
              value={this.state.inputValue}
            />

            <TouchableOpacity
              onPress={this.getTextInputValue}
              activeOpacity={0.7}
              style={styles.button}
            >
              <Text style={styles.TextStyle}> Generate QR Code </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}
export default QRGenerator;
const styles = StyleSheet.create({
  MainContainer: {
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
  },

  TextInputStyle: {
    marginTop: 20,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
    height: 80,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  button: {
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#800000",
    height: 38,
    width: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
  },
});

