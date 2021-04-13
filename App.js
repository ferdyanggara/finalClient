import React, { useState } from 'react'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import cartReducer from './store/reducers/cart'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider as PaperProvider } from 'react-native-paper'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

const middleware = [thunk]
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

// const fetchFonts = () => {
//     return Font.loadAsync({
//         'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//         'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//     })
// }

const App = () => {
    // const [fontLoaded, setFontLoaded] = useState(false)

    // if (!fontLoaded) {
    //     return (
    //         <AppLoading
    //             startAsync={fetchFonts}
    //             onFinish={() => {
    //                 setFontLoaded(true)
    //             }}
    //         />
    //     )
    // }
    return (
        <Provider store={store}>
            <PaperProvider>
                <ShopNavigator />
            </PaperProvider>
        </Provider>
    )
}

export default App
