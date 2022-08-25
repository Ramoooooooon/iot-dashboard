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

export default class Signup extends Component {
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
              Register
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "normal", color: "#888888" }}
            >
              Hello PUPian! Please sign up the form
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
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign Up</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Student ID"
            placeholderTextColor="black"
            keyboardType="ascii-capable"
            onChangeText={(StudentID) => this.setState({ StudentID })}
          />
          <View style={styles.space} />
          <TextInput
            style={styles.input}
            placeholder="Name (Lastname, Firstname MI)"
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
            <Picker
              style={[styles.input,{borderWidth:0}]}
              selectedValue={this.state.Coursesec}
              onValueChange={this.updateCoursesec}
            >
              <Picker.Item label={"Course"} value={"Course"} />
              <Picker.Item label={"BSA 1-1"} value={"BSA 1-1"} />
              <Picker.Item label={"BSA 2-1"} value={"BSA 2-1"} />
              <Picker.Item label={"BSA 3-1"} value={"BSA 3-1"} />
              <Picker.Item label={"BSA 4-1"} value={"BSA 4-1"} />
              <Picker.Item label={"BSBA 1-1"} value={"BSBA 1-1"} />
              <Picker.Item label={"BSBA 2-1"} value={"BSBA 2-1"} />
              <Picker.Item label={"BSBA 3-1"} value={"BSBA 3-1"} />
              <Picker.Item label={"BSBA 4-1"} value={"BSBA 4-1"} />
              <Picker.Item label={"BSCpE 1-1"} value={"BSCpE 1-1"} />
              <Picker.Item label={"BSCpE 2-1"} value={"BSCpE 2-1"} />
              <Picker.Item label={"BSCpE 3-1"} value={"BSCpE 3-1"} />
              <Picker.Item label={"BSCpE 4-1"} value={"BSCpE 4-1"} />
              <Picker.Item
                label={"BSED English 1-1"}
                value={"BSED English 1-1"}
              />
              <Picker.Item
                label={"BSED English 2-1"}
                value={"BSED English 2-1"}
              />
              <Picker.Item
                label={"BSED English 3-1"}
                value={"BSED English 3-1"}
              />
              <Picker.Item
                label={"BSED English 4-1"}
                value={"BSED English 4-1"}
              />
              <Picker.Item label={"BSED SS 1-1"} value={"BSED SS 1-1"} />
              <Picker.Item label={"BSED SS 2-1"} value={"BSED SS 2-1"} />
              <Picker.Item label={"BSED SS 3-1"} value={"BSED SS 3-1"} />
              <Picker.Item label={"BSED SS 4-1"} value={"BSED SS 4-1"} />
              <Picker.Item label={"BSIT 1-1"} value={"BSIT 1-1"} />
              <Picker.Item label={"BSIT 2-1"} value={"BSIT 2-1"} />
              <Picker.Item label={"BSIT 3-1"} value={"BSIT 3-1"} />
              <Picker.Item label={"BSIT 4-1"} value={"BSIT 4-1"} />
              <Picker.Item label={"DCET 1-1"} value={"DCET 1-1"} />
              <Picker.Item label={"DCET 2-1"} value={"DCET 2-1"} />
              <Picker.Item label={"DCET 3-1"} value={"DCET 3-1"} />
              <Picker.Item label={"DCET 4-1"} value={"DCET4-1"} />
              <Picker.Item label={"DICT 1-1"} value={"DICT 1-1"} />
              <Picker.Item label={"DICT 2-1"} value={"DICT 2-1"} />
              <Picker.Item label={"DICT 3-1"} value={"DICT 3-1"} />
              <Picker.Item label={"DICT 4-1"} value={"DICT 4-1"} />
            </Picker>
          </View>
          <View style={styles.space} />
          <View style={styles.space} />
          <TouchableOpacity style={styles.buttons} onPress={this.InsertRecord}>
            <Text style={{ fontWeight: "bold", color: "white" }}>Register</Text>
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
