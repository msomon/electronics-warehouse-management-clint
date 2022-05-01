
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import './App.css';
import Home from './Component/Home/Home/Home';
import Navbar from './Component/Navbar/Navbar';

// import InventoryDetails from './Component/Home/InventoryDetails/InventoryDetails';
// import RequireAuth from './Component/Home/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>

      {/* <Route path='/inventory/:id' element={
        <RequireAuth>
        <InventoryDetails></InventoryDetails>
        </RequireAuth>
      }></Route> */}



      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
