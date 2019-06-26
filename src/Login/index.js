import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableHighlight,
    Image,
    ImageBackground,
    ToastAndroid
} from 'react-native';
//import {connect} from 'react-redux';
//import { connect } from 'http2';
//import styles from "./styles";
import { Col, Row, Grid } from "react-native-easy-grid";
const { height, width } = Dimensions.get('window')

export default class Login extends React.Component {

    clickPage = () => {

        // this.props.testredux (testData);
        this.props.navigation.navigate('Dashboard')
    }
    render() {
        return (

            <View >
                <Image
                    source={require("../assets/splash.png")}
                    style={styles.image}
                />
                <View style={styles.black} />
                <View style={styles.container}>
                    <Image
                        style={{ height: height * .12, width: height * .5, marginBottom: height * .05, resizeMode: 'contain' }}
                        source={require("../assets/Bentley_Mulliner_login.png")} />
                    <View style={styles.inputContainer}>
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={require("../assets/noun_Username_icon.png")} />
                        <TextInput style={styles.inputs}
                            placeholder="User Name"
                            // keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            placeholderTextColor='#000000'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image
                            style={{ height: 27, width: 20 }}
                            source={require("../assets/iconfinder-Password_icon.png")} />
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='#000000'
                        />
                    </View>
                    <View style={styles.forgotView}>
                        <TouchableHighlight
                        //onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={styles.forgotText}>Forgot Password ?</Text>
                        </TouchableHighlight>
                    </View>
                    {/* <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('ThreeD', {
                        popup: true
                    })}> */}
                    <TouchableHighlight style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('ThreeD')}
                    >
                        <Text style={styles.signUpText}>Sign in</Text>
                    </TouchableHighlight>
                    {/* <Image style={{ marginLeft: 10 }} source={require('../assets/GP.png')} />                  
        <Image style={{ marginLeft: 10 }} source={require('../assets/FB.png')} /> */}
                    {/* <Text style={styles.forgotText}>Or connect via</Text>
                    <Row size={8}>
                        <Image style={{ marginLeft: 10 }} source={require('../assets/GP.png')} />
                        <Image style={{ marginLeft: 10 }} source={require('../assets/FB.png')} />
                    </Row> */}
                    <Text style={[styles.forgotText, { paddingVertical: height * .05 }]}>----------- Or Biometric login ----------</Text>
                    <Row size={40}>
                        <Image style={{ marginLeft: 10 }} source={require('../assets/Finger.png')} />
                        <Text>        </Text>
                        <Image style={{ marginLeft: 10 }} source={require('../assets/Face.png')} />
                    </Row>
                </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: height * .07,
        position: 'absolute'
    },
    inputContainer: {
        borderBottomColor: '#000000',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        width: width * .35,
        height: 45,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#000000',
        flex: 1,
        fontSize: 18,
       fontFamily:'Bentley'
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        width: width * .35,
        height: height * .06,
        backgroundColor: '#0D3046',
        borderRadius: height * .03,
        marginVertical: height * .05,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        fontSize: 20,
        fontFamily: 'Bentley-Bold',
        color: '#ffffff'
    },
    forgotText: {
        color: '#000000',
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'right',
        fontFamily: 'Bentley'
    },
    loginText: {
        fontSize: 45,
        marginBottom: 20,
        color: '#000000'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    black: {
        height: height * .95,
        width: width * .4,
        backgroundColor: '#FFFFFF',
        opacity: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        left: width * .3,
        top: height * .025,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
    },
    forgotView: {
        width: width * .35,
        alignItems: 'flex-end',
        marginTop: height * .025,
        justifyContent: 'flex-end'
    }
});

//export default connect(null, {Login})(Login)