import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      result:null
    }
  }
  handleClick(){

  }
render(){
  return(
<div>
  <button>Rock</button>
  <button>Paper</button>
  <button>Scissor</button>
</div>
  )
 }

}

export default App;
