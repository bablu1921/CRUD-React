import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setuserData] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setuserData(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  const deleteUser = (username) => {
    
    setuserData(userData.filter((user) => user.username !== username));
  };

  const updateUser =(username,updatedUser)=>{
    setuserData(userData.map((user)=>user.username===username? updatedUser:user))
  }
  
  return (
    <UserContext.Provider value={{ userData, deleteUser,updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
