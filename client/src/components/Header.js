import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authAction'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  Container,
  Button
} from 'reactstrap'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { isAuthenticated, user } = useSelector(state => state['auth'])
    const toggle = () => {
        setIsOpen(preState => !preState)
    }
    const dispatch = useDispatch()
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
                      Welcome {user.name}
                    </NavbarText>
                    <NavbarText className='mr-4'> 
                      <Link to='/list'>My List</Link>
                    </NavbarText>
                    <NavbarText>
                      {isAuthenticated ? 
                        <span onClick={() => dispatch(logout())} className='logoutButton'>Log Out</span>
                        : <Link to='/register'>Log in / Register</Link>} 
                    </NavbarText>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </>
      )
}

export default Header