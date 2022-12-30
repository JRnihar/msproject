import React from 'react';
import { Button, Card } from 'react-bootstrap';
import productimage from '../../imges/322191932_701246851400377_5819602522813003339_n.jpg'

const Products = () => {
    return (
      <div>
            <div class="services_card service">
               
                    <img  className='w-50 h-50' src={productimage} alt="...." />
                   
                        <Card.Title className='text-center text-white'>ওজনঃ ২৫০ গ্রাম</Card.Title>
                        <Card.Text className='text-center '>
                            <h4 className='text-center  text-white'>রেগুলার মূল্যঃ <span className='text-danger '><del>১৯৯০৳ </del>  </span>  </h4>
                            <h4 className='text-center text-white '>অফার মূল্যঃ ১৪৯৯৳</h4>
                        </Card.Text>
                        <div className='d-flex justify-content-center align-items-center '>
                            <button className="btn btn-info  ">এখনই অর্ডার করুন</button>
                        </div>
                    
                
            </div>
            {/* <section className='mt-5 d-flex flex-column justify-content-center align-items-center '>
                <Card className='rounded-circle shadow-lg' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='w-50 h-50' src={productimage} />
                    <Card.Body className='bg-success'>
                        <Card.Title className='text-center text-white bg-success'>ওজনঃ ২৫০ গ্রাম</Card.Title>
                        <Card.Text className='text-center bg-success'>
                            <h4 className='text-center mt-5 text-white bg-success'>রেগুলার মূল্যঃ <span className='text-danger bg-success'><del className='bg-success'>১৯৯০৳ </del>  </span>  </h4>
                            <h4 className='text-center text-white bg-success'>অফার মূল্যঃ ১৪৯৯৳</h4>
                        </Card.Text>
                        <div className='d-flex justify-content-center align-items-center bg-success'>
                            <button className="btn btn-info mt-5 ">এখনই অর্ডার করুন</button>
                        </div>
                    </Card.Body>
                </Card>
            </section> */}
            <section>
                <div class="card bg-dark container d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ">
                    <h1 className='bg-dark text-black p-3 text-white conatiner '>আপনি জানেন কি? 'SUPER GINSENG' কফি আপনার শারীরিক দুর্বলতা তো কাটিয়ে তুলবেই এবং পুরুষত্ব ধরে রাখতে সাহায্য করবে! ইনশা'আল্লাহ্‌</h1>
                </div>
            </section>
      </div>
    );
};

export default Products;