import { useState } from 'react';
import './App.css';
import Products from './components/Products';

function App() {
  const [showProducts,setShowProducts]=useState(true)

  return (
    <div>
     {showProducts && <Products/>}
     <button onClick={()=>{setShowProducts(!showProducts)}}>Toggle</button>
    </div> 
  );
}

export default App;
