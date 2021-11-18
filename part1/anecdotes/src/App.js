import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];
  // create array with empty 0s
  const n = 7;
  let points = Array(n).fill(0);

  const [selected, setSelected] = useState(0);
  // set empty 0s array to vote initial state
  const [vote, setVote] = useState(points);

  // generate random number to generate random anecdote
  const handleRandom = () => {
    setSelected(Math.floor(Math.random(selected) * 7));
  };
  // store votes in an array for diff anecdote
  const handleVote = () => {
    const copy = { ...vote };
    switch (selected) {
      case 0:
        copy[0]++;

        setVote(copy);
        break;
      case 1:
        copy[1]++;

        setVote(copy);
        break;
      case 2:
        copy[2]++;

        setVote(copy);
        break;
      case 3:
        copy[3]++;

        setVote(copy);
        break;
      case 4:
        copy[4]++;

        setVote(copy);
        break;
      case 5:
        copy[5]++;

        setVote(copy);
        break;
      case 6:
        copy[6]++;

        setVote(copy);
        break;
      default:
    }
  };
  // get the values of objects and put them in an array
  let high = Object.values(vote);
  console.log(high);
  // get the position of highest vote in array
  let max = high.indexOf(Math.max(...high));
  console.log(max);
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected]} votes</div>
      <Button onClick={handleVote} text='Vote' />
      <Button onClick={handleRandom} text='Random' />
      <h1>Anecdote with most vote</h1>
      <div>{anecdotes[max]}</div>
      <div>has {vote[max]} votes</div>
    </>
  );
};

export default App;
