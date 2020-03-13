import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { saveToList } from '../actions/listAction'
import {
    Modal,
    ModalHeader,
    ModalBody,
    Container,
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap'

function Popup({ isOpen, setIsOpen, data }) {
    const dispatch = useDispatch()
    const styles = {
        width: '450',
        height: '550',
        color: '#111',
        outline: 'none'
    }
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [note, setNote] = useState('')
    const {id, name, thumb} = data

    const onChange = e => {
        setNote(e.target.value)
    }
      
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(id, name, note)
        setIsOpen(!isOpen)
        setNote('')
        const noteItem = {
            userId: '1',
            restaurantName: name,
            img: thumb, 
            note
        }
        dispatch(saveToList(noteItem))            
    }
    return (
        <Container>
            <Modal isOpen={isOpen} toggle={toggle} style={styles}>
                <ModalHeader toggle={toggle}>{name}</ModalHeader>
                <ModalBody>
                <img src={thumb} width='60%' alt='restaurant img' style={{ marginTop: '2rem', display: 'block', margin: '10px auto' }}/>
                <Form onSubmit={onSubmit} style={{ marginTop: '2rem' }}>             
                    <FormGroup>
                    <Label for='note'>Notes</Label>
                    <Input
                        type='textarea'
                        name='note'
                        id='note'
                        placeholder='Your comment / plan about it'
                        value={note}
                        onChange={onChange}
                        style={{ height: '100px' }}
                    />
                    </FormGroup>              
                    <FormGroup>
                    <Button color='dark' style={{ marginTop: '2rem' }} block disabled={!note}>
                        Add to My List
                    </Button>
                    </FormGroup>
                </Form>
                </ModalBody>
            </Modal>
        </Container>
    )
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        thumb: PropTypes.string
    })
}

export default Popup