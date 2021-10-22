import React, { useState, useEffect} from "react";
import axios from 'axios';

const SearchBox= ({search}) => {
  return(
    <div>
      <input type="text" onChange={search} placeholder="search"/>
    </div>
  )
}



const App=() => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

   axios
    .post('http://localhost:3001/persons', nameObject) 
    .then( response => {
      console.log(response)
    })
  }



  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const searchValueHandler = (event) => {
    setSearchInput(event.target.value)
  }

  const PersonForm = () => {
    return(
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
    )
  }

  const nameFilter = persons.filter((person)=> {
    return person.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  })
  
  const nameList = nameFilter.map((person)=> {return (<p key={person.name}>{person.name} {person.number}</p>) })

  const Persons = () => {
    return(
      <div>
      {nameList}
    </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBox search={searchValueHandler}/>
      <PersonForm />
     
      <h2>Numbers</h2>
      <Persons />
    
    </div>
  );
}

export default App;
