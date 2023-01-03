import React from 'react';
import productImage from '../../imges/productsimages.jpg'

const Part2section = () => {
    return (
        <div>
            <div className=' d-flex flex-column justify-content-center align-items-center mt-5'>
                <h4 >ইনশাআল্লাহ্‌ আপনি আপনার যৌ'ন সমস্যার শতভাগ সমাধান পাবেন</h4>
            </div>
            <div className="p-4 mt-5 ">
                <div className="container">
                    <div className="row d-flex  justify-content-center align-items-center ">
                        <div className="col-md-6  ">
                            <img className='w-50 h-50 rounded' src={productImage} alt="" srcset="" />
                        </div>
                        <div className="col-md-6 mt-4 ">
                            <h1 className=' text-white'>লাভ ফরেভার এরাবিয়ান কফি
                            </h1>
                            <h1 className=' text-white'>আপনার গোপন সমস্যার একমাত্র সমাধান</h1>
                            {/* <a  className='btn btn-info mt-5'>অর্ডার করুন</button> */}
                            <a href="#form" className='btn btn-info btn-lg mt-5' rel="noopener noreferrer">অর্ডার করুন</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part2section;