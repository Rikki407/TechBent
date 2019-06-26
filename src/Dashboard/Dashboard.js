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
    showSeatColors: false,
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
    showseatOutColors: false,
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
        showseatOutColors: false,
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
        <View style={styles.HeaderView}>
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
        </View >
        <View style={styles.SubHeaderRowView}>
          <View style={styles.SubHeaderColView1}>
            <View style={styles.colorSplitView}>
              <TouchableOpacity

                onPress={() => this.ColorSplitclick()}>
                <Text style={[styles.textStyle2, { paddingVertical: 10, paddingRight: 27 }, { backgroundColor: colorSplitColor }]}>COLOR SPLIT {this.state.colorSplitVal}</Text>
                <View style={{ position: 'absolute', marginLeft: '76%', marginTop: '12%' }}>
                  <Image source={require('../assets/imgs/Dropdown_icon.png')} style={{ width: 20, height: 10 }}></Image>
                </View>
                {/*  */}

                {/* <Text style={styles.tringleStyle}></Text> */}
              </TouchableOpacity>
            </View>
            {this.state.colorSplitClick ?
              <View style={styles.colorSplitList}>

                <TouchableOpacity
                  style={styles.ColorsplitListView}
                  onPress={() => this.ColorSplitclick1()}>
                  <Text style={[styles.textStyle1]}> COLOR SPLIT A</Text>

                  {/* <Text style={styles.tringleStyle}></Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ColorsplitListView}
                  onPress={() => this.ColorSplitclick1()}>
                  <Text style={styles.textStyle1}>COLOR SPLIT B</Text>
                  {/* <Text style={styles.tringleStyle}></Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ColorsplitListView}
                  onPress={() => this.ColorSplitclickC()}>
                  <Text style={styles.textStyle1}>COLOR SPLIT C</Text>
                  {/* <Text style={styles.tringleStyle}></Text> */}
                </TouchableOpacity>
                <TouchableOpacity

                  onPress={() => this.ColorSplitclick1()}>
                  <Text style={styles.textStyle1}>COLOR SPLIT D</Text>
                  {/* <Text style={styles.tringleStyle}></Text> */}
                </TouchableOpacity>
                <TouchableOpacity

                  onPress={() => this.ColorSplitclick1()}>
                  <Text style={styles.textStyle1}>COLOR SPLIT E</Text>
                  {/* <Text style={styles.tringleStyle}></Text> */}
                </TouchableOpacity>
              </View> : null}
          </View>
          {/* this is the main compoenent for the control panel */}
          <View style={styles.mainColorRowView}>
            <View style={styles.mainColorSubView}>

              <View style={styles.mainHideColorView}>
                <View style={styles.mainColorlabel}>
                  <TouchableOpacity

                    onPress={() => this.mainColorhideClick()}>
                    <Text style={styles.textStyle2}>MAIN HIDE</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.mainColorValue, { backgroundColor: this.state.mainHideColor }]}>

                  <TouchableOpacity

                    onPress={() => this.mainColorhideClick()}>
                    <Text style={[styles.textStyle2, { paddingVertical: 10, }, { backgroundColor: this.state.mainHideColor }]}>{this.state.selectMainColorVal}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainColorImg}>
                  <Image source={require('../assets/imgs/Dropdown_icon.png')} style={{ width: 20, height: 10, }}></Image>
                </View>
                {this.state.mainColorList ?
                  <View style={styles.mainColorListView}>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: 'white' }]}
                      onPress={() => this.mainColorListViewDataclick()}>
                      <Text style={[styles.textStyle1, { color: 'black' }]}>RESET</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#000000' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>BELUGA</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#406f8d' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>BRUNEL</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#775F45' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>BURNT OAK</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#b47800' }]}
                      onPress={() => this.mainColorListViewDataclick1()}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>CAMEL</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#336601' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>CUMBRIAN GREEN</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#8f0100' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>CRICKET BALL</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#c82600' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>HOTSPUR</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#002a7e' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>IMPERIAL BLUE</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#d7d1b9' }]}
                      onPress={() => this.mainColorListViewDataclick2()}>
                      <Text style={[styles.textStyle1, { color: 'black' }]}>LINEN</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#ffffc1' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'black' }]}>MAGNOLIA</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#c8620e' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>NEWMARKET TAN</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#717171' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>PORPOISE</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#9ea2a5' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>PORTLAND</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#9d3665' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>DAMSON</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#b15406' }]}
                      onPress={() => null}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>SADDLE</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                  </View> : null}

              </View>

              <View style={styles.secondHideColorView}>
                <View style={styles.mainColorlabel}>
                  <TouchableOpacity

                    onPress={() => this.secColorhideClick()}>
                    <Text style={styles.textStyle2}>SEC HIDE</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.mainColorValue, { backgroundColor: this.state.secHideColor }]}>
                  <TouchableOpacity

                    onPress={() => this.secColorhideClick()}>
                    <Text style={[styles.textStyle2, { color: this.state.secHidetextColor }]}>{this.state.selectSecColorVal}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainColorImg}>
                  <Image source={require('../assets/imgs/Dropdown_icon.png')} style={{ width: 20, height: 10, }}></Image>
                </View>

                {this.state.secondryColorList ?
                  <View style={styles.mainColorListView}>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: 'white' }]}
                      onPress={() => this.secColorListViewDataclick()}>
                      <Text style={styles.textStyle1}>RESET</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#000' }]}
                      onPress={() => this.secColorListViewDataclick1()}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>BELUGA</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.mainColorListDataView, { backgroundColor: '#406f8d' }]}
                      onPress={() => this.secColorListViewDataclick2()}>
                      <Text style={[styles.textStyle1, { color: 'white' }]}>BRUNEL</Text>
                      {/* <Text style={styles.tringleStyle}></Text> */}
                    </TouchableOpacity>
                  </View> : null}
              </View>

            </View>



            <View style={styles.mainColorSubView1}>
              <View style={styles.MBcolorSubView}>

                <View style={styles.secColorLabel}>
                  <Text style={styles.textStyle1}>MULLINER BESPOKE</Text>
                </View>

                <View style={styles.secObjectVal}>
                  <View style={styles.dropSelectObj}>
                    <View style={styles.dropSelectObj1}>
                      <TouchableOpacity
                        onPress={() => this.MBListViewDataclick()}>
                        <Text style={styles.textStyle1}>{this.state.selectObjectVal}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.dropSelectObj2}>
                      <TouchableOpacity
                        onPress={() => this.MBListViewDataclick()}>
                        {/* <Text style={styles.textStyle1}>img</Text> */}
                        {/* <Icon name="down" size={30}  /> */}
                        <Image source={require('../assets/imgs/Dropdown_icon.png')} style={{ width: 20, height: 10 }}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {this.state.MBlistViewData ?
                    <View style={styles.MBListViewCSS}>

                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        onPress={() => this.MBListItemclick('doorInserts')}>

                        <Text style={styles.textStyle1}>DOOR INSERTS</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        //style={styles.secColorListDataView1}
                        onPress={() => this.MBListItemclick('qtrSwoosh')}>
                        <Text style={styles.textStyle1}>RR QTR SWOOSH</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        //style={styles.mainColorListDataView2}
                        onPress={() => this.MBListItemclick('seatInserts')}>
                        <Text style={styles.textStyle1}>SEAT INSERTS</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        //style={styles.mainColorListDataView3}
                        onPress={() => this.MBListItemclick('seatBolsters')}>
                        <Text style={styles.textStyle1}>SEAT BOLSTERS</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        //style={styles.secColorListDataView4}
                        onPress={() => this.MBListItemclick('seatOuter')}>
                        <Text style={styles.textStyle1}>SEAT OUTER</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        //style={styles.secColorListDataView4}
                        onPress={() => this.MBListItemclick('seatBolout')}>
                        <Text style={styles.textStyle1}>SEAT BOL OUTER</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ColorsplitListView}
                        //style={styles.secColorListDataView4}
                        onPress={() => this.MBListItemclick('headRest')}>
                        <Text style={styles.textStyle1}>HEAD REST</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        //style={styles.ColorsplitListView}
                        //style={styles.secColorListDataView4}
                        onPress={() => this.MBListItemclick('overmatBinding')}>
                        <Text style={styles.textStyle1}>OVERMAT BINDING</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                    </View> : null}
                </View>

                <View style={styles.mainColorVal}>
                  <View style={[styles.dropSelectObj, { borderRightWidth: 1, backgroundColor: this.state.extHideColor }]}>
                    <View style={styles.dropSelectObj1}>
                      <TouchableOpacity
                        onPress={() => this.MBcolorListOpen()}>
                        <Text style={styles.textStyle1}>{this.state.MBcolorName}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.dropSelectObj2}>
                      <TouchableOpacity
                        onPress={() => this.secColorListViewDataclick2()}>
                        <Image source={require('../assets/imgs/Dropdown_icon.png')} style={{ width: 20, height: 10 }}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {this.state.MBColorList ?
                    <View style={styles.MBListViewCSS1}>
                      <TouchableOpacity
                        style={[styles.mainColorListDataView, { backgroundColor: '#white' }]}
                        onPress={() => this.MBcolorNamePick('Reset')}>
                        <Text style={styles.textStyle1}>RESET</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.mainColorListDataView, { backgroundColor: '#c46304' }]}
                        onPress={() => this.MBcolorNamePick('MANDARIN')}>
                        <Text style={styles.textStyle1}>MANDARIN</Text>
                        {/* <Text style={styles.tringleStyle}></Text> */}
                      </TouchableOpacity>
                    </View> : null}
                </View>

              </View>

            </View>
          </View>
        </View>

        <View style={styles.backgroundImage}>
          <Image source={require('../assets/imgs/mainCar.jpg')} style={styles.imageView} ></Image>
          {this.state.showSeatColors ? <Image source={this.state.currentSeatColor} style={styles.imageViewSS} ></Image> : null}
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

