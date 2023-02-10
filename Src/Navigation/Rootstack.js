import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/LoginPage';
import Home from '../Screen/Home';
const Stack = createNativeStackNavigator();

const RootStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false, headerBackTitleVisible: false
    }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)
export default RootStack;