//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class SettingScreen extends Component {
    static navigationOptions = {
        title: 'Setting',
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>SettingScreen</Text>
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
export default SettingScreen;
