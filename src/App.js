import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Tablee from './components/Tablee';
import Three from './components/Three';
import First from './components/First';
import ApiGet from './components/ApiGet';



function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<StateBasics/>}/>
      <Route path='/first' element={<First/>}/> 
      <Route path='/table' element={<Tablee/>}/> 
      <Route path='/axios' element={<ApiGet/>}/>
    </Routes>
    {/* <Navbar></Navbar> */}
    {/* <StateBasics></StateBasics>   */}
    {/* <Three></Three> */}
    {/* <Tablee></Tablee> */}
    </div>
  );
}

export default App;
