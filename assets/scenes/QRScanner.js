import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import retry from "../back.png";

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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: false,
      ScannedName: ``,
    };
  }

  componentDidMount = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
  };

  handleBarCodeScanned = async ({ type, data }) => {
    alert(`${data} has been scanned!`);
    this.setState({ scanned: true });
    this.setState({ ScannedName: `${data}` });
  };
  InsertRecord = async () => {
    var StudentName = this.state.ScannedName;

    if (StudentName.length == 0) {
      alert("Required Field is missing");
    } else {
      var InsertAPI = "http://192.168.1.7/login.php";

      var Data = {
        StudentName: StudentName,
      };

      let response = await post(InsertAPI, Data);
      let decoded_object= JSON.parse(response);
      alert(this.state.ScannedName+decoded_object);
      this.setState({ scanned: false });
              this.setState({ ScannedName: `` });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={
            this.state.scanned ? undefined : this.handleBarCodeScanned
          }
          style={{ height: 500, width: 500 }}
        />

        {this.state.scanned && (
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
            }}
            onPress={() => {
              this.setState({ scanned: false });
              this.setState({ ScannedName: `` });
            }}
          >
            <Image source={retry} style={{ height: 50, width: 50 }}></Image>
            <Text style={{ fontWeight: "bold", color: "white" }}>
             Wrong name? Scan Again
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ height: 20 }} />
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              height: 38,
              width: 300,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "black",  textAlign: "center", }}>
              Student's Name: {this.state.ScannedName}
            </Text>
          </View>
          <View style={{ height: 20 }} />
          <TouchableOpacity
            style={{
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
            }}
            onPress={this.InsertRecord}
       
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 620,
    width: 500,
  },
});
