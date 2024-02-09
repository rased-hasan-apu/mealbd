import React, { useEffect, useState } from 'react';
import './Catagories.css';
import { Button, Col, Container, Image, Offcanvas, Row, Spinner } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import 'font-awesome/css/font-awesome.min.css';
import menue from './../../img/menu.png'
import'./Catagories.css'
const Catagories = () => {

  
  const [elements, setElements]=useState([]);
  const [search,setSearch]=useState([]);
  const [value,setValue]=useState('');
  const [loding,setLoding]=useState(false);
  const [error,setError]=useState(false);
  const [show, setShow] = useState(false);
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
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <div className='pt-5 background'>
        
           <Container  fluid> 
           <Row>

            <Col xs={2} >
            
            <div className='mt-3'>
            <Button variant="light" className="d-lg-none mt-5" onClick={handleShow}>
            <Image className='w-100' src={menue}/>
            </Button>
            <div className='style'>
            <Offcanvas className='offcan w-50' show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header className='background' closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='background'>
         <div className='text-center'>
           {
              
              elements?.map(value=>( <Button id='button' variant="outline-secondary" className='btn rounded-pill' as="input" type="" key={value.id} value={value.strCategory} defaultValue={''} onClick={handleOnClick}/>))
            }
         </div>
        </Offcanvas.Body>
      </Offcanvas>
            </div>
           </div>

            </Col> 

           <Col xs={10}> 
           <div>
           <h3 className='text-center text-white'>
                Catagories
            </h3>
            <h1 className='text-danger text-center'>{error ? "data not found": ""}</h1>
          <Row xs={1} md={3}  className="g-3 mt-3">
          
            {
              loding?(
              <div className='d-flex m-auto justify-content-center'>
                   <Spinner animation="border" role="status" variant='danger'></Spinner>
              </div>

              ):
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