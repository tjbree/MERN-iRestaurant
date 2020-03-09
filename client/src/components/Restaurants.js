import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Restaurant from './Restaurant'
import Popup from './Popup'
import {
  Container,
  CardDeck,
  Spinner
} from 'reactstrap'
  
function Restaurants () {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const handleClick = (data) => {
        setIsOpen(true)
        setModalData(data)
    }
    const data = useSelector(state => state['result'])
    const isLoading = useSelector(state => state['state'])
    
    const total = Math.min(12, data['results_found'])
    let listed = []
    for(let i = 0; i < Math.ceil(total / 3); i++){
        let temp = []
        for(let j = i * 3; j < 3 + i * 3; j++){
            if(j < total){
                temp.push(
                    <Restaurant key={data['restaurants'][j]['restaurant']['id']} info={data['restaurants'][j]['restaurant']} handleClick={handleClick}/>
                )
            }          
        }
        listed.push(<CardDeck key={i} style={{marginBottom: 10}}>{temp}</CardDeck>)
    }
    return (
        <Container>
            {!isLoading ? listed : <Spinner color='dark' />}
            <Popup 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={modalData}
            />
        </Container>
    )
}

export default Restaurants