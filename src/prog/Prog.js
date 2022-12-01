import '../prog/Prog.css';
import { useState } from 'react';

const Prog = ()=>{
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [contact, setcontact] = useState('')
    const [add, setadd] = useState([])
    const [update, setupdate] = useState('')
  
    const formsubmit = () => {
      if (name == "" && email == "" && contact == "") {
        alert("Please Submit The Data...")
      }
      else if (update) {
        // alert("hello")
        setadd(
          add.map((elem, id) => {
            if (elem === update) {
              return { ...elem, name: name, email: email, contact: contact }
            }
            return elem
          })
        )
      }
      else {
        var info = {
          name: name,
          email: email,
          contact: contact
        }
        setadd([...add, info])
      }
    }
    const addItems = () => {
      setname('')
      setemail('')
      setcontact('')
    }
    const deleteitems = (i) => {
      var n = add.filter((ele, ine) => {
        return ine != i
      })
      setadd(n)
      console.log(n)
      setname('')
      setemail('')
      setcontact('')
    }
    const edititems = (i) => {
      var c = add.find((ele, index) => {
        return index == i
      })
      console.log(c)
  
      setupdate(c)
      setname(c.name)
      setemail(c.email)
      setcontact(c.contact)
    }
    return(
        <>
            <h1>program</h1>
            <div className="to-box mt-5">
        <div className="first-box d-flex justify-content-between align-items-center ">
          <span>Name : </span>
          <input type="text" placeholder='Add Items...' value={name} onChange={(w) => setname(w.target.value)} />
        </div>
        <div className="second-box mt-4 d-flex justify-content-between align-items-center">
          <span>Email : </span>
          <input type="text" placeholder='Add Items...' value={email} onChange={(w) => setemail(w.target.value)} />
        </div>
        <div className="third-box mt-4 mb-5 d-flex justify-content-between align-items-center ">
          <span>Contact : </span>
          <input type="text" placeholder='Add Items...' value={contact} onChange={(w) => setcontact(w.target.value)} />
        </div>
        <div className="submit">
          <input type="button" className='me-4' value="Submit" onClick={formsubmit} />
          <input type="button" value="Add Items" onClick={addItems} />
        </div>
      </div>

      <table className='mt-5 ms-5'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th colSpan={2}>Actions</th>
        </tr>
        {
          add.map((items, index) => {
            return (
              <tr key={index}>
                <td> {items.name} </td>
                <td> {items.email} </td>
                <td> {items.contact} </td>
                <td><input type="button" className='edit' value="Edit Items" onClick={() => edititems(index)} /></td>
                <td><input type="button" className='delete' value="Delete Items" onClick={() => deleteitems(index)} /></td>
              </tr>
            )
          })
        }
      </table>
           
        </>
    )
}
export default Prog;