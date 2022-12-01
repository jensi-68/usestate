import { useState } from "react"

function Signcalc()
{
    const[n3,setn3] = useState('')
    const[n4,setn4] = useState('')
    const[ans1,setans1] = useState('');
    const sum = ()=>{
        var c = n3;
        var d = n4;
        var ans1 = parseInt(c) + parseInt(d);
        setans1(ans1);
    }
    const sub = ()=>{
        var c = n3;
        var d = n4;
        var ans1 = parseInt(c) - parseInt(d);
        setans1(ans1);
    }
    const multi = ()=>{
        var c = n3;
        var d = n4;
        var ans1 = parseInt(c) * parseInt(d);
        setans1(ans1);
    }
    const div = ()=>{
        var c = n3;
        var d = n4;
        var ans1 = parseInt(c) / parseInt(d);
        setans1(ans1);
    }
    return(
    
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>all sign Calc</h1>
            <input type="text" onChange={(c)=>{setn3(c.target.value)}} /><br></br>
            <input type="text" onChange={(d)=>{setn4(d.target.value)}} /><br></br>
            <button onClick={sum}>sum</button>
            <button onClick={sub}>sub</button>
            <button onClick={multi}>multi</button>
            <button onClick={div}>div</button>
            <br></br>
     <input type="text" readOnly value={ans1}/>
        </>
    )
}
export default Signcalc;