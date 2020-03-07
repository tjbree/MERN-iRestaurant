import React, { useState} from 'react'
import { useSelector } from "react-redux"
import Popup from './Popup'
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap'

  
function Restaurant () {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const handleClick = (data) => {
        setIsOpen(true)
        setModalData(data)
    }
    const data = useSelector(state => state["result"])
    const defaultImg = 'https://b.zmtcdn.com/data/collections/321f1ec4d05561145a0c2c9f697c4014_1581558950.jpg'
    const total = Math.min(12, data['results_found'])
    let listed = []
    for(let i = 0; i < Math.ceil(total / 3); i++){
        let temp = []
        for(let j = i * 3; j < 3 + i * 3; j++){
            if(j < total){
                temp.push(
                    <Card key={data['restaurants'][j]['restaurant']['id']} style={{maxWidth: 300}}>
                        <CardImg top width='100%' src={data['restaurants'][j]['restaurant']['thumb'] === '' ? defaultImg : data['restaurants'][j]['restaurant']['thumb']} alt="Restaurant Image" />
                        <CardBody>
                            <CardTitle style={{minHeight: 46}}>{data['restaurants'][j]['restaurant']['name']}</CardTitle>
                            <CardSubtitle style={{minHeight: 46}}>{data['restaurants'][j]['restaurant']['cuisines']}</CardSubtitle>                        
                            <CardText>Average cost for two: ${data['restaurants'][j]['restaurant']['average_cost_for_two']}</CardText>
                            <CardText>Rating: {data['restaurants'][j]['restaurant']['user_rating']['aggregate_rating']}</CardText>
                            <CardText style={{minHeight: 72}}>Address: {data['restaurants'][j]['restaurant']['location']['address']}</CardText>
                            <Button onClick={()=>handleClick(data['restaurants'][j]['restaurant'])}>Add to my list</Button>
                        </CardBody>
                    </Card>
                )
            }          
        }
        listed.push(<CardDeck key={i} style={{marginBottom: 10}}>{temp}</CardDeck>)

    }
    return (
        <Container>
            {listed}
            <Popup 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={modalData}
            />
        </Container>
    )
}

export default Restaurant