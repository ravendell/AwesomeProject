import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default class Splash extends Component{
	render(){
		return(
			<View style={styles.wrapper}>
				<View style={styles.titlewrapper}>
					<Text style={styles.title}>BINHI-MEDFI</Text>
					<Text style={styles.subtitle}>Mobile Payroll System</Text>
				</View>
				<View>
					<Text style={styles.footers}>2017- ALL RIGHTS RESERVED</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper:{
		flex:1,
		backgroundColor: '#2ecc71',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titlewrapper:{
		flex: 1,
		justifyContent: 'center',
	},
	title:{
		color: 'white',
		fontSize: 60,
		fontWeight: 'bold',
	},
	subtitle:{
		paddingBottom: 40,
		paddingLeft: 50,
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: '200',
		color: 'white',
		fontSize: 25,
	},
	footers:{
		paddingBottom: 40,
		fontWeight: '200',
		color: 'white',
		fontSize: 20,
	}
	
});