import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet 
} from 'react-native';
export default class Splash extends Component {
	render(){
		return (
			<View style={styles.wrapper}>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>BINHI-MEDFI </Text>			
				</View>
				<View>
					<Text style={styles.subtitle}>2017-All RIGHTS RESERVED</Text>				
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper:{
		backgroundColor: '#2ecc71',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title:{
		color: 'white',
		fontSize: 65,
		fontWeight: 'bold',
	},
	subtitle:{
		color: 'white',
		fontSize: 20,
		fontWeight: '200',
		paddingBottom: 40,
	},
	titleWrapper:{
		flex: 1,
		justifyContent: 'center',
	},
});