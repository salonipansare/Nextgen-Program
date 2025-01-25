import React, { useState } from 'react'


function Comp1()
{   
  const[a , setnum1] = useState(0) ;
  const[b , setnum2] = useState(0) ;
  const[res, setres] = useState(0) ;

  const storenum1 = (e) =>{
    setnum1(parseFloat(e.target.value))
    console.log(a);
  }
  const storenum2 = (e) =>{
    setnum2(parseFloat(e.target.value))
    console.log(b);
  }
  const add = (e) =>{
    var c = a + b ;
    setres(c)
    
  }
  const sub = (e) =>{
    var c = a - b ;
    setres(c)
    
  }
  const mul = (e) =>{
    var c = a * b ;
    setres(c)
    
  }
  const div = (e) =>{
    var c = a / b ;
    setres(c)
    
  }
  return (
            <>
            <h1>Calculator</h1>
            <form>
            <input type ="number" id="a" placeholder="Enter value of a " onChange={storenum1}/>
            <input type ="number" id="b" placeholder="Enter value of b " onChange={storenum2}/>
            <input type="button" onClick = {add} value = "Add"/>
            <input type="button" onClick ={sub} value = "Sub"/>
            <input type="button" onClick ={mul} value = "Mul"/>
            <input type="button" onClick ={div} value = "Div"/>
            <h3>Result : {res}</h3>
            </form>
            </>
          )
}

export default Comp1


