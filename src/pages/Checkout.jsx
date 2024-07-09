import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import checkedImg from "../assets/checked.png";
import uncheckedImg from "../assets/unchecked.png";

function Checkout({ cartItems }) {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [deliveryChecked, setDeliveryChecked] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        mobile: '',
        postal: ''
    });
    const [formErrors, setFormErrors] = useState({});
    
    const C = 'Checkout';

    const handlePaymentClick = (method) => {
        setSelectedPayment(method);
    };

    const handleDeliveryClick = () => {
        setDeliveryChecked(!deliveryChecked);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        
        if (id === 'mobile') {
            if (/^\+?\d{0,13}$/.test(value)) { 
                setFormData({ ...formData, [id]: value });
            }
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const validateForm = () => {
        const errors = {};
        const phoneRegex = /^\+?\d{1,14}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.firstName) {
            errors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.address) {
            errors.address = 'Address is required';
        }
        if (!formData.city) {
            errors.city = 'City/Town is required';
        }
        if (!formData.state) {
            errors.state = 'State is required';
        }
        if (!formData.mobile) {
            errors.mobile = 'Mobile Number is required';
        } else if (!phoneRegex.test(formData.mobile)) {
            errors.mobile = 'Invalid mobile number';
        }
        if (!formData.postal) {
            errors.postal = 'Postal Code is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully', formData);
        }
    };

    const subtotal = cartItems.reduce((acc, item) => acc + Number(item.price*item.quantity), 0);
    const taxRate = 0.1;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const checkoutprice = [
        { id: 1, p: 'SubTotal', m: subtotal },
        { id: 2, p: 'Tax (10%)', m: tax },
        { id: 3, p: 'Shipping', m: '0' }
    ];

    return (
        <main className='pt-[137px] relative lg:px-[124px] md:px-[64px] px-[22px] mb-10'>
            <Navigation C={C} />

            <section className='py-[66px] xl:flex justify-between'>
            <section className='xl:w-[57%] w-full'>
                <section className='border-[0.92px] border-[#e4e7e6] rounded-[9.22px]'>

                <section className='pt-[37.51px] xs:px-[25.39px] px-[39.39px] xxs:px-[16.39px]'>
                    <div className='flex items-center gap-[12px] mb-8'>
                    <p className='text-[14px] md:text-[23px] font-semibold'>Your Order(s)</p>
                    <div className='bg-[#e60023] text-white md:px-[12px] md:py-[6px] rounded-[50%] px-[8px] py-[2px] md:rounded-[28.13px] '>{cartItems.length}</div>
                    </div>

                    {cartItems.map((item, index) => (
                     <div key={index} className='w-full gap-4 flex justify-between items-center pb-6 mb-6 border-b border-[#e4e7e6] '>
                      <img src={item.img} alt='furniture' className='2xl:w-[166px] 2xl:h-[108px] xs:w-[105px] xs:h-[98px] md:w-[125px] md:h-[108px] rounded-[9px] xxs:w-[120px] xxs:h-[100px]' />

                        <div className='w-[85%] md:pr-20'>
                        <div className='flex font-semibold justify-between items-center'>
                        <p className='text-[12px] md:text-[19px]'>{item.name}</p>
                        <p className='text-[12px] md:text-[14px]'>$<span className='md:text-[20px]text-[16px] align-sub'>{item.price * item.quantity}</span>.00</p>
                        </div>
                        </div>
                        </div>
                            ))}
                        </section>
                    </section>

                    <section className='border-[0.92px] border-[#e4e7e6] rounded-[9.22px] xl:mt-1 mt-8 py-[37.51px] xxs:px-[29.39px]'>
                        <p className='text-[20px] md:text-[23px] font-semibold'>Billing and Shipping</p>
                        <form onSubmit={handleSubmit}>
                        <div className='md:grid grid-cols-2 gap-6 justify-between mt-6 w-full'>
                        <div className='flex flex-col pb-4 md:pb-0'>
                        <label htmlFor="firstName" className='text-[14px]'>First Name</label>
                        <input type='text' placeholder='John' id='firstName' value={formData.firstName} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                        {formErrors.firstName && <p className='text-red-500 text-xs'>{formErrors.firstName}</p>}
                        </div>
                        <div className='flex flex-col'>
                        <label htmlFor="lastName" className='text-[14px]'>Last Name</label>
                        <input type='text' placeholder='Doe' id='lastName' value={formData.lastName} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                        {formErrors.lastName && <p className='text-red-500 text-xs'>{formErrors.lastName}</p>}
                        </div>
                        </div>

            <div className='flex flex-col mt-4'>
                <label htmlFor="email" className='text-[14px]'>Email Address</label>
                <input type='text' placeholder='johndoe@example.com' id='email' value={formData.email} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
               {formErrors.email && <p className='text-red-500 text-xs'>{formErrors.email}</p>}
            </div>

                            <div className='flex flex-col mt-4'>
                                <label htmlFor="address" className='text-[14px]'>Address</label>
                                <input type='text' placeholder='eg.55 Abba str.' id='address' value={formData.address} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                                {formErrors.address && <p className='text-red-500 text-xs'>{formErrors.address}</p>}
                            </div>

                            <div className='md:grid grid-cols-2 gap-6 mt-4'>
                                <div className='flex flex-col pb-4 md:pb-0'>
                                    <label htmlFor="city" className='text-[14px]'>City/Town</label>
                                    <input type='text' placeholder='eg.Lagos' id='city' value={formData.city} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                                    {formErrors.city && <p className='text-red-500 text-xs'>{formErrors.city}</p>}
                                </div>
                                <div className='flex flex-col '>
                                    <label htmlFor="state" className='text-[14px]'>State</label>
                                    <input type='text' placeholder='eg.lagos' id='state' value={formData.state} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                                    {formErrors.state && <p className='text-red-500 text-xs'>{formErrors.state}</p>}
                                </div>
                            </div>

                            <div className='md:grid grid-cols-2 gap-6 mt-4'>
                                <div className='flex flex-col w-full pb-4 md:pb-[0] '>
                                    <label htmlFor="mobile" className='text-[14px]'>Mobile Number</label>
                                    <input type='text' placeholder='+23467890000' id='mobile' value={formData.mobile} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                                    {formErrors.mobile && <p className='text-red-500 text-xs'>{formErrors.mobile}</p>}
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="postal" className='text-[14px]'>Postal Code</label>
                                    <input type='text' placeholder='6578' id='postal' value={formData.postal} onChange={handleChange} className='p-[14px] border-[0.92px] border-[#d0d5dd] rounded-[5.53px] outline-none placeholder:text-[14px]' />
                                    {formErrors.postal && <p className='text-red-500 text-xs'>{formErrors.postal}</p>}
                                </div>
                            </div>

                            
                        </form>
                    </section>
                </section>

                <section className='border-[0.92px] border-[#e4e7e6] rounded-[9.22px] xl:w-[40%] w-full mt-8 xl:mt-0 h-[80%] pt-[37.51px] xl:pb-12 pb-16 xxs:px-[25.39px]'>
                    <p className='text-[20px] md:text-[23px] text-[18px]font-semibold'>Payment Information</p>

                    <div className='pt-8 border-b-[0.92px] border-[#d0d5dd]'>
                        <p className='text-[18px] font-semibold'>Apply Discount</p>
                        <div className='py-4 flex justify-between'>
                            <input type='text' placeholder='Enter Coupon Code' className='bg-[#f9fafb] py-[12px] md:py-[18px] px-[28px] rounded-[32.69px] text-[#98A2B3] w-[65%] outline-none placeholder:text-[12px] md:placeholder:text-[16px]' />
                            <button className='bg-[#e60023] p-[12px] md:p-[18px] text-white w-[30%] rounded-[32.69px] text-[12px] md:text-[16px] delay-100 ease-in-out hover:bg-white hover:text-[#e60023] hover:border-[3px] border-[#e60023] hover:p-[14px] '>Apply</button>
                        </div>
                    </div>

                    <div className='border-b-[0.92px] border-[#d0d5dd]'>
                        <p className='text-[18px] font-semibold pt-4'>Pay with</p>
                        <div className='flex gap-3 cursor-pointer pt-4' onClick={() => handlePaymentClick('card')}>
                            <img src={selectedPayment === 'card' ? checkedImg : uncheckedImg} alt='an icon' />
                            <p className='md:text-[18px] text-[14px] font-[500]'>Debit or Credit Card</p>
                        </div>
                        <div className='flex gap-3 cursor-pointer pt-4' onClick={() => handlePaymentClick('delivery')}>
                            <img src={selectedPayment === 'delivery' ? checkedImg : uncheckedImg} alt='an icon' />
                            <p className='md:text-[18px] text-[14px] font-[500]'>Pay on Delivery</p>
                        </div>
                        <p className='text-[18px] font-semibold pt-6 pb-4'>Delivery Time</p>
                        <div className='flex gap-3 cursor-pointer pb-5' onClick={handleDeliveryClick}>
                            <img src={deliveryChecked ? checkedImg : uncheckedImg} alt='an icon' />
                            <p className=' font-[500] md:text-[18px] text-[14px]'>Right Now</p>
                        </div>
                    </div>

                    <div className='border-b-[0.92px] border-[#d0d5dd] border-t-[0.92px] my-6 pt-6 pb-2'>
                        {checkoutprice.map(({ id, p, m }) =>
                            <div key={id} className='flex justify-between pb-4'>
                                <p>{p}</p>
                                <p className='font-semibold text-[9px]'>$<span className='align-sub text-[18px]'>{m}</span></p>
                            </div>
                        )}
                    </div>

                    <div className='flex justify-between pb-4'>
                        <p>Total</p>
                        <p className='font-[700] text-[9px]'>$<span className='text-[18px] align-sub'>{total}</span></p>
                    </div>

                    <button onClick={handleSubmit} className='bg-[#e60023] p-[18px] text-white w-full rounded-[32.69px] delay-100 ease-in-out hover:bg-white hover:text-[#e60023] hover:border-[3px] border-[#e60023] hover:p-[14px] mt-2 mb-18 '>
                        Proceed to Pay
                    </button>
                </section>
            </section>
        </main>
    );
}

export default Checkout;
