import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Body, Content, Header, Left, Right, Title, Input, Item, Label, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window')

export default class ThreeD extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <StatusBar hidden />
                <Header>
                    <Left>
                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.pop()}>
                                <IIcon name="ios-arrow-back" size={30} zIndex={1} />
                            </Button>
                            <Image
                                style={{ height: height * .06, width: height * .4, resizeMode: 'contain', position: 'absolute', top: -10 }}
                                source={require("../assets/Bentley_Mulliner_login.png")} />
                        </View>
                    </Left>
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
                    <View style={styles.carsView}>
                        <TouchableOpacity style={styles.cardViewStyle} onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={{ fontFamily: 'Bentley', fontSize: 24 }}>NEW REQUEST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardViewStyle} onPress={() => alert("Will be available later")}>
                            <Text style={{ fontFamily: 'Bentley', fontSize: 24 }}>SAVED REQUEST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardViewStyle} onPress={() => alert("Will be available later")}>
                            <Text style={{ fontFamily: 'Bentley', fontSize: 24 }}>COMPLETED REQUEST</Text>
                        </TouchableOpacity>
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
        top: height * .1,
        position: 'absolute'
    },
    carsView: {
        height: height * .4,
        width: width,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    cardViewStyle: {
        width: width * .3,
        height: width * .28,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: width * .1 / 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowStyle: {
        marginTop: 10,
        marginLeft: 20
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: .7
    },
});