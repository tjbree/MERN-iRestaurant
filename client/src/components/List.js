import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromList } from '../actions/listAction'

import {
    Container,
    Button
} from 'reactstrap'

function List () {
    const defaultImg = 'https://b.zmtcdn.com/data/collections/321f1ec4d05561145a0c2c9f697c4014_1581558950.jpg'
    const dispatch = useDispatch()
    const lists = useSelector(state => state['list'])
    const listItems = lists.map(value => (
        <div key={value.uuid} className='list-item'>
            <div className='list-img'><img src={value.img === '' ? defaultImg : value.img} alt={value.restaurantName}/></div>
            <div className='list-main'>
                <h4>{value.restaurantName}</h4>
                <p>{value.note}</p>
            </div>
            <Button onClick={() => dispatch(removeFromList(value.uuid))}>Delete</Button>
        </div>
    ))
    return (
        <Container>
            {listItems}
        </Container>
        
    )
}
export default List