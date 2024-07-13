import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist//css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Farmern from './Farmer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' element ={<farmer/>}>  </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
