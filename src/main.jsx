import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import Feedback from "./component/Feedback.jsx";
import Layout from "./component/Layout.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Admin_Login from "./component/admin/Admin_Login.jsx";
import AboutUs from "./component/AboutUs.jsx";
import Services from "./component/Services.jsx";
import ShopKeeper from "./component/shopkeeper/ShopKeeper.jsx";
import ShopKeeper_Login from "./component/shopkeeper/ShopKeeper_Login.jsx";
import Customer from "./component/Customer/Customer.jsx";
import Customer_Login from "./component/Customer/Customer_Login.jsx";

import Announcement from "./component/Announcement.jsx";
import Shopkeeper_layout from "./component/shopkeeper/Shopkeeper_layout.jsx"
import AllContacts from "./component/admin/AllContacts.jsx";
import AllFeedbacks from "./component/admin/AllFeedbacks.jsx";
import Customer_layout from "./component/Customer/Customer_layout.jsx"
import EventsDetails from "./component/admin/EventsDetails.jsx";
import ShopKeeper_home from "./component/shopkeeper/Shopkeeper_home.jsx";
import Customer_home from "./component/Customer/Customer_home.jsx";
import ShopKeeper_editProfile from "./component/shopkeeper/ShopKeeper_editProfile.jsx";
import Customer_editProfile from "./component/Customer/Customer_editProfile.jsx"
import AddProduct from "./component/shopkeeper/AddProduct.jsx";
import Uttarpradesh from "./component/State_wise_static_produts/UttarPradesh.jsx";
import ShowProducts from "./component/ShowProducts.jsx";
import Payment from "./component/Customer/Payment.jsx";
import ViewCart from "./component/Customer/ViewCart.jsx";
import OrderDetails from "./component/Customer/OrderDetails.jsx";
import AdminHome from "./component/admin/AdminHome.jsx";
import Bihar from "./component/State_wise_static_produts/Bihar.jsx";
import Delhi from "./component/State_wise_static_produts/Delhi.jsx";
import Asam from "./component/State_wise_static_produts/Asam.jsx";
import Rajasthan from "./component/State_wise_static_produts/Rajasthan.jsx";
import Maharasthra from "./component/State_wise_static_produts/Maharasthra.jsx"
import OrderDetail from "./component/shopkeeper/OrderDetail.jsx";
import AfterOrderPlace from "./component/Customer/AfterOrderPlace.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App/>}/>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin_login" element={<Admin_Login />} />
        <Route path="/shopkeeper" element={<ShopKeeper />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Shopkeeper_login" element={<ShopKeeper_Login />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Customer_login" element={<Customer_Login />} />
        <Route path="/announcement" element={<Announcement/>}/>
        <Route path="/uttarpradesh" element={<Uttarpradesh/>}/>
        <Route path="/bihar" element={<Bihar/>}/>
        <Route path="/delhi" element={<Delhi/>}/>
        <Route path="/asam" element={<Asam/>}/>
        <Route path="/rajasthan" element={<Rajasthan/>}/>
        <Route path="/maharashtra" element={<Maharasthra/>}/>
      </Route>

      
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/admin/Allcontact" element={<AllContacts/>}/>
        <Route path="/admin/Allfeedback" element={<AllFeedbacks/>}/>
        <Route path="/admin/EventsDetails" element ={<EventsDetails/>}/>
      

      <Route path="/shopkeeper_section" element={<Shopkeeper_layout/>}>
        <Route path="/shopkeeper_section" element={<ShopKeeper_home/>}/>
        <Route path="/shopkeeper_section/editprofile" element={<ShopKeeper_editProfile/>}/>
        <Route path="/shopkeeper_section/AddProduct" element={<AddProduct/>}/>
        <Route path="/shopkeeper_section/orderplace" element={<OrderDetail/>}/>
      </Route>
      
     <Route path="/Customer_home" element={<Customer_layout/>}> 
      <Route path="/Customer_home" element={<Customer_home/>}/>
      <Route path="/Customer_home/ShowProduct" element={<ShowProducts/>} />
      <Route path="/Customer_home/editprofile" element={<Customer_editProfile/>}/>
      <Route path="/Customer_home/ViewCart" element={<ViewCart/>}/>
      <Route path="/Customer_home/Payment" element={<Payment/>}/>
      <Route path="/Customer_home/orderplace" element={<OrderDetails/>}/>
      <Route path="/Customer_home/AfterOrderPlace" element={<AfterOrderPlace/>}/>
     </Route>
    
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
