import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      result:null
    }
  }
  handleClick(sel){
    let userChoice = sel
    let temp = ["rock","paper","scissor"]
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = temp[randomNum]
    let res
    if (userChoice === computerChoice){
      res=("Tie!");
    }
    else if (userChoice === 'paper' && computerChoice === 'rock'){
      res=("You win!");
    }
    else if (userChoice === 'rock' && computerChoice === 'scissor'){
      res=("You win!");
    }
    else if (userChoice === 'scissor' && computerChoice === 'rock'){
      res=("You lose!");
    }
    else if (userChoice === 'rock' && computerChoice === 'paper'){
      res=("You lose!");
    }
    else if (userChoice === 'paper' && computerChoice === 'scissor'){
      res=("You lose!");
    }
    else if (userChoice === 'scissor' && computerChoice === 'paper'){
      res=("You win!");
    }
    this.setState({result: `User choice is ${userChoice} & Computer Choice is ${computerChoice}. Result is ${res}`})
    console.log(`User choice is ${userChoice} & Computer Choice is ${computerChoice}`)
  }
  render() {
    return(
      <div>
        <button onClick={() =>this.handleClick("rock")}>Rock</button>
        <button onClick={() =>this.handleClick("paper")}>Paper</button>
        <button onClick={() =>this.handleClick("scissor")}>Scissor</button>
        <p>{this.state.result}</p>
      </div>
    )
  } 
}

export default App;
