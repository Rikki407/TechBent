/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const headrests = [
"#000000",

]
const seats = [

]
let { height, width } = Dimensions.get('window');

class Configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headrest: 0,
            seat: 0
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    onChangeHeadrest() {
        let Headrest = (this.state.headrest + 1) % 4
        this.setState({ headrest: Headrest })
    }
    onChangeSeat() {
        let seat = (this.state.seat + 1) % 4
        this.setState({ seat: seat })
    }
    onLoadModelStart(){
        alert("load")
    }
    onLoadModelSuccess() {
        alert("success")
    }
    onLoadModelError () {
        alert("error")
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <Image source={require('../assets/imgs/mainCar.jpg')} style={{ height: height, width: width }} />
                <Image source={require('../assets/imgs/MainHide/MHCamel_Gray.png')} style={{ height: height, width: width, position: 'absolute', tintColor: '#c8620e' }} />
                <View style={{ position: 'absolute', left: width * .02, bottom: width * .02, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            height: height * .1, width: width * .3, backgroundColor: '#c6c6c6',
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => this.onChangeHeadrest()}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CHANGE HEADREST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: height * .1, width: width * .2, backgroundColor: '#c6c6c6',
                            justifyContent: 'center', alignItems: 'center', marginLeft: width * .02
                        }}
                        onPress={() => this.onChangeSeat()}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CHANGE SEAT</Text>
                    </TouchableOpacity>
                </View> 
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Configuration;