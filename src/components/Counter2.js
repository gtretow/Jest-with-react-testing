import React from "react"

class Counter extends React.Component {
  state = { count: 0 }
  increment = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }))
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default Counter


//Explicação do que acontece aqui em Counter2.test.js Falso positivo
/* 
class Counter extends React.Component {
    // ...
    setCount = (count) => this.setState({ count })
    render() {
      return (
        <div>
          <button onClick={this.decrement}>-</button>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>+</button>
        </div>
      )
    }
  } */

 /*  The Enzyme test will pass, but the second one (RTL) will fail. Indeed, Enzyme doesn’t care if our buttons are correctly wired to the methods. It just looks at the implementation itself: our increment and decrement method. This is a false positive. */


 //Falso positivo
 //Now, what if we wanted to refactor our class component to hooks? We would change its implementation:

/*  import React, { useState } from "react"
const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default Counter */

/* 
This time, the first test is going to be broken even if your counter still works. 
This is a false negative. Enzyme will complain about state not being able to work on functional components: */