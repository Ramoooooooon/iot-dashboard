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
import bg from "../bg4.png";
import perps from "../perps.png";
import logoinv from "../logo.png";
import welcome from "../welcome.png";
import back from "../b2.png";
import button from "../power.png";
import buttonOn from "../powerOn.png";


function get(url, parameters) {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    var queryString = Object.keys(parameters)
      .map((key) => key + "=" + parameters[key])
      .join("&");

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      }
    };

    xhttp.open("GET", url + "?" + queryString, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(queryString);
  });
}


export default class Logout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      time: new Date().toLocaleString(),
      setButton1: true,
      setButtonOn1: false,
      setButton2: true,
      setButtonOn2: false,
    };
  }


  ButtonOn1 = async() => {
    this.setState({setButton1 : false})
    this.setState({setButtonOn1 : true})
    var InsertAPI = "http://192.168.1.7:4000/on";
    let response = await get(InsertAPI, {});
  }
  ButtonOff1 = async() => {
    this.setState({setButton1 : true})
    this.setState({setButtonOn1 : false})
    var InsertAPI = "http://192.168.1.7:4000/off";
    let response = await get(InsertAPI, {});
  }
  ButtonOn2 = async() => {
    this.setState({setButton2 : false})
    this.setState({setButtonOn2 : true})
    var InsertAPI = "http://192.168.1.7:4000/on";
    let response = await get(InsertAPI, {});
  }
  ButtonOff2 = async() => {
    this.setState({setButton2 : true})
    this.setState({setButtonOn2 : false})
    var InsertAPI = "http://192.168.1.7:4000/off";
    let response = await get(InsertAPI, {});
  }

  
  render(props) {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              paddingLeft: 30,

              position: "absolute",
              top: 90,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "#800000" }}>
              Lights
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "normal", color: "#888888" }}
            >
              Turn ON/OFF the lights
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
                width: 70,
              }}
            />
          </View>
          <TouchableOpacity
            style={{ position: "absolute", top: 0, left: 0, paddingTop: 20 }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image source={back} style={{ height: 50, width: 50 }} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 3,
            backgroundColor: "#800000",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 15,
          }}
        >
          <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, color:"white", fontWeight:"700"}}>
                    Lights 1
                  </Text>
                   {this.state.setButton1 && <TouchableOpacity
                    onPress={this.ButtonOn1}
                    style={{ padding: 10 }}
                  >
                    <Image source={button} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                  {this.state.setButtonOn1 && <TouchableOpacity
                    onPress={this.ButtonOff1}
                    style={{ padding: 10 }}
                  >
                    <Image source={buttonOn} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, color:"white", fontWeight:"700"}}>
                    Lights 2  
                  </Text>
                   {this.state.setButton2 && <TouchableOpacity
                    onPress={this.ButtonOn2}
                    style={{ padding: 10 }}
                  >
                    <Image source={button} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                  {this.state.setButtonOn2 && <TouchableOpacity
                      onPress={this.ButtonOff2}
                      style={{ padding: 10 }}
                  >
                    <Image source={buttonOn} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, color:"white", fontWeight:"700"}}>
                    Lights 3  
                  </Text>
                   {this.state.setButton2 && <TouchableOpacity
                    onPress={this.ButtonOn2}
                    style={{ padding: 10 }}
                  >
                    <Image source={button} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                  {this.state.setButtonOn2 && <TouchableOpacity
                      onPress={this.ButtonOff2}
                      style={{ padding: 10 }}
                  >
                    <Image source={buttonOn} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, color:"white", fontWeight:"700"}}>
                    Lights 4  
                  </Text>
                   {this.state.setButton2 && <TouchableOpacity
                    onPress={this.ButtonOn2}
                    style={{ padding: 10 }}
                  >
                    <Image source={button} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                  {this.state.setButtonOn2 && <TouchableOpacity
                      onPress={this.ButtonOff2}
                      style={{ padding: 10 }}
                  >
                    <Image source={buttonOn} style={{ height: 60, width: 60 }} />
                  </TouchableOpacity>}
                </View>
        </View>
      </View>
    );
  }
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "white",
  },
});
