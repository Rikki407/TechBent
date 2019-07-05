import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	Dimensions
} from "react-native";

const TPRC = 0.2;

var resolveAssetSource = require('resolveAssetSource');
var imgSrc = resolveAssetSource(require('../assets/imgs/mainCar.jpg'));
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_RATIO = imgSrc.height / imgSrc.width;
const IMAGE_HEIGHT = (SCREEN_WIDTH * IMAGE_RATIO) - 0.1875;

console.log("BAAP", IMAGE_HEIGHT, SCREEN_HEIGHT);
const SI_HD = (SCREEN_HEIGHT - IMAGE_HEIGHT)/2;
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

		width: SCREEN_WIDTH,
		height: SCREEN_WIDTH * IMAGE_RATIO
	},
	imageViewA: {
		left: .2025*SCREEN_WIDTH,
		top: (.169*IMAGE_HEIGHT)+SI_HD,
		width: .57291666*SCREEN_WIDTH,
		height: .83055555*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(245,150,7,'+TPRC+')',
	},
	imageViewB: {
		left: .315*SCREEN_WIDTH,
		top: (.341*IMAGE_HEIGHT)+SI_HD,
		width: .456640625*SCREEN_WIDTH,
		height: .394444444*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(0,250,0,'+TPRC+')',
	},
	imageViewC: {
		left: .12*SCREEN_WIDTH,
		top: (.115*IMAGE_HEIGHT)+SI_HD,
		width: .52122*SCREEN_WIDTH,
		height: .678*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(200,20,255,'+TPRC+')',
	},
	imageViewD: {
		left: .449*SCREEN_WIDTH,
		top: (.645*IMAGE_HEIGHT)+SI_HD,
		width: .285807291*SCREEN_WIDTH,
		height: .153009259*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(2,255,255,'+TPRC+')',
	},
	imageViewE: {
		left: .29*SCREEN_WIDTH,
		top: (.205*IMAGE_HEIGHT)+SI_HD,
		width: .4546875*SCREEN_WIDTH,
		height: .79351851*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(150,150,250,'+TPRC+')',
	},
	imageViewF: {
		left: .1398*SCREEN_WIDTH,
		top: (.182*IMAGE_HEIGHT)+SI_HD,
		width: .500390625*SCREEN_WIDTH,
		height: .534953703*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(255,255,0,'+TPRC+')',
	},
	imageViewG: {
		left: .128*SCREEN_WIDTH,
		top: (.115*IMAGE_HEIGHT)+SI_HD,
		width: .513020*SCREEN_WIDTH,
		height: .616666*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(0,200,200,'+TPRC+')',
	},
	imageViewH: {
		left: .142*SCREEN_WIDTH,
		top: (.114*IMAGE_HEIGHT)+SI_HD,
		width: .31197916*SCREEN_WIDTH,
		height: .384027*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(255,0,0,'+TPRC+')',
	},

	imageViewI: {
		left: .4668*SCREEN_WIDTH,
		top: (.195*IMAGE_HEIGHT)+SI_HD,
		width: .2904947*SCREEN_WIDTH,
		height: .8043981*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(255,0,50,'+TPRC+')',
	},
	imageViewJ: {
		left: .205*SCREEN_WIDTH,
		top: (.2*IMAGE_HEIGHT)+SI_HD,
		width: .206510416*SCREEN_WIDTH,
		height: .18819444*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(12,250,0,'+TPRC+')',
	},
	imageViewK: {
		left: .252*SCREEN_WIDTH,
		top: (.231*IMAGE_HEIGHT)+SI_HD,
		width: .4076822916*SCREEN_WIDTH,
		height: .508101851*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(255,0,0,'+TPRC+')',
	},
	imageViewL: {
		left: .507*SCREEN_WIDTH,
		top: (.471*IMAGE_HEIGHT)+SI_HD,
		width: .15247395*SCREEN_WIDTH,
		height: .048611111*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(255,0,0,'+TPRC+')',
	},
	imageViewM: {
		left: .596*SCREEN_WIDTH,
		top: (.197*IMAGE_HEIGHT)+SI_HD,
		width: .07578125*SCREEN_WIDTH,
		height: .146759259*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(250,150,0,'+TPRC+')',
	},
	imageViewN: {
		left: .6428*SCREEN_WIDTH,
		top: (.167*IMAGE_HEIGHT)+SI_HD,
		width: .23372395*SCREEN_WIDTH,
		height: .56041666*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(200,150,120,'+TPRC+')',
	},
	imageViewO: {
		left: .462*SCREEN_WIDTH,
		top: (.407*IMAGE_HEIGHT)+SI_HD,
		width: .07838541*SCREEN_WIDTH,
		height: .07569444*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(210,150,220,'+TPRC+')',
	},
	imageViewP: {
		left: .595*SCREEN_WIDTH,
		top: (.192*IMAGE_HEIGHT)+SI_HD,
		width: .0502604*SCREEN_WIDTH,
		height: .15416666*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(255,0,0,'+TPRC+')',
	},

	imageViewQ: {
		left: .0*SCREEN_WIDTH,
		top: (.146*IMAGE_HEIGHT)+SI_HD,
		width: .2493489*SCREEN_WIDTH,
		height: .2981481*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(2,250,250,'+TPRC+')',
	},
	imageViewR: {
		left: .435*SCREEN_WIDTH,
		top: (.342*IMAGE_HEIGHT)+SI_HD,
		width: .3455729*SCREEN_WIDTH,
		height: .5092592*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(54,2,242,'+TPRC+')',
	},
	imageViewS: {
		left: .609*SCREEN_WIDTH,
		top: (.41*IMAGE_HEIGHT)+SI_HD,
		width: .0154947*SCREEN_WIDTH,
		height: .03101851*SCREEN_WIDTH * IMAGE_RATIO,
		position: 'absolute',
		tintColor: 'rgba(254,0,255,0.2)',
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
		height: '100%',
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