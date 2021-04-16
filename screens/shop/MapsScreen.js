import MapView, { Marker, AnimatedRegion, Overlay } from 'react-native-maps'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Platform, ActivityIndicator } from 'react-native'
import * as Permissions from 'expo-permissions'
import { usePermissions } from 'expo-permissions'
import * as Location from 'expo-location'
import {
    Alert,
    StyleSheet,
    View,
    Dimensions,
    Button as RegularButton,
} from 'react-native'
import Animated from 'react-native-reanimated'
import { Headline, Provider as PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import BottomSheet from 'reanimated-bottom-sheet'
import { Text, Button } from 'react-native-elements'

const MapsScreen = ({ navigation }) => {
    const [cardCounter, setcardCounter] = useState(0)
    let counter = 0
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button
                        style={{ marginHorizontal: 10 }}
                        onPress={async () => {
                            await setcardCounter((prev) => prev + 1)
                            counter++
                            console.log('counter: ', cardCounter)
                            console.log('not state ctr: ', counter)
                            if (counter > 2) {
                                navigation.navigate('ProductOverview')
                                counter = 0
                                setcardCounter(0)
                            }
                        }}
                        icon={
                            <Icon
                                name="check-circle-o"
                                size={30}
                                color="green"
                            />
                        }
                        type="clear"
                        titleStyle={{
                            color: 'green',
                        }}
                    />
                )
            },
        })
    }, [navigation])

    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(true)
    const [permission, askPermission] = usePermissions(Permissions.LOCATION, {
        ask: true,
    })
    const [selectedLocation, setSelectedLocation] = useState()

    const askForeground = async () => {
        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
        })
        setLocation(location)
        setLoading(false)
    }

    useEffect(() => {
        askForeground()
        // setTimeout(() => {
        //     Alert.alert('Driver Found!', `ETA: 13 Minutes`)
        // }, 5000)
    }, [])

    let text = 'Waiting..'
    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        text = JSON.stringify(location)
    }

    const renderContent = () => {
        switch (cardCounter) {
            case 0:
                return (
                    <>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 150,
                                flexDirection: 'column',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    padding: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text h4>Looking for a driver..</Text>
                            </View>
                            <View>
                                <Button
                                    title="Cancel Order"
                                    type="clear"
                                    titleStyle={{ color: 'red' }}
                                />
                            </View>
                        </View>
                    </>
                )
            case 1:
                return (
                    <>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 150,
                                flexDirection: 'column',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    padding: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text h4>Order ETA: 15 Min</Text>
                            </View>
                            <View>
                                <Button
                                    disabled={true}
                                    title="Cancel Order"
                                    type="clear"
                                    titleStyle={{ color: 'red' }}
                                />
                            </View>
                        </View>
                    </>
                )
            default:
                return (
                    <>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 150,
                                flexDirection: 'column',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    padding: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text h4>Order Arrived</Text>
                            </View>
                            <View>
                                <Button
                                    onPress={() => {
                                        console.log('click')
                                        navigation.navigate('ProductOverview')
                                    }}
                                    icon={
                                        <Icon
                                            name="check-circle-o"
                                            size={30}
                                            color="green"
                                        />
                                    }
                                    type="clear"
                                    titleStyle={{ color: 'green' }}
                                />
                            </View>
                        </View>
                    </>
                )
        }
    }

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )

    const sheetRef = React.useRef(null)

    let fall = new Animated.Value(1)

    // let newMarker = React.createRef()

    // const animateMarker = () => {
    //     newMarker.current.animateMarkerToCoordinate(
    //         {
    //             latitude: 22.418138,
    //             longitude: 114.087709,
    //         },
    //         1000
    //     )
    // }

    // useEffect(() => {
    //     animateMarker()
    // }, [])

    let content = loading ? (
        <ActivityIndicator style={{ flex: 1 }} animating size="large" />
    ) : (
        <View style={styles.container}>
            <MapView
                showsUserLocation={true}
                followsUserLocation={true}
                zoomTapEnabled={true}
                initialRegion={{
                    latitude: location?.coords?.latitude,
                    longitude: location?.coords?.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.mapStyle}
            >
                <Marker
                    coordinate={{
                        latitude: location?.coords?.latitude,
                        longitude: location?.coords?.longitude,
                    }}
                />
            </MapView>
            {/* <View style={styles.elevatedElement}> */}
            <BottomSheet
                ref={sheetRef}
                snapPoints={[200, 150]}
                initialSnap={1}
                borderRadius={10}
                callbackNode={fall}
                renderContent={renderContent}
                renderHeader={renderHeader}
                enabledGestureInteraction={true}
                enabledInnerScrolling={false}
            />
            {/* </View> */}
        </View>
    )

    return <>{content}</>
}

export default MapsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    elevatedElement: {
        zIndex: 1,
    },
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
})
