import React, {useState} from "react";

const Statistics = ({good, neutral,bad}) => {
  return(
  <div>
  <h1>statistics</h1>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p> bad {bad}</p>
  <p>all {good + neutral + bad}</p>
  <p>average {(good*1 + neutral*0 + bad*(-1))/(good + neutral+ bad)}</p>
  <p>positive {100 * good / (good + neutral + bad)} %</p>
  </div>
  )
}

const App =() => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good +1)}>Good</button>
      <button onClick={() => setNeutral(neutral +1)}>Neutral</button>
      <button onClick={() => setBad(bad +1)}>Bad</button>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
}

export default App;
