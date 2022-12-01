import { useState } from "react"

const Puzzle1=()=>{

    const [box1, setbox1] = useState("1")
    const [box2, setbox2] = useState("2")
    const [box3, setbox3] = useState("3")
    const [box4, setbox4] = useState("4")
    const [box5, setbox5] = useState("5")
    const [box6, setbox6] = useState("6")
    const [box7, setbox7] = useState("7")
    const [box8, setbox8] = useState("")
    const [box9, setbox9] = useState("8")

    var b1 = box1
    var b2 = box2
    var b3 = box3
    var b4 = box4
    var b5 = box5
    var b6 = box6
    var b7 = box7
    var b8 = box8
    var b9 = box9

    // const game8 = (q) =>
    // {
    //     if(b9 = "")
    //     {
    //         setbox9(b8)
    //         setbox8('')
    //     }
    //     else if
    //     wincheck()
    // }

    wincheck()
    {
        if(b1 == '1' && b2 == '2')
        {
            alert("you are winner")
            // window.location.reload(false)
        }
    }

    // const reset = () =>
    // {
    //     var arr = []
    //     console.log(arr)
    //     while(arr.length < 9)
    //     {
    //         var x = Math.floor(Math.random() * 9) + 1
    //         if(arr.indexOf(x) === -1)
    //         {
    //             arr.push(x)
    //         }
    //     }
    // }

    setbox1(arr[0])
    setbox2(arr[1])
    return(
        <>
            <h1>sliding puzzle</h1>
            <div className="game">
                <div className="p-box mt-5 d-flex justify-content-center">
                    <input type="button" value="box1" onClick={game1} />
                    <input type="button" value="box2" onClick={game2} />
                    <input type="button" value="box3" onClick={game3} />
                </div>
                <div className="p-box mt-5 d-flex justify-content-center">
                    <input type="button" value="box4" onClick={game4} />
                    <input type="button" value="box5" onClick={game5} />
                    <input type="button" value="box6" onClick={game6} />
                </div>
                <div className="p-box mt-5 d-flex justify-content-center">
                    <input type="button" value="box7" onClick={game7} />
                    <input type="button" value="box8" onClick={game8} />
                    <input type="button" value="box9" onClick={game9} />
                </div>
            </div>
        </>
    )
}
export default Puzzle1