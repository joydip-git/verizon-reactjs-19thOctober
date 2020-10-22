import ProductContainer from '../containers/Product/ProductContainer'
import Home from '../components/Common/Home/Home'
import AddProduct from '../components/Product/AddProduct/AddProduct'
import UpdateProduct from '../components/Product/UpdateProduct/UpdateProduct'
import ProductDetail from '../components/Product/ProductDetail/ProductDetail'

export const routeList = [
    {
        routeId: 1,
        routePath: '/',
        componentName: Home
    },
    {
        routeId: 2,
        routePath: '/home',
        componentName: Home
    },
    {
        routeId: 3,
        routePath: '/products',
        componentName: ProductContainer
    },
    {
        routeId: 4,
        routePath: '/product/add',
        componentName: AddProduct
    },
    {
        routeId: 5,
        routePath: '/product/:id',
        componentName: ProductDetail
    },
    {
        routeId: 6,
        routePath: '/product/update/:id',
        componentName: UpdateProduct
    }
]