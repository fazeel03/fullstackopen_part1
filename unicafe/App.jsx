import React, { useState } from 'react';

const Statistic = ({ text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0){
    return <p>No feedback given</p>;
  }
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={total}/>
        <Statistic text="average" value={average.toFixed(1)}/>
        <Statistic text="positive" value={positivePercentage.toFixed(1) + "%"}/>
      </tbody>
    </table>
  )
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
 




  );
};
export default App;