// import React from 'react'
// import {
//     StyleSheet,
//     View,
//     Text,
//     Dimensions,
//     TouchableOpacity,
//     Platform,
// } from 'react-native'

// import MapView, {
//     ProviderPropType,
//     Marker,
//     AnimatedRegion,
// } from 'react-native-maps'

// const screen = Dimensions.get('window')

// const ASPECT_RATIO = screen.width / screen.height
// const LONGITUDE_DELTA = 0.0922 * ASPECT_RATIO

// class AnimatedMarkers extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             marker: new Marker(),
//             coordinate: new AnimatedRegion({
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//             }),
//         }
//     }

//     animate() {
//         const { coordinate } = this.state
//         const newCoordinate = {
//             latitude: 37.78825 + (Math.random() - 0.5) * (0.0922 / 2),
//             longitude:
//                 -122.4324 + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
//         }

//         if (Platform.OS === 'android') {
//             if (this.marker) {
//                 this.state.markers.animateMarkerToCoordinate(
//                     {
//                         latitude:
//                             37.78825 + (Math.random() - 0.5) * (0.0922 / 2),
//                         longitude:
//                             -122.4324 +
//                             (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
//                     },
//                     500
//                 )
//             }
//         }
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <MapView
//                     provider={this.props.provider}
//                     style={styles.map}
//                     showsUserLocation
//                     initialRegion={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: LONGITUDE_DELTA,
//                     }}
//                 >
//                     <Marker.Animated
//                         ref={(marker) => {
//                             this.marker = marker
//                         }}
//                         coordinate={this.state.coordinate}
//                     />
//                 </MapView>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity
//                         onPress={() => this.animate()}
//                         style={[styles.bubble, styles.button]}
//                     >
//                         <Text>Animate</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

// AnimatedMarkers.propTypes = {
//     provider: ProviderPropType,
// }

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     bubble: {
//         flex: 1,
//         backgroundColor: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 18,
//         paddingVertical: 12,
//         borderRadius: 20,
//     },
//     latlng: {
//         width: 200,
//         alignItems: 'stretch',
//     },
//     button: {
//         width: 80,
//         paddingHorizontal: 12,
//         alignItems: 'center',
//         marginHorizontal: 10,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         marginVertical: 20,
//         backgroundColor: 'transparent',
//     },
// })

// export default AnimatedMarkers
