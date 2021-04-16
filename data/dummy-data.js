import Product from '../models/product'

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Fresh Grapes',
        'https://ripe.london/wp-content/uploads/2017/11/grapes.jpg',
        'A red t-shirt, perfect for days with non-red weather.',
        29.99,
        'Poultry'
    ),
    new Product(
        'p2',
        'u1',
        'Dragon Fruit',
        'https://avarietyoffruits.files.wordpress.com/2017/09/img_20170924_140604_833-e1506255029394.jpg',
        'Fits your red shirt perfectly. To stand on. Not to wear it.',
        99.99,
        'Meat'
    ),
    new Product(
        'p3',
        'u2',
        'Banana',
        'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg ',
        'Can also be used for tea!',
        8.99,
        'Fruits'
    ),
    new Product(
        'p4',
        'u3',
        'Melon',
        'https://static.libertyprim.com/files/familles/melon-large.jpg?1574629891',
        "What the content is? Why would that matter? It's a limited edition!",
        15.99,
        'Veggies'
    ),
    new Product(
        'p5',
        'u3',
        'Sunkist',
        'https://www.southstreammarket.com/upload/products/pbf049f6c41f24a5b9044b9e0e9798ba7.jpg?l=1604302957',
        'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
        100.99,
        'Veggies'
    ),
    new Product(
        'p6',
        'u1',
        'Apple',
        'https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg',
        "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
        5.49,
        'Veggies'
    ),
]

export default PRODUCTS
