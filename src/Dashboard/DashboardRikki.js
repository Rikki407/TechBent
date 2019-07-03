import React from 'react';
import { StyleSheet, Text, View, Header, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from "./styles";

import { ViewShot, captureScreen } from "react-native-view-shot";
import Share, { ShareSheet, Button } from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
    state = {
        // HeaderTabTexthighlite tab view css 
        showSeatColors: true,
        showHeadrestColors: false,
        colorSplitVal: '',
        colorSplitClick: false,
        colorSplitColor: 'white',
        mainHideColor: 'white',
        secHideColor: 'white',
        secHideColor: 'white',
        extHideColor: 'white',
        secHidetextColor: '#000',
        mainColorList: false,
        secondryColorList: false,
        MBlistViewData: false,
        MBColorList: false,
        MBcolorName: 'SELECT COLOR',
        //mainColorlabel:'',
        selectMainColorVal: 'SELECT COLOR',
        selectSecColorVal: 'SELECT COLOR',
        selectObjectVal: 'SELECT OBJECT',
        currentSeatColor: '',
        currentHeadRestColor: '',
        showMBDoorColors: false,
        showMBRRColors: false,
        showMBseatColors: false,
        showMBseatBolColors: false,
        showseatOutColors: true,
        currentMBDoorColor: '',
        currentMBRRColor: '',
        currentMBseatColor: '',
        currentMBseatBolColor: '',
        currentseatOutColor: '',
        showseatBolOutColors: false,
        showHeadrestColors: false,
        showOvermatColors: false,
        currentseatBolOutColor: '',
        currentHeadrestColor: '',
        currentOvermatColor: '',
        captureImage: '',
        imageURI: '',
        visible: false,
        showShareIcon: false,
        screenshotbutton: true,
    }

    clicknavigate = () => {

        this.props.navigation.navigate('Home')
    }
    // start  color split  View click event ===========
    ColorSplitclick() {

        this.setState({
            colorSplitClick: !this.state.colorSplitClick,
            MBlistViewData: false,
            secondryColorList: false,
            mainColorList: false,
            MBColorList: false
        });
    }
    /* ColorSplitclickA = () => {
      this.setState({
        colorSplitVal: 'A',
        colorSplitClick: false,
        //colorSplitColor: 'red'
      });
    }
    ColorSplitclickB = () => {
      this.setState({
        colorSplitVal: 'B',
        colorSplitClick: false,
        //colorSplitColor: 'yellow'
      });
    } */
    ColorSplitclickC = () => {
        this.setState({
            colorSplitVal: 'C',
            colorSplitClick: false,
            // colorSplitColor: 'cyan'
        });
    }
    ColorSplitclick1 = () => {
        this.setState({
            colorSplitVal: ' ',
            colorSplitClick: false,
            //colorSplitColor: 'green'
        });

    }
    // start  main View click event ===========
    mainColorhideClick = () => {
        this.setState({
            mainColorList: !this.state.mainColorList,
            MBlistViewData: false,
            secondryColorList: false,
            colorSplitClick: false,
            MBColorList: false
        });
    }
    mainColorListViewDataclick = () => {
        this.setState({
            mainColorList: false,
            showSeatColors: false,
            selectMainColorVal: 'SELECT COLOR',
            mainHideColor: 'white'
        });
    }
    mainColorListViewDataclick1 = () => {
        this.setState({
            mainColorList: false,
            selectMainColorVal: 'CAMEL',
            showSeatColors: true,
            currentSeatColor: require('../assets/imgs/MainHide/MHCamel.png'),
            mainHideColor: '#b47800'
        });
    }
    mainColorListViewDataclick2 = () => {
        this.setState({
            mainColorList: false,
            showSeatColors: true,
            selectMainColorVal: 'LINEN',
            currentSeatColor: require('../assets/imgs/MainHide/MHLinen.png'),
            mainHideColor: '#d7d1b9'
        });
    }
    // start  secondery View click event ===========
    secColorhideClick = () => {
        this.setState({
            secondryColorList: !this.state.secondryColorList,
            MBlistViewData: false,
            mainColorList: false,
            colorSplitClick: false,
            MBColorList: false
        });
    }
    secColorListViewDataclick = () => {
        this.setState({
            secondryColorList: false,
            selectSecColorVal: 'SELECT COLOR',
            showHeadrestColors: false,
            secHideColor: 'white',
            secHidetextColor: '#000'
        });
    }
    secColorListViewDataclick1 = () => {
        this.setState({
            secondryColorList: false,
            selectSecColorVal: 'BELUGA',
            showHeadrestColors: true,
            currentHeadRestColor: require('../assets/imgs/SecHide/SHBeluga.png'),
            secHideColor: '#000',
            secHidetextColor: 'white'
        });
    }
    secColorListViewDataclick2 = () => {
        this.setState({
            secondryColorList: false,
            selectSecColorVal: 'BRUNEL',
            showHeadrestColors: true,
            currentHeadRestColor: require('../assets/imgs/SecHide/SHBrunel.png'),
            secHideColor: '#406f8d',
            secHidetextColor: 'white'
        });
    }
    MBListViewDataclick = () => {
        this.setState({
            //selectObjectVal: 'Camel',
            MBlistViewData: !this.state.MBlistViewData,
            mainColorList: false,
            secondryColorList: false,
            colorSplitClick: false,
            MBColorList: false,
            MBcolorName: 'SELECT COLOR',
        });
    }

    MBListItemclick = (val) => {
        if (val == 'doorInserts') {
            this.setState({
                selectObjectVal: 'DOOR INSERTS',
                MBlistViewData: false

            });
        } else if (val == 'qtrSwoosh') {
            this.setState({
                selectObjectVal: 'RR QTR SWOOSH',
                MBlistViewData: false

            });
        } else if (val == 'seatInserts') {
            this.setState({
                selectObjectVal: 'SEAT INSERTS',
                MBlistViewData: false

            });
        } else if (val == 'seatBolsters') {
            this.setState({
                selectObjectVal: 'SEAT BOLSTERS',
                MBlistViewData: false

            });
        } else if (val == 'seatOuter') {
            this.setState({
                selectObjectVal: 'SEAT OUTER',
                MBlistViewData: false

            });
        }
        else if (val == 'seatBolout') {
            this.setState({
                selectObjectVal: 'SEAT BOL OUTER',
                MBlistViewData: false
            });
        }
        else if (val == 'headRest') {
            this.setState({
                selectObjectVal: 'HEAD REST',
                MBlistViewData: false

            });
        }
        else if (val == 'overmatBinding') {
            this.setState({
                selectObjectVal: 'OVERMAT BINDING',
                MBlistViewData: false

            });
        }

        this.setState({
            //selectObjectVal: 'Camel',
            MBlistViewData: false

        });


    }
    MBcolorListOpen = () => {
        this.setState({
            //selectObjectVal: 'Camel',
            MBColorList: !this.state.MBColorList,
            MBlistViewData: false,
            mainColorList: false,
            secondryColorList: false,
            colorSplitClick: false,
        });
    }
    MBcolorNamePick = (val) => {
        this.setState({
            MBColorList: false,
        })

        if (this.state.selectObjectVal == 'DOOR INSERTS' && val == 'MANDARIN') {
            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,
                showMBDoorColors: true,

                currentMBDoorColor: require('../assets/imgs/Mandarin/DoorInserts.png'),
                extHideColor: '#c46304'

            });
        } else if (this.state.selectObjectVal == 'RR QTR SWOOSH' && val == 'MANDARIN') {
            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,

                showMBRRColors: true,
                currentMBRRColor: require('../assets/imgs/Mandarin/RRQtrSwoosh.png'),

            });
        } else if (this.state.selectObjectVal == 'SEAT INSERTS' && val == 'MANDARIN') {
            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,

                showMBseatColors: true,
                currentMBseatColor: require('../assets/imgs/Mandarin/SeatInserts.png'),
                extHideColor: '#c46304'
            });
        } else if (this.state.selectObjectVal == 'SEAT BOLSTERS' && val == 'MANDARIN') {

            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,
                showMBseatBolColors: true,
                currentMBseatBolColor: require('../assets/imgs/Mandarin/SeatBolsters.png'),
                extHideColor: '#c46304'
            });
        }
        else if (this.state.selectObjectVal == 'SEAT OUTER' && val == 'MANDARIN') {

            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,
                showseatOutColors: true,
                currentseatOutColor: require('../assets/imgs/Mandarin/MHCamel_Seat%20Backs.png'),
                extHideColor: '#c46304'
            });
        }

        else if (this.state.selectObjectVal == 'SEAT BOL OUTER' && val == 'MANDARIN') {
            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,
                showseatBolOutColors: true,
                currentseatBolOutColor: require('../assets/imgs/Mandarin/SeatBolsterOuter.png'),
                extHideColor: '#c46304'
            });
        }
        else if (this.state.selectObjectVal == 'Head Rest' && val == 'MANDARIN') {
            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,
                showHeadrestColors: true,
                currentHeadrestColor: require('../assets/imgs/Mandarin/Headrests.png'),
                extHideColor: '#c46304'
            });
        }
        else if (this.state.selectObjectVal == 'OVERMAT BINDING' && val == 'MANDARIN') {
            this.setState({
                MBcolorName: 'MANDARIN',
                MBColorList: false,
                showOvermatColors: true,
                currentOvermatColor: require('../assets/imgs/Mandarin/OvermatBinding.png'),
                extHideColor: '#c46304'
            });
        }
        else {
            this.setState({
                MBcolorName: 'SELECT COLOR',
                MBColorList: false,
                showOvermatColors: false,
                showHeadrestColors: false,
                showseatBolOutColors: false,
                showseatOutColors: true,
                showMBseatBolColors: false,
                showMBseatColors: false,
                showMBRRColors: false,
                showMBDoorColors: false,

                extHideColor: 'white'
            });
            //alert('there no selection');
        }
    }

    getColor = () => {
        return this.state.colorSplitColor;
    }
    screenshotBtn = () => {

        //handler to take screnshot
        captureScreen({
            //either png or jpg or webm (Android). Defaults to png
            format: "jpg",
            result: "base64",
            //quality 0.0 - 1.0 (default). (only available on lossy formats like jpg)
            quality: 0.8
        })
            .then(
                //callback function to get the result URL of the screnshot
                uri => this.setState({ imageURI: `data:image/jpg;base64,${uri}` }, () => {
                    /*         let a= `data:image/jpg;base64,${this.state.imageURI}`
                          console.log(a); */
                    //alert('Image successfully captured')
                }),
                error => console.error("Oops, Something Went Wrong", error)
            );
        this.setState({
            screenshotbutton: false,
            showShareIcon: true
        });
    }

    onCancel() {
        console.log("CANCEL")
        this.setState({ visible: false });
    }
    onOpen() {
        console.log("OPEN")
        this.setState({ visible: true });
    }
    backBtnclick = () => {
        this.setState({
            screenshotbutton: true,
            showShareIcon: false
        });
        this.props.navigation.navigate("Createtourtrip")
    }

    render() {
        const { colorSplitColor } = this.state;
        let shareOptions = {
            title: "React Native",
            message: "Hola mundo",
            url: "http://facebook.github.io/react-native/",
            subject: "Share Link" //  for email
        };
        let shareImageBase64 = {
            title: "React Native",
            message: "Hola mundo",
            url: this.state.imageURI,
            subject: "Share Link" //  for email
        };
        return (
            <View style={styles.mainContainer}>
                {/* <StatusBar barStyle="light-content" /> */}
                {/* <View style={styles.HeaderView}>
                    <View style={styles.HeaderMainRowView}>
                        <View style={styles.HeaderMainColView1}>
                            <TouchableOpacity
                                //style={styles.ColorsplitListView}
                                onPress={() => this.backBtnclick()}
                            //onPress={() => this.props.navigation.navigate("Createtourtrip")}
                            >
                                <Image source={require('../assets/img/back.png')} ></Image>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.HeaderMainColView2, { marginLeft: '-4%' }]}>
                            <TouchableOpacity
                                //style={styles.ColorsplitListView}
                                onPress={() => this.ColorSplitclickA()}>
                                <Image source={require('../assets/imgs/Bentley_Mulliner_Logo_icon/Bentley_Mulliner_logo.png')} ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.HeaderMainColView3}>
                            <Text style={[styles.textStyle2, { fontFamily: 'Bentley-Bold' }]}>NEW CONTINENTAL GT</Text>
                        </View>
                        <View style={styles.HeaderMainColView2}>
                            <View style={styles.headercolBtnView}>
                                {this.state.screenshotbutton ?
                                    <TouchableOpacity
                                        style={styles.headerBtnView}
                                        onPress={() => this.screenshotBtn()}>
                                        <Text style={styles.textStyle2}>PUBLISH</Text>
                                    </TouchableOpacity> : null}
                            </View>
                            <View style={styles.headercolshareView}>
                                {this.state.showShareIcon ?
                                    <TouchableOpacity onPress={() => {
                                        // Share.open(shareOptions);
                                        Share.open(shareImageBase64);
                                    }}>
                                        <Image source={require('../assets/imgs/Bentley_Continental_GT_Icon_image/Share_icon_Gray.png')} style={{ width: 35, height: 35 }}></Image>
                                    </TouchableOpacity> : null}
                            </View>

                        </View>
                        <View style={styles.HeaderMainColView1}>
                            <TouchableOpacity
                                // style={styles.HeaderMainTabTextLabel}
                                // onPress={() => this.mainColorclickPage2()}
                                onPress={() => this.props.navigation.openDrawer()}
                            >
                                <Image source={require('../assets/img/menu.png')} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View > */}
                
                <View style={styles.backgroundImage}>
                    <Image source={require('../assets/imgs/mainCar.jpg')} style={styles.imageView} ></Image>
                    <Image source={require('../assets/imgs/Mandarin/MHCamel_Seat%20Backs.png')} style={styles.imageViewSO} ></Image>
                    {this.state.showHeadrestColors ? <Image source={this.state.currentHeadRestColor} style={styles.imageView} ></Image> : null}
                    {this.state.showMBDoorColors ? <Image source={this.state.currentMBDoorColor} style={styles.imageView} ></Image> : null}
                    {this.state.showMBRRColors ? <Image source={this.state.currentMBRRColor} style={styles.imageView} ></Image> : null}
                    {this.state.showMBseatColors ? <Image source={this.state.currentMBseatColor} style={styles.imageView} ></Image> : null}
                    {this.state.showMBseatBolColors ? <Image source={this.state.currentMBseatBolColor} style={styles.imageView} ></Image> : null}
                    {this.state.showseatOutColors ? <Image source={this.state.currentseatOutColor} style={styles.imageViewSO} ></Image> : null}
                    {this.state.showseatBolOutColors ? <Image source={this.state.currentseatBolOutColor} style={styles.imageView} ></Image> : null}
                    {this.state.showHeadrestColors ? <Image source={this.state.currentHeadrestColor} style={styles.imageView} ></Image> : null}
                    {this.state.showOvermatColors ? <Image source={this.state.currentOvermatColor} style={styles.imageView} ></Image> : null}
                </View>
            </View>
        );
    }
}

