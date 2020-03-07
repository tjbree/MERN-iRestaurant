import React from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { searchCategory } from '../actions/searchCategory'
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

    const categoriesData1 = [{
        id: 6,
        name: 'Cafes',
        img: 'https://b.zmtcdn.com/data/reviews_photos/ac8/0c92c395ae9adaaef4c9b7efb81f9ac8_1526365569.jpg'
      }, {
        id: 10,
        name: 'Dinner',
        img: 'https://b.zmtcdn.com/data/pictures/3/17744433/be423dc7070c8270a823daba24f13f8b.jpg'
      }, {
        id: 11,
        name: 'Pubs & Bar',
        img: 'https://b.zmtcdn.com/data/pictures/2/19169362/4ad02cd28e99ee7fc7f80751b39cd798.jpg'
      }
    ]
    const categoriesData2 = [{
        id: 1,
        name: 'Delivery',
        img: 'https://b.zmtcdn.com/data/pictures/chains/9/16564139/68832fe854860c96a2ed17efbafe8799.jpg'
      }, {
        id: 3,
        name: 'Nightlife',
        img: 'https://b.zmtcdn.com/data/pictures/1/16557481/53e157e6f4065bf52be9fff99964fcdd.jpg'
      }, {
        id: 8,
        name: 'Breakfast',
        img: 'https://b.zmtcdn.com/data/pictures/9/16564139/77c9012350224a808f5fabbddbbee70d.jpg'
      }
    ]
    const handleClick = (e, id) => {
        e.preventDefault()
        dispatch(searchCategory(id))
        history.push("/restaurants")        
    }
    
    const listed1 = categoriesData1.map(value => (
        <Card key={value.id} inverse>
            <CardImg className='card-img' max-width={200} height={180} src={value.img} alt="restaurant img" />
            <CardImgOverlay>
                <Button onClick={(e)=>handleClick(e, value.id)}>{value.name}</Button>
            </CardImgOverlay>
        </Card>
    ))
    const listed2 = categoriesData2.map(value => (
        <Card key={value.id} inverse>
            <CardImg className='card-img' max-width={200} height={180} src={value.img} alt="restaurant img" />
            <CardImgOverlay>
                <Button onClick={(e)=>handleClick(e, value.id)}>{value.name}</Button>
            </CardImgOverlay>
        </Card>
    ))
    return (
        <Container>
            <CardDeck  style={{ marginTop: '2rem' }}>
                {listed1}
            </CardDeck>
            <CardDeck  style={{ marginTop: '2rem' }}>
                {listed2}
            </CardDeck>
        </Container>
    )
}

export default Categories