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
  const [ countries, setCountries] = useState([])
  
 

  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const searchValueHandler = (event) => {
    setSearchInput(event.target.value)
  }



  const nameFilter = countries.filter((country)=> {
    return country.name.common.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  })
  
  
   const countryList=nameFilter.map((country)=> {return (<p key={country.name.common}>{country.name.common} </p>) })
  
  let languages = []

  languages = countries.languages

  console.log(languages)

  const oneCountry = nameFilter.map((country)=>
  
  {return (
    <div>
  <h1 key={country.name.common}>{country.name.common} </h1>
  <p> capital {country.capital}<br></br>
  <b>languages</b><br></br>
  {languages}</p>

  <img alt= "flag" src={country.flags.svg}></img>
  
  </div>) })


  const Countries = () => {
    if (nameFilter.length >10) {
      return(
        <p>add more characters</p>
      )
    } else if(nameFilter.length === 1) {
      return(
      <div>
        {oneCountry}
      </div>
      )
    }else {
    return(
      <div>
      
      {countryList}
     
    </div>
    ) }
  }

  return (
    <div>
      <h2>Search Countries</h2>
      <SearchBox search={searchValueHandler}/>
     
     
      <h2>Countries</h2>
      <Countries />
    
    </div>
  );
}

export default App;
