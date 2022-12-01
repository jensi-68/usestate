import { useState } from "react";

function P_calc()
{

    const[n1,setn1]=useState('')
    const[j,setans]=useState('')

    const answer =()=>
    {
        var a = n1;
        var ans = a;
        var i=0;
        while(ans > 0)
        {
            a[i] = ans % 2;
            ans = ans / 2;
            i++; 
        }
        for(var j = i - 1; j>=0 ;j--)
        {
            // alert('name')
            setans(j)
        }
    }
    return(
        <>
            <h1>programming calc</h1>
            <input type="text" onChange={(e)=>{setn1(e.target.value)}}/>
            <button onClick={answer}>answer</button>
            <input type="text" value={j}/>
        </>
    )
}
export default P_calc;