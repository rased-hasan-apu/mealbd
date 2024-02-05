import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import './Newmeal.css'
import Meal from '../Meal/Meal';
import Row from 'react-bootstrap/Row';

const Newmeal = () => {

    const [ifood,setIfood]=useState([]);
    const [loding,setLoding]=useState(false);
    const [error,setError]=useState(false);
    useEffect(()=>{
        setLoding(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
            .then(res=>res.json())
            .then(data=>{
                setIfood(data.meals);
                setLoding(false);
                setError(false);
                
            }
            ).catch(()=>{
                setError(true);
                setLoding(false)
            })},[])

    return (
        <div className='background'>
            <Container fluid>
            <h3 className='pt-4 text-center text-white'>
                Indain Food
            </h3>
            <h1 className='text-danger text-center'>{error ? "data not found": ""}</h1>
            <Row xs={1} md={4}  className="g-3 mt-3">
              {
                loding?( 
                    <div className='text-center'>
                        <Spinner animation="border" role="status" variant='danger'></Spinner>
                    </div>
                ):
                ifood.slice(0,12).map(food=>(
                    <Meal key={food.idMeal} food={food}></Meal>
                ))};
           </Row> 
        </Container>
        </div>
    );
};

export default Newmeal;