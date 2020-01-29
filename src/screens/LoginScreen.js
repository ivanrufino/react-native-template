//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>LoginScreen</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
});

//make this component available to the app
export default LoginScreen;
