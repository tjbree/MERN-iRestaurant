import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { searchCategory } from '../actions/searchAction'
import categoriesData from '../utils/categoriesData'
import {
  Container,
  Card,
  CardImg,
  CardDeck,
  CardImgOverlay,
  Button
} from 'reactstrap'

function Categories () {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (e, id) => {
        e.preventDefault()
        dispatch(searchCategory(id))
        history.push('/restaurants')        
    }
    const total = categoriesData.length
    let listedItems = []
    for(let i = 0; i < Math.ceil(total / 3); i++){
        let temp = []
        for(let j = i * 3; j < 3 + i * 3; j++){
            if(j < total){
                temp.push(
                  <Card key={categoriesData[j].id} inverse>
                    <CardImg className='card-img' max-width={200} height={180} src={categoriesData[j].img} alt='restaurant img' />
                    <CardImgOverlay>
                        <Button onClick={(e)=>handleClick(e, categoriesData[j].id)}>{categoriesData[j].name}</Button>
                    </CardImgOverlay>
                  </Card>
                )
            }          
        }
        listedItems.push(<CardDeck key={i} style={{ marginTop: '2rem' }}>{temp}</CardDeck>)
    }

    return (
        <Container>
            {listedItems}
        </Container>
    )
}

export default Categories