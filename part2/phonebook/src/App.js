import React, {useState} from "react";


const App=() => {
  const [ persons, setPersons] = useState([
    {name:'Arto Hellas'}
  ])
  const [ newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    if (persons.find(({name}) => name === newName)) {
    alert(`${newName} is already added to phonebook`);
    setNewName('')
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    }
  }



  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit= {addName}>
        <div>
          name:<input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
         <p key={person.name}>{person.name}</p> )}
      </ul>
    
    </div>
  );
}

export default App;