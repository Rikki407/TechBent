import React, { Component } from 'react';

import { Dimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Body, Content, Header, Left, Right, Title, Input, Item, Label, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window')

export default class Exterier extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("Home")}>
                                <IIcon name="ios-arrow-back" size={30} zIndex={1} />
                            </Button>
                            <Image
                                style={{ height: height * .06, width: height * .4, resizeMode: 'contain', position: 'absolute', top: -10 }}
                                source={require("../assets/Bentley_Mulliner_login.png")} />
                        </View>
                    </Left>
                    <Body>
                        <Text style={{ fontFamily: 'Bentley', fontSize: 20, color: '#707070' }}>CONTINENTAL</Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" size={30} />
                        </Button>
                    </Right>
                </Header>
                <Image
                    source={require("../assets/splash.png")}
                    style={styles.image}
                />
                <View style={styles.MainContainer}>
                    {/* <Image style={styles.cardView_InsideText} source={require('../assets/Group1854.png')} /> */}
                    <View style={styles.carsView}>
                        <View style={styles.carsColumn1}>
                            <TouchableOpacity
                                style={styles.rowStyle}
                                onPress={() => this.props.navigation.navigate("Dashboard")}>
                                <Image style={styles.cardView} source={require('../assets/NewContinantalGT.png')} />
                                <Text style={{ fontFamily: 'Bentley', fontSize: 18, paddingBottom: 26.16, color: "#707070", textAlign: 'center' }}>NEW CONTINENTAL GT</Text>
                            </TouchableOpacity>
                            <View style={styles.rowStyle}>
                                <Image style={styles.cardView} source={require('../assets/NEWContinentalGTV8.png')} />
                                <Text style={{ fontFamily: 'Bentley', fontSize: 18, paddingBottom: 26.16, color: "#707070", textAlign: 'center' }}>NEW CONTINENTAL GT V8</Text>
                            </View>
                        </View>
                        <View style={styles.carsColumn2}>
                            <View style={styles.rowStyle}>
                                <Image style={styles.cardView} source={require('../assets/NewContinantalGTC.png')} />
                                <Text style={{ fontFamily: 'Bentley', fontSize: 18, paddingBottom: 26.16, color: "#707070", textAlign: 'center' }}>NEW CONTINENTAL GT CONVERTIBLE</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Image style={styles.cardView} source={require('../assets/NewContinantalGTCV8.png')} />
                                <Text style={{ fontFamily: 'Bentley', fontSize: 18, paddingBottom: 26.16, color: "#707070", textAlign: 'center' }}>NEW CONTINENTAL GT V8         CONVERTIBLE</Text>
                                {/* <Text style={{fontFamily: 'Bentley', fontSize: 18, paddingBottom: 26.16, color: "#707070", textAlign: 'center' }}></Text> */}
                            </View>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * .9,
        top: height * .095,
        position: 'absolute',
        width: width,
    },
    carsView: {
        width: width * .9,
        height: height * .85,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1
    },
    cardView_InsideText: {
        width: width * .9,
        height: height * .83,
        resizeMode: 'contain',
        // tintColor: 'red'
    },
    rowStyle: {
        width: width * .4,
        height: width * .3,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: width * .1 / 6,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    carsColumn1: {
        width: width * .9,
        height: height * .425,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    carsColumn2: {
        width: width * .9,
        height: height * .425,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    cardView: {
        height: height * .25,
        width: height * .5,
        resizeMode: 'contain'
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: .7
    },
});