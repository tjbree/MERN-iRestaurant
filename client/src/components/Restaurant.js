import React from 'react'
import { useSelector } from "react-redux"
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
    const data = useSelector(state => state["result"])

    const total = Math.min(12, data['results_found'])
    let listed = []
    for(let i = 0; i < Math.ceil(total / 3); i++){
        let temp = []
        for(let j = i * 3; j < 3 + i * 3; j++){
            if(j < total){
                temp.push(
                    <Card key={data['restaurants'][j]['restaurant']['id']} style={{maxWidth: 300}}>
                        <CardImg top width="100%" src={data['restaurants'][j]['restaurant']['thumb']} alt="Restaurant Image" />
                        <CardBody>
                        <CardTitle>{data['restaurants'][j]['restaurant']['name']}</CardTitle>
                        <CardSubtitle>{data['restaurants'][j]['restaurant']['cuisines']}</CardSubtitle>                        
                        <CardText>Average cost for two: ${data['restaurants'][j]['restaurant']['average_cost_for_two']}</CardText>
                        <CardText>Rating: {data['restaurants'][j]['restaurant']['user_rating']['aggregate_rating']}</CardText>
                        <CardText style={{minHeight: 72}}>Address: {data['restaurants'][j]['restaurant']['location']['address']}</CardText>
                        <Button>Add to my list</Button>
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
        </Container>
    )
}

export default Restaurant