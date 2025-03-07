import React from 'react'
import './HomePage.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
function HomePage() {
  return (
   <>
   <Topbar/>
   <div className="homeContainer">
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   </div>
   </> 
)
}

export default HomePage