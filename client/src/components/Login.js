import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../actions/authAction'
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

function Login() {
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
        const user = {
            email,
            password
        }
        dispatch(login(user))
    }

    return (   
        <Container>
            {error ? (<Alert color='danger'>{error}</Alert>) : null}  
            <Form onSubmit={onSubmit}>                
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
                    Log in
                    </Button>
                </FormGroup>
            </Form>
        </Container>
      )
}
export default Login