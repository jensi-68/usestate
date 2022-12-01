import { useState } from "react"
const Sum = ()=>
{
    const[user,setuser]=useState("cdmi")
  const[name,setname]=useState("")
  const[n1,setn1]=useState("")
  const[n2,setn2]=useState("")
  const[ans,setans]=useState("")
  const btn=()=>
  {
    alert('name')
  }
  
  const answer =() =>
  {
    var a = n1;
    var b = n2;
    var ans = parseInt(a)+parseInt(b);
    setans(ans);
  }
  const[count,setcount] = useState(0)

  const sum =() =>
    {
      setcount(count + 1);
    }
    const sub=()=>
    {
      if(count>0){
        setcount(count - 1);
      }
    }
    return(
        <>
            <h1>{user}</h1>
    <input type='text' value={name}/>
    <input type="button" onClick={btn} value='click' />
    <input type="text" onChange={(e)=>{setname(e.target.value)}} />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1>counter</h1>

    <input type="text" value={count} />
     <button onClick={sum}>+</button> 
     <button onClick={sub}>-</button> 



     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <h1>sum of 2 digit</h1>
     <input type="text" onChange={(a)=>{setn1(a.target.value)}}/>
     <input type="text" onChange={(b)=>{setn2(b.target.value)}}/>
     <button onClick={answer}>answer</button>
     <input type="text" readOnly value={ans}/>
        </>
    )
}
export default Sum;