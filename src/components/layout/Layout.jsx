import { Outlet } from 'react-router';
import AppNavbar from './AppNavbar';

function Layout() {
    return (
        <>
            <header>
                <AppNavbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;