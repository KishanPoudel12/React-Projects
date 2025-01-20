import React from "react";

function Home() {
  return (
    <div className="relative h-screen min-h-screen">
      <img
        src="https://static.vecteezy.com/system/resources/previews/051/214/763/large_2x/delivery-service-scenes-cartoon-courier-with-food-on-scooter-people-ordering-takeaway-lunch-and-dinner-with-application-grocery-products-delivery-set-vector.jpg"
        className="w-full h-full object-cover transform rotate-0"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70">
        <div className="text-center">
          <h1 className="text-white dark:text-orange-500 text-5xl font-bold mb-4">
            Welcome to Items Store App
          </h1>
          <p className="text-white dark:text-gray-300 text-xl">
            Discover delicious recipes and cooking tips
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
