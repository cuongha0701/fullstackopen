import { useState, useEffect } from 'react';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Anecdote = ({ anecdote, votes, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>This anecdote has {votes} votes. </p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selectedVote, setSelectedVote] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotesAnecdote, setMostVotesAnecdote] = useState(-1);

  const handleRandomAnecdote = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const anecdoteNumber = Math.floor(Math.random() * (max - min) + min);
    setSelectedVote(anecdoteNumber);
  };

  const handleVote = (anecdoteIndex) => {
    const votesCopy = [...votes];
    votesCopy[anecdoteIndex] += 1;
    setVotes(votesCopy);
  };

  const handleMostVotesAnecdote = () => {
    setMostVotesAnecdote(votes.indexOf(Math.max(...votes)));
  };

  useEffect(() => {
    handleMostVotesAnecdote();
  });

  return (
    <>
      <div>
        <Anecdote anecdote={anecdotes[selectedVote]} votes={votes[selectedVote]} title="Anecdote of the day" />
      </div>
      <Button handleClick={handleVote.bind(undefined, selectedVote)} text="Vote this anecdote" />
      <Button handleClick={handleRandomAnecdote.bind(undefined, 0, anecdotes.length)} text="Next anecdote" />
      <hr></hr>
      <Anecdote
        anecdote={anecdotes[mostVotesAnecdote]}
        votes={votes[mostVotesAnecdote]}
        title="Anecdote with most votes"
      />
    </>
  );
};

export default App;
