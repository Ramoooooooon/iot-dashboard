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
import bg2 from "../bg2.png";
import perps from "../perps.png";
import button1 from "../button1.png";
import button2 from "../button2.png";
import button3 from "../button3.png";
import button4 from "../button4.png";
import button5 from "../button5.png";
import button6 from "../button6.png";
import logoinv from "../logoinv.png";

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bg2}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        ><View
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
            width: 70,
          }}
        />
      </View>
          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image source={perps} style={{ height: 130, width: 90 }} />
          </View>
          <View
            style={{
              justifyContent: "center",

              height: "80%",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Lights");
                }}
                style={styles.button} 
              >
                <Image source={button1} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Lights</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Logout");
                }}
                style={styles.button}
              >
                <Image source={button2} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 18, fontWeight: "700" }}>CCTV</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 40 }}></View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Signup");
                }}
                style={styles.button}
              >
                <Image source={button3} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 18, fontWeight: "700", textAlign:"center"}}>
                  Speaker
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Record");
                }}
                style={styles.button}
              >
                <Image source={button4} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Alarm</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 40 }}></View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("QRGenerator");
                }}
                style={styles.button}
              >
                <Image source={button6} style={{ height: 60, width: 60 }} />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                Rooms
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("About");
                }}
                style={styles.button}
              >
                <Image source={button5} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 18, fontWeight: "700" }}>About</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{ position: "absolute", bottom: 0, left: 10, fontSize: 14 }}
          >
            Version 1.0.0
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    borderTopWidth: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderTopColor: "#800000",
  },
  button: {
    borderWidth: 1,
    borderColor: "lightgray",

    height: 95,
    width: 95,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
