import React, { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header/Header'
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';

export const contextApi = createContext()


function App() {
  const [count, setCount] = useState(0)
  return (
    <contextApi.Provider value={[count, setCount]}>
      <p>app: {count}</p>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
    </contextApi.Provider>
  );
}

export default App;
