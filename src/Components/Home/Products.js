import React from "react";
import { Button, Card } from "react-bootstrap";
import productImage from "../../imges/productsimages.jpg";
import certificate from "../../imges/WhatsApp Image 2023-01-03 at 12.30.01.jpg";
import { AiOutlineRightSquare } from "react-icons/ai";

const Products = () => {
  return (
    <div>
      <div className=" container d-flex flex-column justify-content-center align-items-center mt-5">
        <h1 className="text-white text-info">
          বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)থেকে অনুমোদন প্রাপ্ত
          ১০০% ন্যাচারাল প্রোডাক্ট | কোন ধরনের পার্শ্ব প্রতিক্রিয়া নেই
        </h1>
        <img
          className="img-fluid w-25 h-25 rounded"
          src={certificate}
          alt="certificate"
        />
      </div>
      <div class="services_card service">
        <img className="w-50 h-50" src={productImage} alt="...." />

        <Card.Title className="text-center text-white mt-2">
          ওজনঃ ১২০ গ্রাম
        </Card.Title>
        <Card.Text className="text-center ">
          <h4 className="text-center  text-white">
            রেগুলার মূল্যঃ{" "}
            <span className="text-danger ">
              <del>১৯৯০৳ </del>{" "}
            </span>{" "}
          </h4>
          <h4 className="text-center text-white ">অফার মূল্যঃ ১৩৯৯৳</h4>
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center ">
          <a
            href="#form"
            className="btn btn-info btn-lg mt-2"
            rel="noopener noreferrer"
          >
            অর্ডার করুন
          </a>
        </div>
      </div>

      <section>
        <div class="card bg-dark container d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ">
          <h1 className="bg-dark text-black p-3 text-white conatiner ">
            আপনি জানেন কি? 'লাভ ফরেভার এরাবিয়ান কফি' কফি আপনার শারীরিক দুর্বলতা
            তো কাটিয়ে তুলবেই এবং পুরুষত্ব ধরে রাখতে সাহায্য করবে! ইনশা'আল্লাহ্ |
            ‌
          </h1>
        </div>
      </section>
      <div>
        <div className="mt-3 container">
          <h3 className="Home-service p-4 text-info text-center">
            এরাবিয়ান কফির প্রয়োজনীয়তা
          </h3>

          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" /> ক্লান্তি
            দূর করে মস্তিষ্ক রাখে সতেজ এবং শারীরিক দুর্বলতা কাটিয়ে শরীরে শক্তি
            যোগায়
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            আপনার রক্তের দুষিত বর্জ্য ধ্বংস করে রক্ত সঞ্চালনের গতি বৃদ্ধি করে।
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            আন-বেলেন্সিং হরমোনকে বেলেন্স করে সহবাসের সময় বৃদ্ধি করে।
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            শরিরে বীর্য উৎপাদন করে, বীর্যে শুক্রানুর পরিমাণ বৃদ্ধি করে বীর্য গাঢ়
            করে।
          </h3>
          <h3 className="text-white mt-3">
            {" "}
            <AiOutlineRightSquare size={40} className="text-info" />
            স্থায়ীভাবে যৌন শক্তি বৃদ্ধি করে
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            লিঙ্গ স্ট্রং করে এবং একাধিকবার মিলনে সাহায্য করে।
          </h3>
        </div>
      </div>

      <div>
        <div className="mt-3 container  mt-5 mb-5">
          <h3 className="Home-service p-4 text-info text-center">
            যে কারণে আমাদের থেকে কিনবেন
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" /> প্রচলিত
            ঔষধের থেকেও কম মূল্যে অধিক উপকারিতা
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            ১০০% কোয়ালিটি সম্পন্ন এবং কার্যকরী প্রোডাক্ট
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            প্রোডাক্ট কাজ না হলে রিটার্ন দিতে পারবেন।
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            সারা বাংলাদেশে কুরিয়ারের মাধ্যমে হোম ডেলিভারি পাবেন।
          </h3>
          <h3 className="text-white mt-3">
            {" "}
            <AiOutlineRightSquare size={40} className="text-info" />
            যে কোন সময় আমাদের সাথে যোগাযোগ করতে পারবেন।
          </h3>
          <h3 className="text-white mt-3">
            <AiOutlineRightSquare size={40} className="text-info" />
            অগ্রীম এক টাকাও দিতে হবে না। ডেলিভারি ম্যান এর কাছ থেকে প্রোডাক্ট
            বুঝে পেয়ে তারপর টাকা দিবেন।
          </h3>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div class="card " style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bold">এরাবিয়ান কফি সেবনবিধিঃ</h5>
            <p class="card-text mt-3">
              প্রতিদিন রাতে খাবারের পর একটা ফুটন্ত গরম দুধ এর মধ্যে এক চা চামচ
              কফি 30 সেকেন্ড রেখে দিয়ে তারপর ভালোভাবে মিক্স করে খাবেন এভাবে
              একটানা সেবন করেন প্যাকেট শেষ না হওয়া পর্যন্ত
            </p>
            <p class="card-text fw-bold">
              বিশেষ দ্রষ্টব্য : যদি মধু খেতে পারেন সেক্ষেত্রে এই কফি মিক্সার এর
              সাথে এক চামচ মধু মিশিয়ে খেতে পারবেন
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
