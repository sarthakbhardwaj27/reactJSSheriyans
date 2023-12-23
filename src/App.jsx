import React, { useState } from "react";
import Counter from "./Counter";
import Products from "./Products";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-green-200">
        <Counter />
        <div className="flex flex-row flex-wrap justify-between m-20 bg-blue-200">
          <Products itemName="Electronic" imgUrl = "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Products itemName="Mobile" imgUrl = "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Products itemName="Fashion" imgUrl = "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Products itemName="Laptops" imgUrl = "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Products itemName="Health" imgUrl = "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Products itemName="Sports" imgUrl = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </>
  );
}

export default App;
