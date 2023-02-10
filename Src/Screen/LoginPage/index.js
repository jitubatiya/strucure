import React, { useState, useMemo } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../Component/CustomButton';
import InputBox from '../../Component/InputBox';
import { images } from '../../Resource/Images';
import { strings } from '../../Resource/Strings';
import styles from './Styles';
import Toast from 'react-native-simple-toast';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onChangeText = (value, isEmail) => {
        isEmail == true ? setEmail(value) : setPassword(value)
    }
    const onPress = (flag) => {
        if (flag == "signIn") {
            signInProcess()
        }
    }
    function signInProcess() {
        if (strings.emailReg.test(email.trim()) === false) {
            Toast.show("Email is Not Correct", Toast.LONG)
        }
        else if (password.trim().length == 0) {
            Toast.show("Password is Not Empty", Toast.LONG)
        }
        else
            props.navigation.navigate("Home")
    }
    const emailBoxView = () => {
        return (
            <InputBox
                marginTop={'10%'}
                icon={images.emailIcon}
                hintText={strings.emailHintText}
                isPassword={false}
                value={email}
                onChangeText={onChangeText}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#9a3324"
            />
            <ScrollView
                keyboardShouldPersistTaps='handled'
                style={styles.scrollViewStyle}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.txtStyle}>{strings.signIn}</Text>
                <Text style={styles.txtHintStyle}>{strings.labelText}</Text>
                {useMemo(() => emailBoxView(), [email])}
                {useMemo(() =>
                    <InputBox
                        marginTop={'10%'}
                        icon={images.lockIcon}
                        hintText={strings.passwordHintText}
                        isPassword={true}
                        value={password}
                        onChangeText={onChangeText}

                    />, [password])}
                <Text style={styles.txtForgetStyle}>{strings.txtForgetPassword}</Text>
                <CustomButton
                    btnStyle={styles.signInBtn}
                    btnText={strings.signIn}
                    btnTextStyle={styles.btnTextSignStyle}
                    onPress={onPress}
                    btnFlag={"signIn"}
                />

            </ScrollView>
            <View style={styles.bottomView}>
                <Text style={styles.txtDontHave}>{strings.txtDontHave}</Text>
                <CustomButton
                    btnStyle={styles.contactBtn}
                    btnText={strings.contactText}
                    btnTextStyle={styles.btnTextContactStyle}
                    onPress={onPress}
                    btnFlag={"contactus"}

                />
            </View>
        </SafeAreaView>
    )
}
export default Login