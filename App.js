import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';

import Home from './src/components/Home';
import Navbar from './src/components/Navbar';

export default class App extends React.Component {
  // render() {
  //   let pic = {
  //     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  //   };


  //   return (
  //     <View style={styles.container}>
  //       {/* <Text>Open up App.js to start working on your app! </Text>
  //       <Text>Changes you make will automatically reload.</Text>
  //       <Text>Shake your phone to open the developer menu.</Text>

  //       <Image source={pic} style={{width: 193, height: 110}}/> */}
  //       <Navbar />
  //       <Home />
  //     </View>

  //   );
  // }

  render() {
    
      return (
    
        <View style={styles.MainContainer}>
    
           <StatusBar 
           barStyle = "light-content" 
           hidden = {false}
           backgroundColor = "#00BCD4"
           translucent = {true}
           networkActivityIndicatorVisible = {true}
           />
    
           <Text style={{textAlign : 'center', fontSize: 25}}> React Native Status Bar Example Tutorial </Text>
    
        </View>
      );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  
 MainContainer :{
  
 justifyContent: 'center',
 flex:1,
 marginTop: (Platform.OS == 'ios') ? 20 : 0
  
 }
  
 });
