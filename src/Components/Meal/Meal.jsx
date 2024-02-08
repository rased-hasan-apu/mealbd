import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Meal = ({food}) => {

    return (

        <Col>
        <Card className='bg-dark'>
          <Card.Img className='w-100' variant="top" src={food.strMealThumb} />
          <Card.Body>
            <Card.Title className='text-white'>{food.strMeal.slice(0,20)}</Card.Title>
            <Card.Text className='text-white'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

    );
};

export default Meal;