import { useState } from 'react';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({ value, text }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, average, postive }) => {
  if (good && neutral && bad) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic value={good} text="Good" />
            <Statistic value={neutral} text="Neutral" />
            <Statistic value={bad} text="Bad" />
            <Statistic value={total} text="Total" />
            <Statistic value={average.toFixed(2)} text="Average" />
            <Statistic value={postive.toFixed(2) + '%'} text="Positive" />
          </tbody>
        </table>
      </>
    );
  }

  return <h5>Please feedback all fields to see statistics </h5>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const postive = (good / total) * 100;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} postive={postive} />
    </div>
  );
};

export default App;
