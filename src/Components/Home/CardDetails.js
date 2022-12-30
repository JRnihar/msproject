import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';
import { FaSadTear } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { FaKissWinkHeart } from 'react-icons/fa';

const CardDetails = () => {
    return (
        <div>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card bg-success d-flex flex-column justify-content-center align-items-center ">
                           <BsFillLightningFill size={200} className='text-center bg-success mt-4'/>
                            <h3 className='bg-success text-white mt-3'>ক্লান্তি ও অবসাদ দূর করে</h3>
                            <h4 className='bg-success text-white text-center mt-5'>মস্তিষ্ক রাখে সতেজ , শারীরিক দুর্বলতা কাটিয়ে শরীরে শক্তি যোগাবে।</h4>    
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card bg-success d-flex flex-column justify-content-center align-items-center">
                            <MdBloodtype size={200} className='text-center bg-success mt-4'/>
                            <h3 className='bg-success text-white mt-3'>রক্ত সঞ্চালনের গতি বৃদ্ধি করে</h3>
                            <h4 className='bg-success text-white text-center mt-5'>আপনার রক্তের দুষিত বর্জ্য ধ্বংস করে রক্ত সঞ্চালনের গতি বৃদ্ধি করে।</h4>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-success d-flex flex-column justify-content-center align-items-center ">
                            <AiFillLike size={200} className='text-center bg-success mt-4'/>
                            <h3 className='bg-success text-white mt-3'>পৌরুষ ধরে রাখে</h3>
                            <h4 className='bg-success text-white text-center mt-5'>পৌরুষ ধরে রাখতে নিয়মিত কফি পান করুন তফাৎ টা বুঝতে পারবেন।</h4>    
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card bg-success d-flex flex-column justify-content-center align-items-center ">
                            <FaSadTear size={200} className='text-center bg-success mt-4'/>
                            <h3 className='bg-success text-white mt-3 '>মোটা হয়ে যাচ্ছেন?</h3>
                            <h4 className='bg-success text-white text-center mt-5 mb-5'>এই কফি শরীরের অতিরিক্ত ফ্যাট ও চর্বি কমাতে সাহায্য করে।</h4>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-success d-flex flex-column justify-content-center align-items-center ">
                            <FaHeartbeat size={200} className='text-center bg-success mt-4'/>
                            <h3 className='bg-success text-white mt-3'>ডায়াবেটিস নিয়ে চিন্তিত?</h3>
                            <h4 className='bg-success text-white text-center mt-5'>এটি টাইপ-২ ডায়াবেটিস, হৃদরোগ, উচ্চ রক্তচাপ, ক্যান্সারসহ আরো অনেক রোগ প্রতিরোধ করে।</h4>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-success d-flex flex-column justify-content-center align-items-center ">
                            <FaKissWinkHeart size={200} className='text-center bg-success mt-4'/>
                            <h3 className='bg-success text-white mt-3'>শুক্রাণু বৃদ্ধি করে</h3>
                            <h4 className='bg-success text-white text-center mt-5'>শরীরের হরমোন এবং শুক্রাণু বৃদ্ধি করে যৌন মিলনে আগ্রহ বাড়াবে এবং দীর্ঘ হবে যৌন মিলনের সময়।</h4>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;