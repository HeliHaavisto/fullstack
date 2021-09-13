import React, {useState} from "react";


const App=() => {
  const [ persons, setPersons] = useState([
    {name:'Arto Hellas', number: ''}
  ])
  const [ newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(({name}) => name === newName)) {
    alert(`${newName} is already added to phonebook`);
    setNewName('')
    setNewNumber('')
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  }



  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit= {addName}>
        <div>
          name:<input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:<input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
         <p key={person.name}>{person.name} {person.number}</p> )}
      </ul>
    
    </div>
  );
}

export default App;
