import React, {component } from 'react';

import {
    Text,
    View,
    StyleSheet
  } from 'react-native';
const ScreenH1 = function () {
   return (
        <View>
        <Text style={styles.headerStyle}>
         Library
        </Text>
        </View>
      );

    }

    const styles = StyleSheet.create({
        headerStyle: { marginTop: 50}
    })
export default ScreenH1