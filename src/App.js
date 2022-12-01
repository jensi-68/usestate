import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Puzzle from "./puzzle_game/Puzzle";
import {useState} from 'react';
import { Routes, Route } from "react-router-dom"
import Calc from './Calc';
import Calc2 from './Calc2';
import Signcalc from './Signcalc';
import P_calc from './P_calc';
import Sum from './Sum';
import Calender from './Calender';
import Link from './Link';
import Tic_tac_toe from './tic_tak_toe/Tic_tac_toe';
import Prog from './prog/Prog';
import Puzzle1 from './puzzle_game/Puzzle1';
function App() {
  



  return (
    <>
    
<Routes>
  <Route element={<Link/>} path='/'/>
      <Route element={<Signcalc/>} path='/Signcalc'/>
      <Route element={<Calc/>} path='/Calc'/>
      <Route element={<Sum/>} path='/Sum'/>
     <Route element={<Calc2/>} path='/Calc2'/>
     <Route path='/P_calc' element={<P_calc/>}/>
     <Route path='tic_tak_toe/Tic_tac_toe' element={<Tic_tac_toe/>} />
     <Route path='/Puzzle_game/Puzzle1' element={<Puzzle1/>}/>
     <Route element={<Calender/>} path='/Calender'/>
     <Route element={<Prog/>} path='/prog/Prog'/>
     </Routes>
    </>
  );
}



export default App;