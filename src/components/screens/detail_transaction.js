import React, {Component} from 'react';
import { View, Text } from 'react-native';

class DetailTransaction extends Compoennt {
    static navigationOptions = {
        headerShown: false,
      };
    render () {
        return (
            <>
            <View>
                <Text>
                Ini detail transcation
                </Text>
            </View>
            </>     
        )
    }
 }

 export default DetailTransaction