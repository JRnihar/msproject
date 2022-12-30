import React from 'react';
import logo2 from "../../imges/Logo2.jpg"

const Home = () => {
    return (
        <div className=''>
            <div className=' d-flex flex-column justify-content-sm-center justify-content-center align-items-center align-items-sm-center'>
                <img className='mt-5 w-25 h-25 rounded-circle' src={logo2} alt=""  />
                <h1 className='mt-3 text-center text-white'>Help Line: (+88) 01844828442 </h1>
                {/* <h4 className='mt-3 text-center text-white'>Emai: mdmontasirmahmood211199@gmail.com </h4> */}
            </div>
            <div className='mt-3 container'>
                <h3 className='Home-service p-4 text-white text-center' >জীবনের প্রকৃত সুখ যেখানে নীহিত সেখানেই যদি হয় দুর্ব’লতা তবে এই 'SUPER GINSENG' কফি টি আপনার জন্য!</h3>
            </div>
        </div>
    );
};

export default Home;