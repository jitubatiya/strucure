/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './Src/Navigation/Rootstack';

const App=()=>{
  return(
   <NavigationContainer>
      <RootStack/>
   </NavigationContainer>
  )
}
export default App;
