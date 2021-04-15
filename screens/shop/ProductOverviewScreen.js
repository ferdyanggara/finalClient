import { FlatList } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, Platform, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'
import HeaderButton from '../../components/UI/HeaderButton'
import Colors from '../../constants/Colors'
import { TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-paper'
const ProductOverviewScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButton
                        title="Cart"
                        iconName={
                            Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                        }
                        action={() => {
                            navigation.navigate('CartScreen')
                        }}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.availableProducts)
    console.log('products 1: ', products)

    const [productsToRender, setproductsToRender] = useState(products)

    const filterCategories = [
        {
            type: 'Fruits',
            color: 'orange',
        },
        {
            type: 'Veggies',
            color: 'green',
        },
        {
            type: 'Meat',
            color: 'red',
        },
        {
            type: 'Poultry',
            color: 'blue',
        },
        {
            type: 'All',
            color: 'black',
        },
    ]

    const filterContent = (type) => {
        if (type === 'All') {
            console.log('products: ', products)
            setproductsToRender(products)
        } else {
            console.log('test', type)
            const result = products.filter((each) => each.type == type)
            console.log('products:', result)
            setproductsToRender(result)
        }
    }

    return (
        <View>
            <View style={{ flex: 1, marginTop: 5 }}>
                <FlatList
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'space-around',
                    }}
                    horizontal={true}
                    data={filterCategories}
                    renderItem={(each) => {
                        return (
                            <Button
                                color={each.item.color}
                                dark={true}
                                icon="camera"
                                mode="contained"
                                disabled={false}
                                onPress={() => {
                                    filterContent(each.item.type)
                                }}
                            >
                                {each.item.type}
                            </Button>
                        )
                    }}
                />
            </View>
            <FlatList
                data={productsToRender}
                renderItem={(itemData) => {
                    return (
                        <ProductItem
                            image={itemData.item.imageUrl}
                            title={itemData.item.title}
                            price={itemData.item.price}
                            // onSelect={() => {
                            //     selectItemHandler(
                            //         itemData.item.id,
                            //         itemData.item.title
                            //     )
                            // }}
                            onViewDetail={() => {
                                navigation.navigate('ProductDetailScreen', {
                                    productId: itemData.item.id,
                                    productTitle: itemData.item.title,
                                })
                            }}
                            onAddToCart={() => {
                                dispatch(cartActions.addToCart(itemData.item))
                            }}
                        ></ProductItem>
                    )
                }}
            /></View>
    )
}

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    button: {
        borderRadius: 25,
        elevation: 10,
    },
})

export default ProductOverviewScreen
