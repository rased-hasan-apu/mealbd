import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Amirican = () => {

    const [meals,setMeals]=useState([]);
    const [loding,setLoding]=useState(false);
    const [error,setError]=useState(false);

    useEffect(()=>{
        setLoding(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
            .then(res=>res.json())
            .then(data=>{
                setMeals(data.meals);
                setLoding(false);
                setError(false);
            }).catch(()=>{
                setError(true);
                setLoding(false);
            })
    },[])
    return (
        <div className='background'>
            <h3 className='pt-4 text-center text-white'>Amirican
            </h3>
            <h1 className='text-danger text-center'>{error ? "data not found": ""}</h1>
            <Container fluid>
                <Row xs={1} md={4}  className="g-3 mt-3">
                    {
                       loding?(<div className='text-center'>
                       <Spinner animation="border" role="status" variant='danger'></Spinner>
                   </div>): 
                        meals.slice(0,12).map(food=><Meal key={food.id} food={food}></Meal>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Amirican;