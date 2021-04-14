import React from 'react'

const TotalOrderListScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButton
                        title="Refresh"
                        iconName={"refresh"}
                        action={checkJob}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])
    return (
        
    )
}

export default TotalOrderListScreen
