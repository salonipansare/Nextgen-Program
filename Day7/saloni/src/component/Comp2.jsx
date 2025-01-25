import React from 'react'

function Comp2() {
  const[w , setnum1] = useState(0) ;
  const[h , setnum2] = useState(0) ;
  const[res, setres] = useState(0) ;
  
  const storenum1 = (e) =>{
    setnum1(parseFloat(e.target.value))
    console.log(w);
  }
  const storenum2 = (e) =>{
    setnum2(parseFloat(e.target.value))
    console.log(h);
  }
  const bmi = (e) =>{
    var c = w/(h*h) ;
    setres(c)
    
  }
  return (
    <>
    <h1>BMI Calculator</h1>
    <form>
        <input type ="number" id="w" placeholder="Enter your weight  " onChange={storenum1}/>
        <input type ="number" id="h" placeholder="Enter your height " onChange={storenum2}/>
        <input type="button" onClick ={bmi} value = "Submit"/>
        
        <h2>About You : {res}</h2>
        <h1 id = "imgcon"></h1>
    </form>
    </>
  )
}


export default Comp2