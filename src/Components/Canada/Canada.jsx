import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Canada = () => {

    const [meals,setMeals]=useState([]);
    const [loding,setLoding]=useState(false);
    const [error, setError]=useState(false);

    useEffect(()=>{
        setLoding(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
        .then(res=>res.json())
        .then((data)=>{
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
            <Container fluid>
            <h3 className='pt-4 text-center text-white'>Canadian
            </h3>
            <h1 className='text-danger text-center'>{error ? "data not found": ""}</h1>
            <Row xs={1} md={4}  className="g-3 mt-3">
              {
                loding?( 
                    <div className='text-center'>
                        <Spinner animation="border" role="status" variant='danger'></Spinner>
                    </div>
                ):
                meals.slice(0,12).map(food=>(
                    <Meal key={food.idMeal} food={food}></Meal>
                ))};
           </Row> 
        </Container>
        </div>
    );
};

export default Canada;