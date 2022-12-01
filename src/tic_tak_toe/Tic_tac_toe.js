import { useState } from "react";
import '../tic_tak_toe/Tic.css';
const Tic_tac_toe = ()=>
{

    // const[reset, setreset]=useState(false)
    // const[winner, setwinner]=useState('')
    // const resetboard=()=>
    // {
    //     alert(setreset('name'));
    //     setreset(true)
    // }
    // const board=({reset,setreset,winner,setwinner})=>
    // {
    //     const[turn,setturn]=useState(0)
    //     const[data,setdata]=useState(['','','','','','','','',''])
    // }
    // const draw=(event, index)=>{

    // }

    const[box1,setb1] = useState('')
    const[box2,setb2] = useState('')
    const[box3,setb3] = useState('')
    const[box4,setb4] = useState('')
    const[box5,setb5] = useState('')
    const[box6,setb6] = useState('')
    const[box7,setb7] = useState('')
    const[box8,setb8] = useState('')
    const[box9,setb9] = useState('')

    var b1 = box1
    var b2 = box2
    var b3 = box3
    var b4 = box4
    var b5 = box5
    var b6 = box6
    var b7 = box7
    var b8 = box8
    var b9 = box9

    if((b1 == 'X' || b1 == 'x')) && (b2 == 'x' || b2 == 'X')

    

    return(
    <>

    <h1>Tic_tac_toe</h1>
    <div className="main-box">
        <div className="box4">
            <input type="text" readOnly onClick={my_func()}/>
            <input type="text" readOnly/>
            <input type="text" readOnly/>
        </div>
        <div className="box3">
        <input type="text" readOnly/>
        <input type="text" readOnly/>
        <input type="text" readOnly/>
        </div>
        <div className="box2">
        <input type="text" readOnly/>
        <input type="text" readOnly/>
        <input type="text" readOnly/>
        </div>
        </div>

        {/* <div className="winner-text">{winner}
            <button onClick={()=>resetboard()}>reset</button>
        </div> */}
    </>
    )
}
export default Tic_tac_toe;