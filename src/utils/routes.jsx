import { Banner, BrandsPage, Categories, Dashboard, Logout, Products } from "../pages";

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Dashboard/>
    },
    {
        id: 2,
        path: '/categories',
        component: <Products/>
    },
    {
        id: 3,
        path: '/products',
        component: <Categories/>
    },
    {
        id: 4,
        path: '/login',
        component: <Logout/>
    },
    {
        id: 5,
        path: '*',
        component: <Dashboard/>
    },
    {
        id: 6,
        path: '/brands',
        component: <BrandsPage/>
    },
    {
        id: 7,
        path: '/banner',
        component: <Banner/>
    },
]