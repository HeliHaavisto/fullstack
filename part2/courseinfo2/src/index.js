import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  let initialValue = 0;
  let sum = course.parts.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.exercises
  }, initialValue)
  // let i;
  // for (i=0; i < course.parts.length; i++) {
  //   summa += course.parts[i].exercises
  // }
  
  return(
    <p>Number of exercises {sum}</p>
  ) 
}


const Content = ({ course }) => {
  const result = course.parts.map(part =>
   <p key={part.id}>{part.name} {part.exercises}</p> )
  return (
    <div>
     {result}
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course} />
      <Content course={course}/>
    </div>

  )
}

const App = () => {
  const course = {
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
  }

  return (
    <div>
      
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))