import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {text} {value}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Statistics = ({ good, bad, neutral, total, average, percent }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return <h4>No feedback given</h4>;
  }

  return (
    <>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='percent' value={percent} />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  const total = good + bad + neutral;
  const average = total / 3;
  const percent = (good / total) * 100;

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='Good' />
      <Button onClick={handleNeutral} text='Neutral' />
      <Button onClick={handleBad} text='Bad' />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        percent={percent}
      />
    </>
  );
};

export default App;
