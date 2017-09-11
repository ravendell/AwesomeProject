/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Splash from './splash';
import Login from './src/components/Login/login';
export default class SampleSplash extends Component{
	render(){
		return(
			<Login />
		);
	}
}
/*export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}*/

/*export default class HelloworldApp extends Component{
    render(){
        return(
            <Text>The Quick Brown Fox Jumps Over the Lazy Dog</Text>
        );
    }
}*/

/*export default class MypicSample extends Component{
    render(){

        let pic_= {
            uri: 'https://img.discogs.com/4ijlA0I5ViELCn29UlUfbUKZ1RU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-27637-1170596731.jpeg.jpg'
        };
        return(
            <Image source={pic_} style={{width: 193, height:110}}/>
        );
    }
}*/

/*export default class SampleApple extends Component{
    render(){
        let pic_ ={
           uri:'https://s-media-cache-ak0.pinimg.com/originals/56/ab/8d/56ab8d7392394faf9fe52e6a03dbf80d.jpg'
        };
        return(
            <Image source = {pic_} style={{width: 300, height:250}}/>
        );
    }
}*/

/*class Greetings extends Component {
	render(){
		return(
			<Text>Hello {this.props.name} !</Text>
		);
	}
}

export default class LotsOfGreetings extends Component{
	render(){
		return(
		<View style={{alignItems: 'center'}}>
			<Greetings name='Rexxar' />
			<Greetings name='Jaina' />
			<Greetings name='Valeera' />
			<Greetings name='Lyndell' />
		</View>
		);
	}
}*/

/*class Greetings extends Component{
	render(){
		return(
			<Text>Hello {this.props.name}! Welcome to my World</Text>
		);
	}
}
export default class LotsOfGreetings extends Component{
	render(){
		return(
			<View style={{alignItems: 'center'}}>
				<Greetings name='Victor'/>
				<Greetings name='Oliver' />
				<Greetings name='Jeffrey' />
				<Greetings name='Henry' />
			</View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

AppRegistry.registerComponent('AwesomeProject', () => SampleSplash);
