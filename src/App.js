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
    if (userChoice === computerChoice){
      console.log("Tie!");
    }
    else if (userChoice === 'paper' && computerChoice === 'rock'){
      console.log("You win!");
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors'){
      console.log("You win!");
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock'){
      console.log("You lose!");
    }
    else if (userChoice === 'rock' && computerChoice === 'paper'){
      console.log("You lose!");
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors'){
      console.log("You lose!");
    }
    else if (userChoice === 'scissors' || computerChoice === 'paper'){
    console.log("You win!");
    }
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
