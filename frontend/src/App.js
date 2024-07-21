import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Farmer from './Farmer';
import CreateFarmer from './CreateFarmer';
import UpdateFarmer from './UpdateFarmer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Farmer/>}/> 
          <Route path='/create' element ={<CreateFarmer/>}/>
          <Route path='/update/:id' element ={<UpdateFarmer/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
