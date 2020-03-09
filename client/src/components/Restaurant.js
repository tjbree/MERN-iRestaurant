import React from 'react'
import PropTypes from 'prop-types'
import { 
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody
} from 'reactstrap'

function Restaurant ({info, handleClick}) {
    const defaultImg = 'https://b.zmtcdn.com/data/collections/321f1ec4d05561145a0c2c9f697c4014_1581558950.jpg'
    return (
        <Card style={{maxWidth: 300}}>
            <CardImg top width='100%' src={info.thumb === '' ? defaultImg : info.thumb} alt='Restaurant Image' />
            <CardBody>
                <CardTitle style={{minHeight: 46}}>{info.name}</CardTitle>
                <CardSubtitle style={{minHeight: 46}}>{info.cuisines}</CardSubtitle>                        
                <CardText>Average cost for two: ${info['average_cost_for_two']}</CardText>
                <CardText>Rating: {info['user_ratingaggregate_rating']}</CardText>
                <CardText style={{minHeight: 72}}>Address: {info.location.address}</CardText>
                <Button onClick={()=>handleClick(info)}>Add to my list</Button>
            </CardBody>
        </Card>
    )
}
Restaurant.propTypes = {
    handleClick: PropTypes.func.isRequired,
    info: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string,
        cuisines: PropTypes.string,
        'average_cost_for_two': PropTypes.number,
        'user_ratingaggregate_rating': PropTypes.string,
        location: PropTypes.object
    })
}
export default Restaurant