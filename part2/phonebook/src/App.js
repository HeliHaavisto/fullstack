import React, { useState, useEffect} from "react";
import nameService from './services/names';
import axios from "axios";
import './app.css';

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
  const [errorMessage,setErrorMessage] = useState('')

  useEffect(() => {
   nameService
   .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const Notification = ({message}) => {
    if (message === null) {
      return null
    }
    return(
      <div className="error">
        {message}
        </div>
    )
  }

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
    setErrorMessage(`${newName} added`)
    setNewName('')
    setNewNumber('')
    
    }

  nameService
  .create(nameObject)
    .then( response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      
    })
  }

  const handleRemove = (id) => {
    console.log ("id on" + id);
   axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(response =>{
      console.log(response)
      window.location.reload();
      
    })
    setErrorMessage(` Id ${id} removed`)
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
        <h2>add new person</h2>
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
  
  const nameList = nameFilter.map((person)=> {return (<p key={person.name} >{person.name} {person.number}<button onClick={() => handleRemove(person.id)}>Delete</button></p>) })

  // onClick={handleRemove(person.id)

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
      <Notification message={errorMessage}/>   
      <SearchBox search={searchValueHandler}/>
      <PersonForm />
     
      <h2>Numbers</h2>
      <Persons />
    
    </div>
  );
}

export default App;
