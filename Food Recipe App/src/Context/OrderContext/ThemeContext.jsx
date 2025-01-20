import React,{ createContext, useEffect, useState } from "react";
export const ThemeContext=createContext()

const ThemeContextProvider =({children})=>{
const [isDarkTheme,setDarkTheme]=useState(()=>{
 return  localStorage.getItem('theme') === 'dark' || false
})

 function themeToggler(){
   setDarkTheme((prev)=>{
      const theme=!prev
      localStorage.setItem('theme', theme ? 'dark' : 'light' )
      return theme
   })
 }
 
 useEffect(()=>{
  if(isDarkTheme){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove("dark");
  }
 },[isDarkTheme])

return (
  <ThemeContext.Provider value={{isDarkTheme, themeToggler }}>
    {children}
  </ThemeContext.Provider>
);
}
export default ThemeContextProvider;