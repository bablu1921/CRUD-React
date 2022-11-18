import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import Users from "./components/Users";
// import Edit from "./components/Edit";
import UserContextProvider, { UserContext } from "./context/UserContext";
import User from "./components/User";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <UserContextProvider>
          <User />
        </UserContextProvider>
      )}
    </div>
  );
}

export default App;
