import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, FlatList, TextInput } from 'react-native';
//import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
import { Container, Body, Content, Header, Left, Right, Title, Input, Item, Label, Button, Text } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window')
const cars = [
    {
        image: require("../assets/Mulsanne_Standard.png"),
        name: "MULSANNE",
        click: false
    },
    {
        image: require("../assets/NewContinentalGT_DerivativeV2.png"),
        name: "NEW CONTINENTAL GT",
        click: true
    },
    {
        image: require("../assets/BENTAYGA.png"),
        name: "BENTAYGA",
        click: false
    },


]
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPopup: false
        }
        this.renderCardView = this.renderCardView.bind(this)
    }

    renderCardView({ item }) {
        return (
            <TouchableOpacity style={styles.cardViewStyle} onPress={() => item.click ? this.props.navigation.navigate("Createtourtrip") : null}>
                <Image
                    style={{ height: width * .2, width: width * .3, resizeMode: 'contain' }}
                    source={item.image} />
                <Text style={{ fontFamily: 'Bentley', fontSize: 18, paddingBottom: 26.16, color: "#707070" }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.goBack()}>
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
                            onPress={() => {
                                // alert('Ok')
                                this.props.navigation.openDrawer()
                            }}>
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
                        <FlatList
                            data={cars}
                            renderItem={this.renderCardView}
                            numColumns={3}
                        />
                    </View>
                </View>
                {
                    0 ? //this.state.showPopup ?
                        <View style={styles.popupView}>
                            <View style={styles.black}>
                            </View>
                            <View style={styles.loginMainContainerStyle}>
                                <View style={styles.loginContainerStyle}>
                                    <Text style={styles.loginText}>Please fill in customer details</Text>
                                    <View style={styles.textInput}>
                                        <TextInput style={styles.loginBoxStyle}
                                            label='UserID'
                                            placeholder='Customer Name*'
                                            placeholderTextColor="#000000"
                                        />
                                    </View>
                                    <View style={styles.textInput}>
                                        <TextInput style={styles.loginBoxStyle}
                                            label='test'
                                            placeholder='Mobile no.*'
                                            placeholderTextColor="#000000"
                                        />
                                    </View>
                                    <View style={styles.textInput}>
                                        <TextInput style={styles.loginBoxStyle}
                                            label='test'
                                            placeholder='E-mail address*'
                                            placeholderTextColor="#000000"
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => this.setState({ showPopup: false })}
                                    >
                                        <Text style={styles.submit}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        : null
                }
                {/* <View style={styles.popup}>
</View> */}
            </Container>

        );
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        height: height * .9,
        top: height * .1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    carsView: {
        height: height * .4,
        width: width,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardViewStyle: {
        padding: 2,
        width: width * .3,
        height: width * .26,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        backgroundColor: 'white',
        marginHorizontal: width * .1 / 6,
        marginVertical: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cardView_InsideText: {
        fontSize: 20,
        color: '#000',
        width: 180,
        height: 150
        //  textAlign: 'center',
        //marginTop: 50

    },
    popupView: {
        height: height,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
    },
    black: {
        height: height,
        width: width,
        backgroundColor: '#ffffff',
        opacity: .8,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginContainerStyle: {
        backgroundColor: 'transparent',
    },
    loginText: {
        fontSize: 20,
        color: '#000000',
        marginBottom: height * .05
    },
    textInput: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: width * .4,
        borderColor: '#000000',
        marginTop: height * .05
    },
    loginBoxStyle: {
        fontSize: 20,
        color: "#000000",
        marginTop: 3,
        // marginBottom: -10
    },
    loginMainContainerStyle: {
		/* borderWidth: 2,
		borderColor: 'red', */
        width: width * .4,
        zIndex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        height: height,
        justifyContent: 'center',
        position: 'absolute'
    },
    button: {
        width: width * .4,
        height: height * .06,
        backgroundColor: '#DDA50B',
        borderRadius: height * .03,
        marginTop: height * .15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submit: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: .7
    },
});