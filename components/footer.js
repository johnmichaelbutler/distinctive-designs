import {useState} from 'react';
import axios from 'axios';
import {FaFacebookF, FaHouzz} from 'react-icons/fa';
import {FiPhone} from 'react-icons/fi';
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai';

export default function Footer(){
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const year = new Date().getFullYear();

  const handleChange = (e) => {
    switch(e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "phone":
        setPhoneNumber(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      case "default":
    }
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = 'https://akm3j8q706.execute-api.us-east-2.amazonaws.com/prod';
    console.log({name, phoneNumber, email, location, message});
    try {
      const response = await axios.post(url, {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        location: location,
        message: message
      });
      console.log('Response from form', response);
      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="footer-contain h-full grid grid-cols-1 md:grid-cols-2 bg-gray-200 text-black py-10 mt-10">
      <div className="col-span-1 text-center items-center justify-center">
        <p className="body-text">We would love to work with you on designing your dream home!</p>
        <div className="flex flex-col items-center md:items-start my-10 h-1/2 justify-between text-xl ">
          <a href="tel:+19562440957" className="cursor-pointer hover:text-gray-500">
            <FiPhone className='inline-flex w-7 mx-auto mr-3' />
            <span>210 525 7985</span>
          </a>
          <a href="mailto:distinctive.draftingllc@gmail.com" className="cursor-pointer hover:text-gray-500">
            <AiOutlineMail className='inline-flex w-7 mx-auto mr-3' />
            <span className="text-sm md:text-base">distinctive.draftingllc@gmail.com</span>
            </a>
          <a href="https://www.facebook.com/distinctivedraftingllc/" target="_blank" rel="noopener" className="cursor-pointer hover:text-gray-500">
            <FaFacebookF className='inline-flex w-7 mx-auto mr-3' />
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/distinctive.design.llc/" target="_blank" rel="noopener" className="cursor-pointer hover:text-gray-500">
            <AiOutlineInstagram className='inline-flex w-7 mx-auto mr-3' />
            <span>Instagram</span>
          </a>
          <a href="https://www.houzz.com/professionals/building-designers-and-drafters/distinctive-drafting-and-design-llc-pfvwus-pf~939763927?" target="_blank" rel="noopener" className="cursor-pointer hover:text-gray-500">
            <FaHouzz className='inline-flex w-7 mx-auto mr-3' />
            <span>Houzz</span>
          </a>
        </div>
      </div>
      <div className="col-span-1 text-center">
        <h1 className="footer-heading">Contact Us</h1>
        {submitted ? (
          <p>Thank you for filling out the contact form. We will get back to you soon.</p>
        ) : (
          <form className="w-full" id="contact-form" method="post" onSubmit={handleFormSubmit}>
            <label className="footer-text" htmlFor="name">Name</label><br />
            <input type="text" onChange={handleChange} className="text-black my-2 w-3/4 bg-gray-200 border-b-2 border-gray-400 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter name" value={name} name="name" required/><br/>
            <label className="footer-text" htmlFor="phone">Phone</label><br />
            <input type="tel" onChange={handleChange} className="text-black my-2 w-3/4 bg-gray-200 border-b-2 border-gray-400 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter phone number" value={phoneNumber} name="phone" required/><br/>
            <label className="footer-text" htmlFor="email">Email</label><br />
            <input type="email" onChange={handleChange} className="text-black my-2 w-3/4 bg-gray-200 border-b-2 border-gray-400 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter email" value={email} name="email" /><br/>
            <label className="footer-text" htmlFor="location">Project Location</label><br />
            <input type="text" onChange={handleChange} className="text-black my-2 w-3/4 bg-gray-200 border-b-2 border-gray-400 focus:outline-none focus:ring focus:border-blue-300" placeholder="Ex: San Antonio, TX" value={location} name="location" required/><br/>
            <label className="footer-text" htmlFor="message" >How can we help you?</label><br />
            <textarea rows="3" onChange={handleChange} className="text-black my-2 w-3/4 bg-gray-200 border-b-2 border-gray-400 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter brief message" value={message} name="message"></textarea><br/>
            <button className="px-3 py-3 rounded border border-gray-400 hover:bg-black hover:text-white transition-colors">
              <img src="tail-spin.svg" className={`${loading ? 'inline' : 'hidden' } pr-2 h-7`} />
              Submit
            </button>
          </form>
        )}
      </div>
      <span>&copy; {year} Distinctive Drafting and Designs LLC <i>All Rights Reserved</i></span>
    </div>
  )
}