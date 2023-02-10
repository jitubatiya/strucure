import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewStyle: {
        marginHorizontal: 40,
        flex: 1,
        marginBottom:10
    },
    txtStyle: {
        color: "#202150",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: "30%"
    },
    txtHintStyle: {
        color: "#7f7f7f",
        fontSize: 15,
        fontWeight: "400",
        marginTop: "5%"
    },
    txtForgetStyle: {
        color: "#0076c0",
        fontSize: 18,
        fontWeight: "500",
        marginVertical: "8%",
        alignSelf: "center"
    },
    signInBtn: {
        backgroundColor: "red",
        height: 50,
        flex: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    btnTextSignStyle: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    bottomView: {
        bottom: 0, flex:0.3,
        backgroundColor: "#53565a",
        justifyContent: "center"
    },
    txtDontHave:{
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        alignSelf:"center",
        marginBottom:10
    },
    contactBtn: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal:'10%'
    },
    btnTextContactStyle: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    },
})
export default styles