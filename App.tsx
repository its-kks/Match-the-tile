import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/GridGame/Home'
import Grid from './components/GridGame/Grid';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: 'yellow'
    //       },
    //       headerTintColor: 'red',
    //       headerTitleStyle: {
    //         fontSize: 30
    //       }
    //     }}
    //   >
    //     <Stack.Screen name="Login" component={Login}
    //       options={{
    //         headerLeft: () => {
    //           return (
    //             <Button title='Left' />
    //           )
    //         },
    //         headerRight: () => {
    //           return (
    //             <Button title='Right' />
    //           )
    //         },
    //         headerTitle:()=>{
    //           return(
    //             <Button title='Title'/>
    //           )
    //         }
    //       }} />
    //     <Stack.Screen name="Home" component={Home}
    //       options={{
    //         headerLeft: () => {
    //           return (
    //             <Button title='Left' />
    //           )
    //         },
    //         headerRight: () => {
    //           return (
    //             <Button title='Right' />
    //           )
    //         },
    //         headerStyle: {
    //           backgroundColor: 'red'
    //         },
    //         headerTintColor: 'yellow',
    //         headerTitleStyle: {
    //           fontSize: 15
    //         }
    //       }}
    //     />
    //   </Stack.Navigator>

    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Game" component={Grid}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}

// const Home = () => {
//   return (
//     <View>
//       <Text style={{ color: 'black' }}>Home Screen</Text>
//     </View>
//   )
// }

// // this naviagation prop is passed by React Navigation library
// const Login = ({ navigation }) => {
//   return (
//     <View>
//       <Text style={{ color: 'black' }}>Login Screen</Text>
//       <Button onPress={() => {
//         navigation.navigate("Home")

//       }} title='Next'></Button>
//     </View>
//   )
// }

export default App;


{/* <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'yellow'
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontSize: 30
      }
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home}
      options={{
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTintColor: 'yellow',
        headerTitleStyle: {
          fontSize: 15
        }
      }}
    />
  </Stack.Navigator>

</NavigationContainer> */}