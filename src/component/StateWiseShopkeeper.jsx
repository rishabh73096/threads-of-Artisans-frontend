import { useEffect, useState } from "react";
import axios from "axios";
import AllShopkeeperTable from "./AllShopkeeperTable";

function StateWiseShopkeeper({ state }) {
  const URL = "http://localhost:3400/allShopkeeperdetails";
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`statename is ${state}`);
      try {
        const params = { state: state };
        const response = await axios.get(URL, { params });
        console.log(response.data);
        if (response.data) {
          setUser(response.data);
          setStatus(true);
        }
      } catch (err) {
        console.log(err.message);
        // Handle error here
      }
    };
    fetchData();
  }, [state]);

  return (
    <>
      {status && <AllShopkeeperTable userdata={user} />}
    </>
  );
}

export default StateWiseShopkeeper;
