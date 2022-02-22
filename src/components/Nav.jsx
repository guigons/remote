import React, { useState } from 'react'

const Nav = () => {

  // const { counter, clear } = useStore()  

  // const [counter, setCounter] = useState(0)

  return <nav style={{
      color:"white", 
      backgroundColor: 'blue', 
      display:'flex', 
      flex: 1, 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "0px 20px"
    }}>
    <h1>Checkout Nav</h1>
    {/* <h1>{counter}</h1> */}
    <div>
      {/* <button type="button" onClick={() => setCounter(counter + 1)}>Add To Cart</button>
      <button type="button" onClick={() => setCounter(0)}>Clear Cart</button> */}
    </div>
  
  </nav>
}

export default Nav