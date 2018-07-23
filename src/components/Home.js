import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GridView from 'react-native-super-grid';

const imgs ={
  'c1': require('../../resources/c1.jpg'),
  'c2': require('../../resources/c2.png'),
  'c3': require('../../resources/c3.jpg'),
  'c4': require('../../resources/c4.jpg'),
  'c5': require('../../resources/c5.jpeg'),
  'c6': require('../../resources/c6.jpg')

};
export default class Home extends React.Component {
  render() {
    return (
    //   <View style={styles.container}>
        <GridView
          itemDimension={150}
          items={['c1','c2','c3','c4','c5','c6']}
          renderItem={
            item => (
              <Image
                source={imgs[item]}
              />
            )
          }
        />
      
    //   </View>

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
