import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContainer:{
		//backgroundColor:'#000'
	},
HeaderView:{
    marginTop:'1.5%',
    height:'5%',
},
HeaderMainRowView:{
    flex:1,
    flexDirection:'row',
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 2
},
HeaderMainColView1:{
    flex:0.2,
    flexDirection:'row',		
},
backBtnView:{
    flex:0.4,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
    //borderWidth: 2,
    
},
MainLogoView:{
    flex:0.6,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    borderRightColor: '#1E1E1E',
    borderRightWidth: 1
},

HeaderMainColView2:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    //marginLeft:'0.5%'
},
HeaderLabel:{
    color: 'white',
    fontSize:24,
},
HeaderMainColView3:{
    flex:0.4,
    flexDirection:'row',
    //borderWidth: 2,
    //backgroundColor: 'blue',
},
HeaderMainTabView1:{
    flex:0.33,
    flexDirection:'column',
    //backgroundColor: 'red',
    justifyContent:'center',
    alignItems:'center',
},
HeaderMainTabView2:{
    flex:0.33,
    flexDirection:'column',
    //backgroundColor: 'green'
    justifyContent:'center',
    alignItems:'center',
},
HeaderMainTabView3:{
    flex:0.33,
    flexDirection:'column',
    //backgroundColor: 'white'
    justifyContent:'center',
    alignItems:'center',
},
HeaderTabTextLabel:{
    color:'#CECECE',
    fontSize:20,
},
HeaderTabTextLabelBold:{
    fontWeight:'bold',
},
HeaderTabTexthighlite:{
    color:'white',
    fontSize:22,
},
HeaderMainColView4:{
    flex:0.1,
    flexDirection:'row',
    //borderWidth: 2,
    //backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
},
HeadershareView:{
flex:0.5,
flexDirection:'column'
},
HeaderMenuView:{
    flex:0.5,
    flexDirection:'column'
},
imageView:{

    width:'100%',
    height: '100%',
    position: 'absolute',
},
});