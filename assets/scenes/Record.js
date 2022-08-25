import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  Alert,
  Picker,
} from "react-native";

import b from "../b2.png";
import logoinv from "../logo.png";

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
    xhttp.send();
  });
}

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Coursesec: "Course",
      info: [],
    };
  }

  componentDidMount = async () => {
    var Coursesec = this.state.Coursesec;
    var data = { Coursesec: Coursesec };
    var GetAPI = "http://192.168.1.7/allrecord.php";
    let response = await get(GetAPI, data);
    let laman = JSON.parse(response);
    this.setState({ info: laman });
  };
  updateCoursesec = async (Coursesec) => {
    this.setState({ Coursesec: Coursesec });
    var data = { Coursesec: Coursesec };
    var GetAPI = "http://192.168.1.7/allrecord.php";
    let response = await get(GetAPI, data);
    let laman = JSON.parse(response);
    this.setState({ info: laman });
  };


  deleteData = async () => {
    let url = "http://192.168.1.7/delete.php";
    let response = await get(url, {});
    alert(response);
  };
  saveData = async () => {
    Linking.openURL("http://192.168.1.7/download.php");
  };
  render(props) {
    let newlist = this.state.info.map((info) => {
      return <Info info={info} context={this} />;
    });
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        >
          <View style={{ backgroundColor: "white" }}>
            <View style={{ height: 160, backgroundColor: "white" }}>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingLeft: 30 - 8,

                  position: "absolute",
                  top: 90,
                }}
              >
                <Text
                  style={{ fontSize: 28, fontWeight: "bold", color: "black" }}
                >
                  Records
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "gray",
                  }}
                >
                  Student's List
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  right: 0,
                  position: "absolute",
                  top: 90,
                  borderWidth: 1,
                  borderRadius: 5,
                  right: 10,
                }}
              >
                <Picker
                  style={styles.input}
                  selectedValue={this.state.Coursesec}
                  onValueChange={this.updateCoursesec}
                >
                  <Picker.Item label={"All Course"} value={"All Course"} />
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
            </View>
            <View
              style={{
                height: 50,
                flexDirection: "row",
                paddingLeft: 8,
                paddingRight: 8,
                marginBottom: 10,
                backgroundColor: "white",
              }}
            >
              <View
                style={[
                  styles.title,
                  { borderTopWidth: 2, borderLeftWidth: 0 },
                ]}
              >
                <Text style={styles.texts}>Student ID</Text>
              </View>
              <View style={[styles.title, { borderTopWidth: 2 }]}>
                <Text style={styles.texts}>Student Name</Text>
              </View>
              <View style={[styles.title, { borderTopWidth: 2 }]}>
                <Text style={styles.texts}>{this.state.Coursesec}</Text>
              </View>
              <View style={[styles.title, { borderTopWidth: 2 }]}>
                <Text style={styles.texts}>Time In</Text>
              </View>
              <View
                style={[
                  styles.title,
                  { borderTopWidth: 2, borderRightWidth: 0 },
                ]}
              >
                <Text style={styles.texts}>Time Out</Text>
              </View>
            </View>
          </View>

          <ScrollView>{newlist}</ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.dsbutton,
                {
                  marginBottom: 0,
                  backgroundColor: "#800000",
                  borderWidth: 0.1,
                },
              ]}
              onPress={createTwoButtonAlert}
            >
              <Text style={{ color: "white" }}>Save and Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dsbutton} onPress={this.saveData}>
              <Text>Save as Excel File</Text>
            </TouchableOpacity>
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
        </ImageBackground>
      </View>
    );
  }
}

const Info = (props) => {
  let info = props.info;
  let StudentID = info.StudentID;
  let StudentName = info.StudentName;
  let Coursesec = info.Coursesec;
  let TimeIn = info.TimeIn;
  let TimeOut = info.TimeOut;
  let _this = props.context;

  return (
    <View
      style={{
        height: 100,
        flexDirection: "row",
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <View style={[styles.content, { borderLeftWidth: 0 }]}>
        <Text style={styles.texts2}> {StudentID}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.texts2}> {StudentName} </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.texts2}> {Coursesec} </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.texts2}> {TimeIn} </Text>
      </View>
      <View style={[styles.content, { borderRightWidth: 0 }]}>
        <Text style={styles.texts2}> {TimeOut} </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    borderTopWidth: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderTopColor: "white",
  },
  button: {
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
  texts: {
    fontSize: 18,
    color: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  texts2: {
    fontSize: 18,
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  content: {
    height: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    height: 50,
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dsbutton: {
    margin: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
  input: {
    height: 50,
    width: 180,
    borderColor: "black",

    borderRadius: 5,
  },
});

const createTwoButtonAlert = () =>
  Alert.alert(
    "Warning",
    "You are about to reset all the data. Are you sure?",
    [
      {
        text: "Save and Reset",
        onPress: async () => {
          Linking.openURL("http://192.168.1.7/dd.php");
        },
      },
    
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      
    ],
    { cancelable: false }
  );
