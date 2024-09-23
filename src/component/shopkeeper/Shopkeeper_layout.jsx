import {Outlet} from "react-router-dom"
import ShopKeeper_Header from "./ShopKeeper_Header";
import Footer from "../Footer";

function ShopKeeper_layout() {
    return (  
        <>
        <ShopKeeper_Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default ShopKeeper_layout;