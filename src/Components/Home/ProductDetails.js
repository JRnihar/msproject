import React from 'react';
import { NavLink } from 'react-bootstrap';
import Images1 from '../../imges/2-1536x1536.jpg'
import Images2 from '../../imges/6-1536x1536 (1).jpg'
import Images3 from '../../imges/body.jpg'
import Images4 from '../../imges/4-1536x1536.jpg'
import Images5 from '../../imges/images5.jpg'
import Images6 from '../../imges/images6.jpg'

const ProductDetails = () => {
    return (
        <div className='mt-5'>
            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <h3 className='text-white'>বিশেষ মুহূর্তে দুর্ব'লতায় ভুগছেন? স্ত্রীর কাছে ল'জ্জিত?</h3>
                <a href="#form" className='btn btn-info btn-lg mt-5' rel="noopener noreferrer">অর্ডার করুন</a>
            </div>
            <div className='container mt-4'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={Images1} class="card-img-top" alt="..."/>
                             
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Images2} class="card-img-top" alt="..."/>
                               
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Images3} class="card-img-top" alt="..."/>
                                
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Images4} class="card-img-top" alt="..."/>
                                
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Images5} class="card-img-top" alt="..."/>
                                
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Images6} class="card-img-top" alt="..."/>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div >
                {/* <h1 className='bg-white text-black p-3 conatiner'>আপনার পৌর'ষত্ব ধরে রেখে আপনাকে করে তুলবে আসল পুরুষ, এই কফি খেলে যৌ'ন দুর্ব'লতা থেকে মুক্তি পাওয়া যায় এবং স'হবাস এর সময় বারিয়ে দেয় বহুগুণে</h1> */}
                <div class="card bg-white container d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ">
                    <h1 className='bg-white text-black p-3 conatiner'>আপনার পৌর'ষত্ব ধরে রেখে আপনাকে করে তুলবে আসল পুরুষ, এই কফি খেলে যৌ'ন দুর্ব'লতা থেকে মুক্তি পাওয়া যায় এবং স'হবাস এর সময় বারিয়ে দেয় বহুগুণে</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;