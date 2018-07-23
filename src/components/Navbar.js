import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar,
  AppRegistry,
  Platform
} from 'react-native';
import GridView from 'react-native-super-grid';


export default class Navbar extends React.Component {
  render() {
    return (
      <StatusBar 
      barStyle = "light-content" 
      hidden = {false}
      backgroundColor = "#00BCD4"
      translucent = {true}
      networkActivityIndicatorVisible = {true}
      />

    );
  }
}


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;