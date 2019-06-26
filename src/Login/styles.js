import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//marginTop: 0%',
		//justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#F5FCFF',
		//flexDirection: 'column',
},
		backgroundImage:{
		width:'100%',
		height:'100%',
		opacity: .7,
		resizeMode: 'cover',
	},
/* 	backgroundImage: {
		flex: 1,
    resizeMode: 'cover',
	}, */
	loginMainContainerStyle:{
		marginTop:'20%',
		/* borderWidth: 2,
		borderColor: 'red', */
		position: 'absolute',
		width: "80%",
		 zIndex: 1
	},
	loginContainerStyle:{
		
	},
	
	loginBoxStyle: {
	 borderBottomWidth: 1,
	 fontSize:20,
	 color:"black",
	 marginTop:3,
	// marginBottom: -10
	},
	loginButtonStyle:{
marginTop: '10%',
//justifyContent: 'center',
//alignItems: 'center',
//width:'100%'
//height:"100%"

	},
	ButtonStyle:{
		//backgroundImage: linearGradient(red, yellow),
		alignItems: 'center',
   backgroundColor: '#fff',
		padding: 10,
		borderRadius: 30,
  
		
	},
	ButtonTextStyle:{
		fontSize:20,
		fontWeight:"bold"
	}
  });
export default styles;