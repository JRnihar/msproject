import React, { useRef } from 'react';
import './Fromdata.css'
import { Card } from 'react-bootstrap';
import { ImCross } from 'react-icons/im';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

// CommonJS

import productimages from '../../imges/322191932_701246851400377_5819602522813003339_n.jpg'

const FromData = () => {
    const form = useRef();
    const Swal = require('sweetalert2')

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('service_ye0q7ol', 'template_yehb943', form.current, 'uh0ywcaFPq0jwktAH')
            .then((result) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your order has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Your order has been cancle',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    };

    return (
        <div className='contact_body '>
            <div class="contain ">

                <div class="wrapper">

                    <div id='from' class="form">
                        {/* <h4>GET IN TOUCH</h4> */}
                        <h2 class="form-headline text-dark">ডেলিভারি কোথায় হবে?</h2>
                        <form id="submit-form" className='contact_form' ref={form} onSubmit={sendEmail}>
                            <p>
                                <input id="name" name="user_name" class="form-input" type="text" placeholder="আপনার নামঃ *" />

                            </p>
                            <p>
                                <input id="email" class="form-input" name="number" type="number" placeholder="আপনার ফোন নাম্বারঃ *" />

                            </p>
                            <p class="full-width">
                                <input id="company-name" class="form-input" name="user_email" type="email" placeholder="Email" required />

                            </p>
                            <p class="full-width">
                                <input id="company-name" class="form-input" type="address" placeholder="আপনার ঠিকানাঃ *" required />

                            </p>
                            <p class="full-width">
                                <textarea id="message" name="message" cols="30" rows="7" placeholder="আপনার অর্ডার সম্পর্কে স্পেশাল নোট: (optional)" ></textarea>
                                <small></small>
                            </p>
                            <button type="submit" className='btn btn-success btn-lg'>Place order</button>
                        </form>
                    </div>

                    <div class="contacts contact-wrapper">

                        <div class="container table-responsive py-5">
                            <h2 class="form-headline">আপনার পণ্য</h2>
                            <table class="table ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><img className='w-25 h-25 rounded-circle' src={productimages} alt="..." /></th>

                                        <td>1</td>
                                        <td>১৯৯০ ৳</td>
                                        <td><ImCross size={10} className='text-danger' /></td>

                                    </tr>


                                </tbody>
                            </table>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>1499 ৳</p>
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <p>Shipping</p>
                            <p>100৳</p>
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <p>Total</p>
                            <p>1599৳</p>
                        </div>
                        <p className='bg-success p-3 text-white'>পেমেন্ট</p>
                        <div>
                            <p >ক্যাশ অন ডেলিভারি :  <br /> <br />
                                আমরা দিচ্ছি ক্যাশ অন ডেলিভারিতে হোম ডেলিভারি তাই পণ্য হাতে পেয়ে দেখে পণ্য রিসিভ করবেন এতে করে আপনার প্রতারিত হবার চান্স নেই।<br />
                                বিশেষ অনুরোধঃ অনুগ্রহ করে অর্ডারকৃত প্রোডাক্ট টি রিসিভ করবেন।
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
        </div>
    );
};

export default FromData;