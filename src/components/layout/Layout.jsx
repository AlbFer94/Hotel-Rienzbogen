import { Outlet } from 'react-router';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

function Layout() {
    return (
        <>
            <AppNavbar />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    );
}

export default Layout;
