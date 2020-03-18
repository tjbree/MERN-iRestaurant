import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { registerUser } from '../actions/authAction'
import { clearErrors } from '../actions/errorAction'
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const error = useSelector(state => state['error'])
    const { isAuthenticated } = useSelector(state => state['auth'])
    useEffect(() => {
        if(isAuthenticated) {
            dispatch(clearErrors())
            history.push('/')
        }
    },[dispatch, history, isAuthenticated])

    const onChange = e => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'password':
                setPassword(e.target.value)
                break
            default:
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(clearErrors())
        const newUser = {
            name,
            email,
            password
        }
        dispatch(registerUser(newUser))
    }

    return (   
        <Container>
            {error ? (<Alert color='danger'>{error}</Alert>) : null}  
            <Form onSubmit={onSubmit}>                
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button color='dark' style={{ marginTop: '2rem' }} block>
                        Register
                    </Button>
                </FormGroup>
            </Form>
            <h4>Already got an account? <Link to='/login'>Click here to log in.</Link></h4>
        </Container>
      )
}
export default Register