import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  Container
} from 'reactstrap'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(preState => !preState)
    }
    return (
        <>
          <Navbar color='dark' dark expand='sm' className='mb-5'>
            <Container>
              <NavbarText>
                <Link to='/'>iRestaurant</Link>
              </NavbarText>       
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavbarText className='mr-4'> 
                        <Link to='/list'>My List</Link>     
                    </NavbarText>
                    <NavbarText>
                        <Link to='/log'>Log</Link> 
                    </NavbarText>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </>
      )
}

export default Header