'use client'
import Navbar from "../components/Navbar";
import Image from "next/image";
import "./home.css";
import { useState, useEffect } from "react";
import Services from "./services";
import About from "./about";
import Testimonials from "./testimonials";
import Email  from "../components/email";

export default function Home() {

  const textOptions: string[] = [' Businesses ', ' Start-ups ', ' Innovations ', ' Ideas '];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showEmail, setShowEmail] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleHireButtonClick = () => {
    setShowEmail(!showEmail); // Toggle the showEmail state
  };
  const handleClose = () => {
    // Handle close logic
    console.log('Closing email form');
  };
  return (
    <>
      <main>
        <Navbar />
        <section id='homepage' className={`flex relative ${showEmail ? 'bg-base-200' : ''}`}>
          <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse justify-start py-18 m-20">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold from-purple-600 via-pink-600 to-white 
                  bg-gradient-to-br bg-clip-text text-transparent">
                  Unlocking Digital Frontiers: Where 
                  <span className="font-bold text-white text-4xl text-center animate-text-change">
                    {textOptions[currentTextIndex]}{' '}
                  </span>
                  Become Websites!
                </h1>

                <p className="py-10 text-white">
                  Welcome to <b className="italic">Creative Alley</b>, where your vision becomes reality. We craft stunning websites that captivate and deliver results.
                  <br />
                  <br />
                  <span className="italic">Join us in the new era of web development!</span>
                </p>

                <div className="bottom-right-container">
                  <button
                    type="button"
                    className={`text-pink-600 bg-pink-200 font-medium rounded-lg 
                      hover:bg-pink-300 text-base px-6 py-3 text-left mr-2 mb-2 relative cursor-pointer ${
                        showEmail ? 'bg-pink-300' : ''
                      }`}
                    onClick={handleHireButtonClick}
                  >
                    <img
                      src="Gmail-logo.png"
                      alt="Image Description"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 w-15 h-8"
                    />
                    <span className="inline-block ml-10">{showEmail ? 'Close' : 'Hire Us Now'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src="mockups.png" // Replace with the path to your image
                  alt="Image Description"
                  className="w-full max-w-md" // Set maximum width for the image
                />
                <div className="main-circle top-left"></div>
                <div className="main-circle lower-right"></div>
              </div>
            </div>
        </section>
        <Services/>
        <section>
        <About/>
        </section>
        <Testimonials/>
        {showEmail && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Email onClose={handleClose}/>
          </div>
        )}  
      </main>
    
    </>
  );
}

