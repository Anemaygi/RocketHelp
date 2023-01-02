import { NativeBaseProvider, StatusBar} from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SignIn } from './src/interfaces/SignIn';
import { Loading } from './src/components/Loading'
import { Home } from './src/interfaces/Home';

import { THEME } from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>  
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    {fontsLoaded ? <SignIn/>:<Loading/>}
    </NativeBaseProvider>

  );
  // SignIn está dentro do contexto do NativeBaseProvider
  // logo, pode ter acesso a tudo que esse contexto oferece
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
