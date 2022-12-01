import { useState } from "react";

var ope
function Calc() {
    const [fval, setfval] = useState('')
    const [sval, setsval] = useState('')
    const [op, setop] = useState('')
    const digit = (m) => {

        // alert(m.target.value)
        setfval(fval + m.target.value)

    }

    const sign = (x) => {
        // alert(x.target.value)

        ope = x.target.value;
        setop(ope);
        setsval(fval)
        setfval('')

    }

    const equal = (c) => {
        // alert(c.target.value)
        if (ope == '+') {
            setfval(parseInt(sval) + parseInt(fval))
        }
        else if(ope == '-')
        {
            setfval(parseInt(sval) - parseInt(fval))
        }
        else if(ope == '/')
        {
            setfval(parseInt(sval) / parseInt(fval))
        }
        else if(ope == '*')
        {
            setfval(parseInt(sval) * parseInt(fval))
        }
        else if(ope == '%')
        {
            setfval(parseInt(sval) % parseInt(fval))
        }
    }
    const clear = () =>
    {
        setfval('')
    }
    const back = ()=>{
        var v = fval.slice(0,fval.length-1)
        setfval(v)
    }



    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <div className="display">
                    <input type={'text'} className="disp" value={fval}></input>
                </div>
            <div className="buttons">
                <button onClick={clear}>AC</button>
                <button onClick={back}>c</button>
                <button onClick={sign}>%</button>
                <button onClick={sign}>*</button>
            </div>
            <div className="buttons">
                <button onClick={digit}>7</button>
                <button onClick={digit}>8</button>
                <button onClick={digit}>9</button>
                <button onClick={sign}>-</button>
            </div>
            <div className="button">
                <button onClick={digit}>4</button>
                <button onClick={digit}>5</button>
                <button onClick={digit}>6</button>
                <button onClick={sign}>/</button>
            </div>
            <div className="button">
                <button onClick={digit}>1</button>
                <button onClick={digit}>2</button>
                <button onClick={digit}>3</button>
                <button onClick={sign}>+</button>
            </div>
            <div className="button">
                <button onClick={digit}>00</button>
                <button onClick={digit}>0</button>
                <button onClick={digit}>.</button>
                <button onClick={equal}>=</button>
            </div>

        </>
    )
}
export default Calc;