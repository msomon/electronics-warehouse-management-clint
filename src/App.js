
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Component/Footer/Footer';
import AddItems from './Component/Home/AddItems/AddItems';
import Blogs from './Component/Home/Blogs/Blogs';
import Home from './Component/Home/Home/Home';
import InventoryDetails from './Component/Home/InventoryDetails/InventoryDetails';
import Login from './Component/Home/Login/Login';
import ManageInventory from './Component/Home/ManageInventory/ManageInventory';
import MyItems from './Component/Home/MyItems/MyItems';
import Registar from './Component/Home/Registar/Registar';
import RequireAuth from './Component/Home/RequireAuth/RequireAuth';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/registar' element={<Registar></Registar>}></Route>
     <Route path='/inventorydetails/:id' element={<InventoryDetails></InventoryDetails>}></Route>
     <Route path='/manageinventory' element={
       <RequireAuth>
         <ManageInventory></ManageInventory>
       </RequireAuth>
     }></Route>
     <Route path='/myitems' element={
       <RequireAuth>
        <MyItems></MyItems>
       </RequireAuth>
     }></Route>
     <Route path='/additems' element={
       <RequireAuth>
        <AddItems></AddItems>
       </RequireAuth>
     }></Route>
     
     <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
