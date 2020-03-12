import React from 'react'
import SearchBar from './SearchBar'
import Categories from './Categories'
import { Container } from 'reactstrap'
function Home() { 
    return (
        <Container>
          <h2>Search a restaurant by its name</h2>
          <SearchBar/>
          <h2 style={{ marginTop: '2rem' }}>Or, browse the categories</h2>   
          <Categories/>    
        </Container>
      )
}

export default Home