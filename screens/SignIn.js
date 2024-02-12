import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native"

export default class SignInScreen extends Component{
    constructor (props) {
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.titleText}> Sign In </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :'#b8b8b8'},
    titleText: {
        fontSize: 30,
        fontColor: "#000",
        fontWeight: "bold",
    }
})