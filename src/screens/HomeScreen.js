//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button } from 'react-native';

// create a component
class HomeScreen extends Component {
   
    
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
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
        backgroundColor: '#10a3cb',
    },
});

//make this component available to the app
export default HomeScreen;
