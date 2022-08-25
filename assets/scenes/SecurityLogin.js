import React, { Component, useState } from "react";
import {
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Picker,
} from "react-native";

import back from "../b.png";
import logoinv from "../logoinv.png";

function post(url, parameters) {
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

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(queryString);
  });
}
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

function convert_timestamp(timestamp) {
  var timestamp = timestamp * 1000;
  var date = new Date(timestamp);
  return date;
}

export default class SecurityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { StudentID: "", StudentName: "", Coursesec: "" };
  }

  InsertRecord = async () => {
    var StudentID = this.state.StudentID;
    var StudentName = this.state.StudentName;
    var Coursesec = this.state.Coursesec;

    if (
      StudentID.length == 0 ||
      StudentName.length == 0 ||
      Coursesec.length == 0
    ) {
      alert("Required Field is missing");
    } else {
      var InsertAPI = "http://192.168.1.7/sign.php";

      var Data = {
        StudentID: StudentID,
        StudentName: StudentName,
        Coursesec: Coursesec,
      };

      let response = await post(InsertAPI, Data);

      alert(response);
      this.setState({
        StudentID: "",
        StudentName: "",
        Coursesec: "",
      });
    }
  };

  updateCoursesec = (Coursesec) => {
    this.setState({ Coursesec: Coursesec });
  };

  render(props) {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "#800000",
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
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
              Login
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "normal", color: "#888888" }}
            >
              Hello! Please login first
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
              navigation.navigate("Start");
            }}
          >
            <Image source={back} style={{ height: 50, width: 50 }} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 3,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 15,
          }}
        >
          <View
            style={{
              paddingRight: 15,
              padding: 10,
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >

          </View>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
            keyboardType="ascii-capable"
            onChangeText={(StudentID) => this.setState({ StudentID })}
          />
          <View style={styles.space} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            keyboardType="ascii-capable"
            onChangeText={(StudentName) => this.setState({ StudentName })}
          />
          <View style={styles.space} />
          <View
            style={{
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
          </View>
          <View style={styles.space} />
          <View style={styles.space} />
          <TouchableOpacity style={styles.buttons} onPress={() => {
                navigation.navigate("Home");
              }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>Login</Text>
          </TouchableOpacity>
          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <Text>Already registered? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#800000" }}>Login!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#800000",
    height: 45,
    width: 180,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },

  buttonBack: {
    alignItems: "flex-end",
  },
  fillup: {
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    height: 80,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize:16
  },
  pick: {
    height: 40,
    width: 292,

    paddingLeft: 5,
    alignSelf: "stretch",
    fontSize: 13,
  },
});
