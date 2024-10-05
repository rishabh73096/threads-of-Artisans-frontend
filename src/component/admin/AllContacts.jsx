import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Admin_Header from "../admin/Admin_Header.jsx";
import { URL } from "../URL/URL.jsx"; // Import URL

function AllContacts() {
    const BackendURL = URL(); // Set the BackendURL
    const [contact, setContact] = useState([]);
    const URL = `${BackendURL}/admin/Allcontact`; // Use BackendURL
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token_data = localStorage.getItem("Token_key");
            if (!token_data) {
                navigate("/admin_login");
                return; // Exit the function if no token
            }
            try {
                const response = await axios.get(URL);
                setContact(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [URL, navigate]); // Add URL and navigate as dependencies

    return (
        <>
            <Admin_Header />
            <div className="table-responsive m-4">
                <div className="divider d-flex align-items-center my-4 text-dark">
                    <h4 className="text-center fw-bold mx-3 mb-0"> All Contacts</h4>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneno}</td>
                                <td>{item.query}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default AllContacts;
