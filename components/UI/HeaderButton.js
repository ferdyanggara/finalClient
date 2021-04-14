import React from 'react'
import { Platform, Button, View } from 'react-native'
// import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'

const CustomHeaderButton = ({ iconName, action }) => {
    return (
        // <HeaderButton
        //     {...props}
        //     IconComponent={Ionicons}
        //     iconSize={23}
        //     color={Platform.OS === 'android' ? 'white' : Colors.primary}
        // />
        <TouchableOpacity onPress={action}>
            <View>
                <FontAwesome
                    name={iconName}
                    size={23}
                    color={Platform.OS === 'android' ? 'white' : Colors.primary}
                />
            </View>
        </TouchableOpacity>
    )
}

export default CustomHeaderButton
