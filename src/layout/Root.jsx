import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;