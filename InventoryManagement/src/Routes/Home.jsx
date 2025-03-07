import React, { useState } from 'react'
import Filter from '../Components/Filter'
import Recommended from '../Components/Recommended';
import Card from "../Components/Card";
import Card2 from '../Components/Card2';
import { IndividualProducts,BunchProducts } from '../db/data';
function Home() {
  const [isFilterOpen,setIsFilterOpen]=useState(false)
  const filterToogle=()=>{
    setIsFilterOpen(prev=>!prev)
  }
  return (
    <>
      <Recommended setIsFilterOpen={filterToogle} />
      <div>
        {isFilterOpen && (
          <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={filterToogle} />
        )}
      </div>
      <div className="Top-description">
        {" "}
        <h2 className="text-2xl font-bold text-gray-800 ">Catagories</h2>
      </div>
      <div className="flex flex-wrap p-4 w-100vh bg-gray-100 dark:bg-gray-200">
        {BunchProducts.map((item,index) => (
          <div key={index} className="w-1/4 p-2">
            <Card2 value={item}/>
          </div>
        ))}
      </div>
      <div className="Button Description">
        <h2 className="text-2xl font-bold text-gray-800">
          Individual Products
        </h2>
      </div>
      <div className="flex flex-wrap p-4 w-100vh bg-gray-100 dark:bg-gray-200">
        {IndividualProducts.map((item) => (
          <div key={item.description} className="w-1/4 p-2">
            <Card  {...item}/>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home