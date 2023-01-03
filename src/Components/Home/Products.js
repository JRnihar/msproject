import React from 'react';
import { Button, Card } from 'react-bootstrap';
import productImage from '../../imges/productsimages.jpg'
import certificate from "../../imges/WhatsApp Image 2023-01-03 at 12.30.01.jpg"

const Products = () => {
    return (
        <div>
            <div className=' container d-flex flex-column justify-content-center align-items-center mt-5'>
                <h1 className='text-white text-info'>বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)থেকে অনুমোদন প্রাপ্ত ১০০% ন্যাচারাল প্রোডাক্ট | কোন ধরনের পার্শ্ব প্রতিক্রিয়া নেই

                </h1>
                <img className='img-fluid w-25 h-25 rounded' src={certificate} alt="certificate" />
            </div>
            <div class="services_card service">

                <img className='w-50 h-50' src={productImage} alt="...." />

                <Card.Title className='text-center text-white mt-2'>ওজনঃ ১২০ গ্রাম</Card.Title>
                <Card.Text className='text-center '>
                    <h4 className='text-center  text-white'>রেগুলার মূল্যঃ <span className='text-danger '><del>১৯৯০৳ </del>  </span>  </h4>
                    <h4 className='text-center text-white '>অফার মূল্যঃ ১৩৯৯৳</h4>
                </Card.Text>
                <div className='d-flex justify-content-center align-items-center '>
                    <a href="#form" className='btn btn-info btn-lg mt-2' rel="noopener noreferrer">অর্ডার করুন</a>
                </div>


            </div>
            
            <section>
                <div class="card bg-dark container d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ">
                    <h1 className='bg-dark text-black p-3 text-white conatiner '>আপনি জানেন কি? 'লাভ ফরেভার এরাবিয়ান কফি' কফি আপনার শারীরিক দুর্বলতা তো কাটিয়ে তুলবেই এবং পুরুষত্ব ধরে রাখতে সাহায্য করবে! ইনশা'আল্লাহ্ | ‌</h1>
                </div>
            </section>
        </div>
    );
};

export default Products;