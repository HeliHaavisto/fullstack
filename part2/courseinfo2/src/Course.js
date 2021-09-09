import React from 'react';


const Header = ({ courses }) => {
    return (
      <h1>{courses.name}</h1>
    )
  }

  const Content = ({ courses }) => {
    
    const result = courses.parts.map(part =>
    <p key={part.id}>{part.name} {part.exercises}</p> )
    return (
      <div>
     
      {result}
      </div>
    )
  
}

const Course = ({courses}) => {
  console.log({courses});
  return(
    <div>
      <Header courses={courses} />
      <Content courses={courses}/>
    </div>

  )
}

export default Course;