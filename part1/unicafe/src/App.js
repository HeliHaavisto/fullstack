import React, {useState} from "react";

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statisticsline = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = ({good, neutral,bad}) => {
  if (good === 0 && neutral===0 && bad === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
  <div>
  <h1>statistics</h1>
  <Statisticsline text="Good" value={good} />
  <Statisticsline text="Neutral" value={neutral} />
  <Statisticsline text="Bad" value={bad} />
  <Statisticsline text="All" value={good + neutral + bad} />
  <Statisticsline text="Average" value={(good*1 + neutral*0 + bad*(-1))/(good + neutral+ bad)} />
  <Statisticsline text="Positive" value={100 * good / (good + neutral + bad) + "%"} />
  
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
      <Button handleClick={() => setGood(good +1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral +1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad +1)} text="Bad"/>
      
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
}

export default App;
