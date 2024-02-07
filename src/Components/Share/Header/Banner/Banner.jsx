import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
      <>
          
           
           <div className='bg'>
           <Container>
                    <Row>
                        <Col >
                            <div className='gap'>
                            <h1>
                               <span className='bg-danger rounded p-2'>Our Best </span>
                            </h1>
                            <h2>Delicious <br /> <span className='t-style'>Food menu</span>  </h2>
                           
                                <p className='mt-5 fs-5 fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio, similique incidunt laboriosam nihil molestias minus, beatae perferendis doloremque laudantium ad dolore tenetur eius earum quos maiores iste.Magnam voluptates voluptatum incidunt libero tempore rem vero eius eum dolores facilis a quasi porro, eligendi aspernatur vitae, ut ea et.Magnam praesentium aperiam tempore repudiandae deserunt a obcaecati, adipisci pariatur dicta.</p>
                            <Button className='bg-dark p-3 rounded-pill fs-4 mt-4 mb-4 fw-bolder'>click here for order</Button>
                            </div>
                        </Col>
                    </Row>
                   
                </Container>
           </div>
          
      </>
    );
};

export default Banner;