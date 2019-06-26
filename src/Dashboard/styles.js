import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	mainContainer: {
		//backgroundColor:'#000'
		fontFamily: 'Bentley'
	},
	HeaderView: {
		marginTop: '1.5%',
		height: '8%',
	},
	HeaderMainRowView: {
		flex: 1,
		flexDirection: 'row',
		borderBottomColor: '#1E1E1E',
		borderBottomWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
	HeaderMainColView1: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		//	backgroundColor:'red'	
	},
	/* 	backBtnView:{
			flex:0.4,
			flexDirection: 'column',
			justifyContent:'center',
			alignItems:'center'
		
			
		}, */
	/* 	MainLogoView:{
			flex:0.6,
			flexDirection: 'column',
			justifyContent:'center',
			alignItems:'center',
			borderRightColor: '#1E1E1E',
			borderRightWidth: 1
		}, */

	HeaderMainColView2: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		//backgroundColor:'blue'	
		//marginLeft:'0.5%'
	},
	HeaderMainColView3: {
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		//paddingLeft:'-5%',
		//	backgroundColor:'yellow'	
		//marginLeft:100
	},
	HeaderLabel: {
		color: 'white',
		fontSize: 20,
	},
	headercolBtnView: {
		flex: 0.6,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		//backgroundColor:'red'
	},
	headerBtnView: {
		borderWidth: 1,
		paddingVertical: 5,
		paddingLeft: 5,
		paddingRight: 5,
		//paddingHorizontal:5
	},
	headercolshareView: {
		flex: 0.4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		//backgroundColor:'yellow'
	},
	/* 	HeaderMainColView3:{
			flex:0.4,
			flexDirection:'row',
	
		}, */
	HeaderMainTabView1: {
		flex: 0.33,
		flexDirection: 'column',
		//backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	HeaderMainTabView2: {
		flex: 0.33,
		flexDirection: 'column',
		//backgroundColor: 'green'
		justifyContent: 'center',
		alignItems: 'center',
	},
	HeaderMainTabView3: {
		flex: 0.33,
		flexDirection: 'column',
		//backgroundColor: 'white'
		justifyContent: 'center',
		alignItems: 'center',
	},
	HeaderTabTextLabel: {
		color: '#CECECE',
		fontSize: 15,
	},
	HeaderTabTextLabelBold: {
		fontWeight: 'bold',
	},
	HeaderTabTexthighlite: {
		color: 'white',
		fontSize: 22,
	},
	HeaderMainColView4: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	HeadershareView: {
		flex: 0.5,
		flexDirection: 'column'
	},
	HeaderMenuView: {
		flex: 0.5,
		flexDirection: 'column'
	},
	imageView: {

		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	imageViewSO: {
		left: 114,
		top:71.5,   
		width: '52.122%',
		height: '67.8%',
		position: 'absolute',
		tintColor: 'rgba(20,20,255,0.2)'
	},
	imageViewSS: {

		width: '100%',
		height: '100%',
		position: 'absolute',
		tintColor: 'rgba(12,240,25,0.1)'
	},


	backgroundImage: {
		justifyContent: 'center',
		width: '100%',
		height: '80.5%',
		zIndex: -1,
		//	backgroundColor:'#000'
	},
	backgroundImage1: {
		justifyContent: 'center',
		width: '100%',
		height: '90%',
		//backgroundColor:'#000'
	},
	backgroundImage2: {
		justifyContent: 'center',
		width: '100%',
		height: '90%',
		//	backgroundColor:'#000'
	},
	SubHeaderRowView: {
		//height:'0%',

		marginTop: '0.5%',
		width: '100%',
		flexDirection: 'row',
		//	backgroundColor:'black',
		height: '8%',
	},
	SubHeaderColView1: {
		justifyContent: 'center',
		flex: 0.15,
		alignItems: 'center',

	},
	colorSplitView: {
		marginLeft: '10%',
		borderWidth: 1,
		//width:'80%',
		height: '80%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: '5%',

	},
	colorSplitList: {
		top: 0,
		position: 'absolute',
		backgroundColor: 'white',
		//	marginTop: 500
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '20%',
		marginTop: '30%',
		//marginBottom:'50%',
		zIndex: 1,

	},
	mainHideColorView: {
		justifyContent: 'center',
		alignItems: 'center',
		//	backgroundColor: 'yellow',
		flex: 0.48,
		flexDirection: 'row',
		width: '100%',
		height: '80%',
		borderWidth: 1,
		//borderColor:'grey',
		// left:10
	},
	secondHideColorView: {
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: 'yellow',
		flex: 0.48,
		flexDirection: 'row',
		width: '100%',
		height: '80%',
		borderWidth: 1,
		//	borderColor:'grey',
		// left:10
	},
	ButtonStyle1: {

		//	justifyContent:'center',

		// flexDirection:'column',
	},
	textStyle1: {
		alignSelf: 'center',
		textAlign: 'center',
		height: 20,
		fontSize: 13,
		fontFamily: 'Bentley'
	},
	textStyle2: {
		fontSize: 13,
		fontFamily: 'Bentley'
	},
	mainColorRowView: {
		//	marginLeft:"2%",
		flex: 0.85,
		flexDirection: 'row',

		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		//	backgroundColor:'yellow',
	},
	mainColorSubView: {
		flex: 0.5,
		flexDirection: 'row',
		// backgroundColor:'yellow',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	mainColorSubView1: {
		flex: 0.5,
		flexDirection: 'row',

		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',

	},
	mainColorlabel: {

		flex: 0.4,
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	mainColorValue: {
		flex: 0.5,
		flexDirection: 'column',
		borderWidth: 1,
		borderColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
		height: '80%'
	},
	mainColorImg: {
		flex: 0.1,
		flexDirection: 'column'
	},
	mainColorListView: {
		position: 'absolute',
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		top: 0,
		left: '40%',
		marginTop: '20%',

		//marginLeft:'10%',
		zIndex: 1
	},
	MBListViewCSS: {
		/* 	position:'absolute',
			backgroundColor:'white',
			justifyContent: 'center',
			alignItems:'center',
			width:'100%',
			height:'100%',
			top:0,
			marginTop:'10%',
			zIndex:1 */
		top: 0,
		position: 'absolute',
		backgroundColor: 'white',
		//	marginTop: 500
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingRight: 10,
		paddingVertical: 12,
		//marginLeft:'20%',
		marginTop: '30%',
		paddingHorizontal: 6,
		width: '100%',
		//marginBottom:'50%',
		zIndex: 1,
	},
	MBListViewCSS1: {
		position: 'absolute',
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '250%',
		top: 0,
		marginTop: '30%',
		zIndex: 1
	},
	// mainColorListDataView0:{
	// 	//backgroundColor:'red',
	// 	justifyContent: 'center',
	// 	alignItems:'center',
	// 	width:'70%'
	// },
	ColorsplitListView: {
		marginVertical: '1%'
	},
	mainColorListDataView: {
		width: '90%',
		paddingVertical: 5,
		marginVertical: '2%'
	},
	MBcolorSubView: {
		flex: 1,
		flexDirection: 'row',
		//backgroundColor:'red'
		height: '70%'
	},
	secColorLabel: {
		flex: 0.33,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//	backgroundColor:'green'
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderTopWidth: 1

	},

	secObjectVal: {
		flex: 0.33,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor:'blue',
		height: '100%'
	},
	mainColorVal: {
		flex: 0.33,
		//flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',


	},
	dropSelectObj: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '80%',
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderTopWidth: 1
	},
	dropSelectObj1: {
		flex: 0.8,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//height:'70%'
	},
	dropSelectObj2: {
		flex: 0.2,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//height:'70%'
	},
});
export default styles;