import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import GameInstructions from "./components/GameInstructions";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import './App.css';

class App extends Component {
  state = {
    friends
  };


  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
          <GameInstructions />
        {this.state.friends.map(friend => (
           <FriendCard
          {...friend}
          key={friend.id}
          name={friend.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
