import React, { useState } from 'react';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good+1);
  const handleNeutral = () => setNeutral(neutral+1);
  const handleBad = () => setBad(bad+1);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1)
    / total;
    const positivePercentage = total === 0 ? 0 : (good /total) * 100;


  return(
    <div>
    <h1>Give Feedback</h1>
    <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button>

    <h2>Statistics</h2>
    {total === 0 ? (
      <p>No feedback given</p>
    ) : (
    <div>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>all {total}</p>
    <p>average {average.toFixed(1)}</p>
    <p>positive {positivePercentage.toFixed(1)}%</p>
    </div>
    )}
    </div>
  );
};
export default App;