import Footer from "../Footer";
import Customer_header from "./Customer_header";
import {Outlet} from "react-router-dom"

function Customer_layout() {
    return (
    <>
    <Customer_header/>
    <Outlet/>
    <Footer/>
    </> 
    );
}

export default Customer_layout;