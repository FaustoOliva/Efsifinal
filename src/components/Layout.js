import React from "react";
import { Outlet } from 'react-router-dom';
import LayoutNavbar from "./navbar/navbar";
import Footer from "./footer/footer";


const Layout = () => {
    return (
        <React.Fragment>
            <LayoutNavbar />
            <Outlet className="content" />
            <Footer />
        </React.Fragment>

    )
}
export default Layout;