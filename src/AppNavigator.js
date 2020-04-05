import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import { View, Text, ImageBackground, Image, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard'
import DR from './Dashboard/DashboardRikki'
import Createtourtrip from './Createtourtrip'
import Login from './Login'
import ThreeD from './Showtourtrip'
import Configuration from './Configuration/Configuration'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

let items = [
    {
        name: "Home",
        image: require("./assets/iconfinder_Streamline-18_185038.png")
    },
    {
        name: "Car Features",
        image: require("./assets/noun_Car_1671025.png")
    },
    {
        name: "Setting",
        image: require("./assets/noun_Settings_2519206.png")
    },
    {
        name: "Support",
        image: require("./assets/noun_support_1256085.png")
    },
    {
        name: "Contact Mulliner",
        image: require("./assets/noun_Contacts_2153076.png")
    },
    {
        name: "Pricing",
        image: require("./assets/noun_Pound_2249848.png")
    },
    {
        name: "Feedback/Messages",
        image: require("./assets/noun_feedback_305611.png")
    },
    {
        name: "Log out",
        image: require("./assets/noun_logout_1997053.png")
    },
]
const { height, width } = Dimensions.get('window')
const Drawer = createDrawerNavigator(
    {
        ThreeD: {
            screen: ThreeD,
            navigationOptions: {
                header: null,
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Createtourtrip: {
            screen: Createtourtrip,
            navigationOptions: {
                header: null,
            },
        },
        Configuration: {
            screen: Configuration,
            navigationOptions: {
                header: null,
            },
        },
        Dashboard: {
            screen: DR,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        drawerPosition: 'right',
        drawerWidth: width * .35,
        contentComponent: props =>
            <View style={{ flex: 1 }}>
                <View style={{ flex: .2, backgroundColor: 'transparent' }}>
                    <ImageBackground
                        source={require('./assets/new-2018-bentley-mulsanne-speedsedan-11445-16940867-19-1024.png')}
                        style={{ flex: 1 }}>
                        <View style={{ flex: .25, backgroundColor: 'transparent', paddingHorizontal: 23 }}>
                            <Icon name="ios-arrow-forward" size={30} color='#CECECE' />
                        </View>
                        <View style={{ flex: .75, backgroundColor: 'transparent', paddingHorizontal: 30, justifyContent: 'center' }}>
                            <View style={{ height: 76, backgroundColor: 'transparent', flexDirection: 'row' }}>
                                <Image source={require('./assets/images2x.png')} style={{ width: 76, height: 76 }} />
                                <View style={{ height: '100%', backgroundColor: 'transparent', marginLeft: 25 }}>
                                    <Text style={{ fontFamily: 'Bentley', fontSize: 16, color: '#FFFFFF' }}>Welcome</Text>
                                    <Text style={{ fontFamily: 'Bentley-Bold', fontSize: 22, color: '#FFFFFF' }}>John Doe</Text>
                                    <Text style={{ fontFamily: 'Bentley', fontSize: 16, color: '#CECECE' }}>Last Login: 14/05/2019. 11:22</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: .8, backgroundColor: 'transparent', paddingHorizontal: 50, paddingTop: 10 }}>
                    {/* <FlatList data={items}
                        renderItem={(item) => { */}
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[0].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[0].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[1].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[1].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[2].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[2].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[3].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[3].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[4].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[4].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[5].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[5].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[6].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[6].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCard}>
                        <View style={{ flex: .3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={items[7].image} style={{ resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.name}>{items[7].name}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* }
                        } */}
                    {/* /> */}
                </View>
            </View>
    }
)

const App = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Drawer: {
        screen: Drawer,
        navigationOptions: {
            header: null
        }
    },
},
    {
        initialRouteName: "Login",

    }
)
App.navigationOptions = () => {
    return {
        header: null
    };
};
const AppNavigator = createAppContainer(App);
export default AppNavigator;

const styles = StyleSheet.create({
    mainCard: {
        height: height * .1,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    text: {
        flex: .7,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    name: {
        fontFamily: 'BentleyLight',
        fontSize: 20,
        color: '#000000'
    }
})
