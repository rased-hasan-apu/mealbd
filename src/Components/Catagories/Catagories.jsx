import React, { useEffect, useState } from 'react';
import './Catagories.css';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Catagories = () => {

  
  const [elements, setElements]=useState([]);
  const [search,setSearch]=useState([]);
  const [value,setValue]=useState('');
  const [loding,setLoding]=useState(false);
  const [error,setError]=useState(false);
  
  useEffect(()=>{
    setLoding(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setElements(data.categories);
        setLoding(false);
      }).catch(()=>{
        setError(true);
        setLoding(false)
    })
  },[])
  
  useEffect(()=>{
    setLoding(true);
    let url;
    if(value===""){
       url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;
    }
    else{
        url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
      }
    fetch(url)
    .then(res=>res.json())
    .then(data=>
      {
        console.log(data);
        setSearch(data.meals);
        setLoding(false);
      }).catch(()=>{
        setError(true);
        setLoding(false)
    })
  },[value])

  const handleOnClick=(e)=>{
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  } 
    return (
      <>
        <div className='background'>
            <div>
            <h3 className='pt-4 text-center text-white'>
                Catagories
            </h3>
            </div>
            <div>
                <h1 className='text-danger text-center'>{error ? "data not found": ""}</h1>
              </div>
           <Container fluid>
           <Row>

            <Col xs={2} >
            
            <div className='mt-5 text-center'>
            {
              
              elements?.map(value=>( <Button className='m-2' as="input" type="" key={value.id} value={value.strCategory} defaultValue={''} onClick={handleOnClick}/>))
            }
           </div>

            </Col>

           <Col xs={10}> 
           <div>
          <Row xs={1} md={3}  className="g-3 mt-3">
            {
              loding?(<Spinner animation="border" role="status" variant='danger'></Spinner>):
                search?.map(food=>(
                <Meal key={food.idMeal} food={food}></Meal>
               ))

            }
          </Row>
          </div>
           </Col>

            </Row>
           </Container>
          

        </div>
      </>
    );
};

export default Catagories;