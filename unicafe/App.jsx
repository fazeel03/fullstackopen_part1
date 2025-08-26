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
  const [feedback, setFeedback] = useState({
    good:0,
    neutral:0,
    bad:0
  });
  const handleGood = () => setFeedback({ ...feedback, good: feedback.good + 1});
  const handleNeutral = () => setFeedback({ ...feedback, neutral: feedback.neutral + 1});
  const handleBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1});
  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood} text="good"> good </button>
      <button onClick={handleNeutral} text="neutral"> neutral </button>
      <button onClick={handleBad} text="bad"> bad </button>
      <h2>Statistics</h2>
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />

    </div>
 




  );
};
export default App;