import React,{ createContext, useState } from "react";
export const userContext=createContext()

const UserContextProvider =({children})=>{
   const [loggedUser,setLoggedUser]=useState([])
   
   function setUsers(user){
    setLoggedUser((prev)=>{
      const updatedUsers=[...prev,user]
      // console.log(updatedUsers)
      return updatedUsers
    })
  }
  console.log("In Context=",loggedUser)
return (
<userContext.Provider value={{loggedUser,setUsers}}>
  {children}
</userContext.Provider>
)
}
export default UserContextProvider