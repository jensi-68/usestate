import { useState } from "react";
import './Calender.css';


const Calender = ()=>
{
    const[age1,setage1] = useState('')
    const [date,setdate] = useState('')
    const[mon,setmon]= useState('')
    const[year,setyear]= useState('')
    const [date1,setdate1] = useState('')
    const[mon1,setmon1]= useState('')
    const[year1,setyear1]= useState('')
    function age()
    {
        var d1=date;
        var m1=mon
        var y1=year
        var d2=date1
        var m2=mon1
        var y2=year1

        if(d1 > d2)
        {
            d2 = d2 + mon[m2 - 1];
            m2 = m2 - 1;
        }
        if(m1 > m2)
        {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;
        setage1('year' +y+ 'month' +m+ 'date' +d);
    }


    return(
        <>
        <div className="cal-box1">
        {/* <a href="calender">calender</a> */}
            <img src={require('./images/bg.jpg')} alt="" />
        <div className="flex box">
        <form action="">
            <div className="flex">
           <p> first date:</p> 
            {/* <input type="text" name="date" onChange={(d)=>{setdate(d.target.value)}} /> */}
            
            <input type="date" name="date" onChange={(d)=>{setdate(d.target.value)}} />
            </div>
           
            
            <div className="flex">
            <p> second date:</p> 
            <input type="date" name="date1" onChange={(d1)=>{setdate1(d1.target.value)}} />
            </div>
            <input type="button" value="submit" onClick={age} />
            
            <input type="text"  value={age1} />
        </form>
        </div>
        </div>
        </>
    )
}
export default Calender;