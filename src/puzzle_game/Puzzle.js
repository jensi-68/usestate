import '../puzzle_game/Puzzle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
const Puzzle = ()=>
{

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
  
    const game8 = (q) => {
      // alert(q.target.value)
  
      if (b9 == "") {
        setbox9(b8)
        setbox8('')
      }
      else if (b5 == "") {
        setbox5(b8)
        setbox8('')
      }
      else if (b7 == "") {
        setbox7(b8)
        setbox8('')
      }
      wincheck()
    }
    const game9 = (q) => {
  
      if (b8 == "") {
        setbox8(b9)
        setbox9('')
      }
      else if (b6 == "") {
        setbox6(b9)
        setbox9('')
      }
      wincheck()
    }
    const game7 = () => {
      if (b8 == "") {
        setbox8(b7)
        setbox7('')
      }
      else if (b4 == "") {
        setbox4(b7)
        setbox7('')
      }
      wincheck()
    }
    const game6 = () => {
      if (b3 == "") {
        setbox3(b6)
        setbox6('')
      }
      else if (b9 == "") {
        setbox9(b6)
        setbox6('')
      }
      else if (b5 == "") {
        setbox5(b6)
        setbox6('')
      }
      wincheck()
    }
    const game5 = () => {
      if (b2 == "") {
        setbox2(b5)
        setbox5('')
      }
      else if (b4 == "") {
        setbox4(b5)
        setbox5('')
      }
      else if (b8 == "") {
        setbox8(b5)
        setbox5('')
      }
      else if (b6 == "") {
        setbox6(b5)
        setbox5('')
      }
      wincheck()
    }
    const game4 = () => {
      if (b1 == "") {
        setbox1(b4)
        setbox4('')
      }
      else if (b5 == "") {
        setbox5(b4)
        setbox4('')
      }
      else if (b7 == "") {
        setbox7(b4)
        setbox4('')
      }
      wincheck()
    }
    const game3 = () => {
      if (b2 == "") {
        setbox2(b3)
        setbox3('')
      }
      else if (b6 == "") {
        setbox6(b3)
        setbox3('')
      }
      wincheck()
    }
    const game2 = () => {
      if (b1 == "") {
        setbox1(b2)
        setbox2('')
      }
      else if (b5 == "") {
        setbox5(b2)
        setbox2('')
      }
      else if (b3 == "") {
        setbox3(b2)
        setbox2('')
      }
      wincheck()
    }
    const game1 = () => {
      if (b2 == "") {
        setbox2(b1)
        setbox1('')
      }
      else if (b4 == "") {
        setbox4(b1)
        setbox1('')
      }
      wincheck()
    }
  
    //Win Function
  
    function wincheck() {
      if (b1 == '1' && b2 == '2' && b3 == '3' && b4 == '4' && b5 == '5' && b6 == '6' && b7 == '7' && b8 == '8' && b9 == '') {
        alert("You Are Winner This Game...!")
        // reset()
        window.location.reload(false)
      }
    }
  
    // Reset Function
  
    const reset = () => {
      // window.location.reload(false)
      var arr = []
      console.log(arr)
  
      while (arr.length < 9) {
        var x = Math.floor(Math.random() * 9) + 1
        if (arr.indexOf(x) === -1) {
          arr.push(x)
        }
      }
      setbox1(arr[0])
      setbox2(arr[1])
      setbox3(arr[2])
      setbox4(arr[3])
      setbox5(arr[4])
      setbox6(arr[5])
      setbox7(arr[6])
      setbox8(arr[7])
      setbox9(arr[8])
  
      if (arr[0] == 9)
      {
        setbox1('')
      }
      else if (arr[1] == 9)
      {
        setbox2('')
      }
      else if (arr[2] == 9)
      {
        setbox3('')
      }
      else if (arr[3] == 9)
      {
        setbox4('')
      }
      else if (arr[4] == 9)
      {
        setbox5('')
      }
      else if (arr[5] == 9)
      {
        setbox6('')
      }
      else if (arr[6] == 9)
      {
        setbox7('')
      }
      else if (arr[7] == 9)
      {
        setbox8('')
      }
      else if (arr[8] == 9)
      {
        setbox9('')
      }
    }
    return(
        <>
            <h1>sliding the Puzzle</h1>
            <section className='game'>
        <div className="p-box mt-5 d-flex justify-content-center">
          <input type="button" value={box1} onClick={game1} />
          <input type="button" value={box2} onClick={game2} />
          <input type="button" value={box3} onClick={game3} />
        </div>
        <div className="p-box d-flex justify-content-center">
          <input type="button" value={box4} onClick={game4} />
          <input type="button" value={box5} onClick={game5} />
          <input type="button" value={box6} onClick={game6} />
        </div>
        <div className="p-box d-flex justify-content-center">
          <input type="button" value={box7} onClick={game7} />
          <input type="button" value={box8} onClick={game8} />
          <input type="button" value={box9} onClick={game9} />
        </div>
        <div className="reset d-flex justify-content-center mt-4">
          <button onClick={reset}>Reset</button>
        </div>
      </section>
    </>
           
    
    )
}
export default Puzzle;