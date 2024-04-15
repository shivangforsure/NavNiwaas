import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center bg-slate-200 shadow-md">
        <div className="flex">
          <div className="ml-20 mt-20 mb-20">
            <p className="text-lg text-4xl">Quick Links</p>
            <li>
              <a href="http://localhost:5173/">Home</a>
            </li>
            <li>
              <a href="http://localhost:5173/about">About</a>
            </li>
            <li>
              <a href="http://localhost:5173/sign-in">Sign-In</a>
            </li>
            <li>
              <a href="http://localhost:5173/sign-up">Sign-Up</a>
            </li>
          </div>
          <div className="ml-20 mt-20 mb-20">
            <p className="text-lg text-4xl">Extra Links</p>
            <li>
              <a href="http://localhost:5173/profile">Profile</a>
            </li>
            <li>
              <a href="http://localhost:5173/create-listing">Create Listing</a>
            </li>
            <li>
              <a href="">Update Listing</a>
            </li>
          </div>
          <div className="ml-20 mt-20 mb-20">
            <p className="text-lg text-4xl">Follow Us</p>
            <li>
              <a href="https://www.linkedin.com/in/shivank-shukla-a0a5a924b/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/shivangforsure/status/1700276522869838222">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rayka_kartik666/">Instagram</a>
            </li>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-200 py-4">
        <h1 className="text-center text-xl">
          Nav Niwaas <span>&#169;</span> All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
