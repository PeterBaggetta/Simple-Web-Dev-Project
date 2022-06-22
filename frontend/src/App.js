import './App.css';
import {AddItems} from './component/AddItems';
import {GetByName} from './component/GetByName';
import {GetByCategory} from './component/GetByCategory';
import {UpdateItemQuantity} from './component/UpdateItemQuantity';
import {DeleteItem} from './component/DeleteItems';
import {ShowAllItems} from './component/ShowAllItems';
// import {FindTotalNumberItems} from './component/FindTotalNumberItems';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {  
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<AddItems/>}/>
        <Route path="/getByName" element={<GetByName/>}/>
        <Route path="/getByCategory" element={<GetByCategory/>}/>
        <Route path="/updateItemQuantity" element={<UpdateItemQuantity/>}/>
        <Route path="/deleteItem" element={<DeleteItem/>}/>
        <Route path="/showAllItems" element={<ShowAllItems/>}/>
        {/* <Route path="/findTotal" element={<FindTotalNumberItems/>}/> */}
        </Routes>
      </Router>
    </div>
)}

export default App;
