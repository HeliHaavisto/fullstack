import React from 'react';
import ReactDOM from 'react-dom';
import Course from './Course';



const Total = ({ courses }) => {
  let initialValue = 0;
  let sum = courses.parts.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.exercises
  }, initialValue)
  // let summa = 0;
  // let i;
  // for (i=0; i < courses.parts.length; i++) {
  //   summa += courses.parts[i].exercises
  // }
  
  return(
    <p>Number of exercises {sum}</p>
  ) 
}




const App = () => {
  const courses = [
    {
      id:1,
      name:'Half stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id:1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id:2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id:3
        },
        {
          name: 'Redux',
          exercises: 11,
          id:4
        }
      ]
    },
    {
      name:'Node.js',
      id:2,
      parts: [
        {
          name: 'Routing',
          exercises:3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises:7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses[0]} />
      <Total courses={courses[0]} />
      <Course courses={courses[1]} />
      <Total courses={courses[1]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))