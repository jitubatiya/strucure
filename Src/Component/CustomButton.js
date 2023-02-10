import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    const { btnStyle,btnText,btnTextStyle,onPress,btnFlag } = props
    function onPressClick(){
        onPress(btnFlag)
    }
    return (
        <TouchableOpacity onPress={onPressClick} style={btnStyle}>
            <Text style={btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default  CustomButton;