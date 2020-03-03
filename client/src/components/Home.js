import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchRestaurant } from '../actions/searchAction'

import {
  Container,
  Button,
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input
} from 'reactstrap'

function Home() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('Sydney')

    const history = useHistory()

    const dispatch = useDispatch()

    const onChange = e => {
      e.target.name === 'name' ? setName(e.target.value) : setLocation(e.target.value)
    }

    const onSubmit = (e) => {
      e.preventDefault()
      dispatch(searchRestaurant(260, name))
      
      history.push("/restaurants")
      
    }
    
    return (
        <Container>
          <h2>Search a restaurant or browse the categories</h2>
          <Form onSubmit={onSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter the name to search, e.g. sushi, biangbiang'
                    value={name}
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for='location'>Location</Label>
                  <Input
                      type='text'
                      name='location'
                      id='location'
                      value={location}
                      onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Button color='dark' style={{ marginTop: '2rem' }} block>
                    Search
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>        
        </Container>
      )
}

export default Home