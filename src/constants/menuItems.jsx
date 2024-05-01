import { Link } from "react-router-dom";
import {
    AlignLeftOutlined,
    HomeOutlined,
    InboxOutlined,
    AppstoreOutlined,
    AreaChartOutlined
} from '@ant-design/icons';


export const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: <Link to='/'>Ma'lumotlar</Link>,
    },
    {
        key: '/products',
        icon: <AlignLeftOutlined />,
        label: <Link to='/products'>Turkumlar</Link>,
    },
    {
        key: '/categories',
        icon: <InboxOutlined />,
        label: <Link to='/categories'>Mahsulotlar</Link>,
    },
    {
        key: '/brands',
        icon: <AppstoreOutlined />,
        label: <Link to='/brands'>Brendlar</Link>,
    },
    {
        key: '/banner',
        icon: <AreaChartOutlined />,
        label: <Link to='/banner'>Bannerlar</Link>,
    },
]