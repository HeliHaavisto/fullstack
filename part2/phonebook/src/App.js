import React, { useState} from "react";

const SearchBox= ({search}) => {
  return(
    <div>
      <input type="text" onChange={search} placeholder="search"/>
    </div>
  )
}



const App=() => {
  const [ persons, setPersons] = useState([
    {name:'Arto Hellas', number: '040-123456', id:1},
    {name:'Ada Lovelace', number: '39-44-5323523', id:2},
    {name:'Dan Abramov', number: '12-43-234345', id:3},
    {name:'Mary Poppendieck', number: '39-23-6423122', id:4}
  ])
  const [ newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [searchInput, setSearchInput] = useState('')

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
