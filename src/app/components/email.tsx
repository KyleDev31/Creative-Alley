'use client'
import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';
import "./email.css";
interface EmailProps {
  onClose: () => void;
}

const Email: React.FC<EmailProps> = ({ onClose }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_9ewx8oi', 'template_ryuddmp', form.current, 'QFzgGe67hpgWX9qy2')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleExit = () => {
    onClose();
  };

  return (
    <main id='emailform' className='transparent-bg'>
      <form ref={form} onSubmit={sendEmail} className='p-8 mt-20 mr-80 ml-80 rounded-xl'>
        <div className='mb-3 flex place-self-center justify-center'>
          <label className='text-white font-bold mr-2 mt-2'>Name</label>
          <input className='"w-full px-2 py-1 border placeholder:text-neutral-800
           dark:text-black rounded-md outline-none' type='text' name='user_name' />
        </div>
        <div className='mb-3 flex place-self-center justify-center'>
          <label className='text-white font-bold mr-2 mt-2 '>Email</label>
          <input className='"w-full px-2 py-2 border placeholder:text-neutral-800
           dark:text-black rounded-md outline-none' type='email' name='user_email' />
        </div>
        <div className='mb-3 flex place-self-center justify-center'>
          <label className='text-white font-bold mr-2'>Message</label>
          <textarea className='text-black' name='message' />
        </div>
        <div className='flex place-self-center justify-center'>
          <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 w-20 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit' value='Send' />
          <button className='bg-red-500 rounded-lg px-5 py-3 w-20 me-2 mb-2 text-white hover:bg-red-800' type='button' onClick={handleExit}>
            Exit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Email;
