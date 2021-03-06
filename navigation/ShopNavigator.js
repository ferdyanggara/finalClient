import React, { useEffect } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import ShopScreen from '../screens/shop/ShopScreen'
import DrawerContent from '../screens/shop/DrawerContent'

// import AuthScreen from '../screens/user/AuthScreen'

import AsyncStorage from '@react-native-community/async-storage'
import { AuthContext } from '../components/context'
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from 'react-native-paper'
import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native'
import RootStackScreen from '../screens/user/RootStackScreen'
// import ShopDrawerScreen from '../screens/shop/DrawerScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// const defaultNavOptions = {
//     headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
//     },
//     headerTitleStyle: {
//         fontFamily: 'open-sans-bold',
//     },
//     headerBackTitleStyle: {
//         fontFamily: 'open-sans',
//     },
//     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
// }

const Stack = createStackNavigator()

// const ProductOverview = () => {
//   return (
//     <Text>Hel</Text>
//   )
// }

const ShopNavigator = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    }

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            text: '#333333',
        },
    }

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#333333',
            text: '#ffffff',
        },
    }

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                }
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
        }
    }

    const [loginState, dispatch] = React.useReducer(
        loginReducer,
        initialLoginState
    )

    const authContext = React.useMemo(
        () => ({
            signIn: async (foundUser) => {
                // setUserToken('fgkj');
                // setIsLoading(false);
                const userToken = String(foundUser[0].userToken)
                const userName = foundUser[0].username

                try {
                    await AsyncStorage.setItem('userToken', userToken)
                } catch (e) {
                    console.log(e)
                }
                // console.log('user token: ', userToken);
                dispatch({ type: 'LOGIN', id: userName, token: userToken })
            },
            signOut: async () => {
                // setUserToken(null);
                // setIsLoading(false);
                try {
                    await AsyncStorage.removeItem('userToken')
                } catch (e) {
                    console.log(e)
                }
                dispatch({ type: 'LOGOUT' })
            },
            signUp: () => {
                // setUserToken('fgkj');
                // setIsLoading(false);
            },
            toggleTheme: () => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme)
            },
        }),
        []
    )

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            let userToken
            userToken = null
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch (e) {
                console.log(e)
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
        }, 1000)
    }, [])

    if (loginState.isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        )
    }

    const Drawer = createDrawerNavigator()

    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme={theme}>
                    <Drawer.Navigator
                        drawerContent={(props) => <DrawerContent {...props} />}
                    >
                        {loginState.userToken !== null ? (
                            <>
                                <Drawer.Screen
                                    name="ShopScreen"
                                    options={{ headerShown: false }}
                                    component={ShopScreen}
                                />
                                {/* <Drawer.Screen
                                    name="ShopDrawerScreen"
                                    options={{ headerShown: false }}
                                    component={ShopDrawerScreen}
                                /> */}
                            </>
                        ) : (
                            <Drawer.Screen
                                name="RootStackScreen"
                                options={{ headerShown: false }}
                                component={RootStackScreen}
                            />
                        )}
                    </Drawer.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    )
}

export default ShopNavigator
