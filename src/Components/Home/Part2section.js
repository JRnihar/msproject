import React from "react";
import productImage from "../../imges/productsimages.jpg";

const Part2section = () => {
  return (
    <div>
      <div className=" d-flex flex-column justify-content-center align-items-center mt-5">
        <h4>ইনশাআল্লাহ্‌ আপনি আপনার যৌ'ন সমস্যার শতভাগ সমাধান পাবেন</h4>
      </div>
      <div className="p-4 mt-5 ">
        <div className="container">
          <div className="row d-flex  justify-content-center align-items-center ">
            <div className="col-md-6  ">
              <img
                className="w-50 h-50 rounded"
                src={productImage}
                alt=""
                srcset=""
              />
            </div>
            <div className="col-md-6 mt-4 ">
              <h1 className=" text-white">লাভ ফরেভার এরাবিয়ান কফি</h1>
              <h1 className=" text-white">আপনার গোপন সমস্যার একমাত্র সমাধান</h1>
              {/* <a  className='btn btn-info mt-5'>অর্ডার করুন</button> */}
              <a
                href="#form"
                className="btn btn-info btn-lg mt-5"
                rel="noopener noreferrer"
              >
                অর্ডার করুন
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-3 container">
          <h3 className="Home-service p-4 text-info text-center">
            আমাদের কফি নিয়ে কাস্টমার কি বলে নিচে দেখুন
          </h3>
          <div>
            <h4 className="text-white text-center mt-4">MD Robin 016******56</h4>
            <p className="text-white text-center">
              আলহামদুলিল্লাহ কফি কি নিয়মিত 15 দিন সেবন করতেছি আগের থেকে ভালো
              ফিল অনুভব হচ্ছে |
            </p>
          </div>
          <div>
            <h4 className="text-white text-center mt-5"> Sabbir 018******36</h4>
            <p className="text-white text-center">
              প্রথমেই নেওয়ার আগে উনাদের সাথে অনেক কথা বলে পরে অর্ডার করেছি খুব
              ভালো একটি প্রোডাক্ট |
            </p>
          </div>
          <div>
            <h4 className="text-white text-center mt-5">Esfak 015******90</h4>
            <p className="text-white text-center">
              উনাদের বুঝানোর ব্যাপারটা খুব ভালো লেগেছে এবং প্রডাক্ট কোয়ালিটি
              মাশাল্লাহ | আমি খুব খুশি|
            </p>
          </div>
          <div>
            <h4 className="text-white text-center mt-5">
              sagor uddin 015******61
            </h4>
            <p className="text-white text-center">
              বারবার অনলাইন থেকে জিনিস কিনে ঠকেছি , নেওয়ার আগে অনেক ভেবেচিন্তে
              এরপর অর্ডার দিয়েছে এখন নিয়মিত খাচ্ছি| মাশাল্লাহ খুব ভালো একটি
              প্রোডাক্ট|
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2section;
