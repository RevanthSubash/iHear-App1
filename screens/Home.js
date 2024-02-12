import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default class HomeScreen extends Component{
  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style = {styles.titleBar}>
        <Text style={styles.titleText}> iHear App </Text>
        </View>
        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SignIn")
                    }>
                    <Text style={styles.routeText}>SignIn</Text>
                    </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#b8b8b8'},
    titleText : {
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
    },
    titleBar: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white'
},
routeText: {
  fontSize: 35,
  fontWeight: "bold",
  color: "black",
  marginTop: 75,
  paddingLeft: 30
},
})