import React, { useEffect, useState } from 'react';
import './Catagories.css';
import { Button, Container, Image } from 'react-bootstrap';

const Catagories = () => {
  const [value,setValue]=useState('');
  const [elements, setElements]=useState([]);
  const [search,setSearch]=useState([]);
  useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(res=>res.json())
      .then(data=>{
        
        setElements(data.categories);
      })
  },[])
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
    .then(res=>res.json())
    .then(data=>
      {
        console.log(data);
        setSearch(data.meals);
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
          <Container fluid>
          <h3 className='pt-4 text-center text-white'>
                Catagories
            </h3>
           <div className='text-center'>
            {
              elements?.map(values=>( <Button className='m-2' as="input" type="" key={values.id} value={values.strCategory} defaultValue={''} onClick={handleOnClick}/>))
            }
           </div>
          <div>
            {
              search?.map(valu=>(<Image key={valu.id} src={valu.strMealThumb}/>))
            }
          </div>
          </Container>

        </div>
      </>
    );
};

export default Catagories;