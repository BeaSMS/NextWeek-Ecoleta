import React from 'react';
import {AppLoading} from 'expo';
import { StatusBar } from 'react-native';
import {Ubuntu_700Bold} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto';
import Routes from './src/routes';
export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  })

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent
      />
      <Routes/>
    </>
  );
}