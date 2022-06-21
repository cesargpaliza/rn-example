import React from 'react'
import { SafeAreaView } from 'react-native'
import { FlexScreen } from './src/screens/FlexScreen'
// import { PositionScreen } from './src/screens/PositionScreen'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
// import { ContadorScreen } from './src/screens/ContadorScreen'
// import { DimensionesScreen } from './src/screens/DimensionesScreen';



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlexScreen/>
    </SafeAreaView>    
  )
}

export default App
