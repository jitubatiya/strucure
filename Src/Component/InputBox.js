import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';


const InputBox = (props) => {
    const { marginTop, icon, hintText, isPassword, value, onChangeText } = props
    function onChnageTextInput(value) {
        onChangeText(value, isPassword == true ? false : true)
    }
    return (
        <View style={[styles.boxView, { marginTop: marginTop }]}>
            <Image style={styles.iconStyle} source={icon} resizeMode={"contain"} />
            <TextInput
                style={styles.textInput}
                placeholder={hintText}
                placeholderTextColor={"#7f7f7f"}
                secureTextEntry={isPassword}
                value={value}
                onChangeText={onChnageTextInput}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    boxView: {
        backgroundColor: "#efefef",
        borderRadius: 8,
        height: 50,
        flex: 1,
        flexDirection: "row"
    },
    iconStyle: {
        height: 17,
        width: 17,
        alignSelf: "center",
        marginHorizontal: "3%",
        tintColor: "#d1d1d8",
        flex: 0.09
    },
    textInput: {
        color: "#7f7f7f",
        alignSelf: "center",
        flex: 0.91
    }
})
export default React.memo(InputBox);