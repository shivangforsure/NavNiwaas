import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImOffice } from "react-icons/im";
export default function About() {
  return (
    <div
      className="relative h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('https://www.barings.com/globalassets/2-assets/perspectives/viewpoints/quarterly/quarterly-re-europe-hero.jpg?t=20220207091107')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white bg-opacity-70 rounded-lg px-20 py-10"
        style={{
          backdropFilter: "blur(10px)",
          maxWidth: "80%",
          fontFamily: "Arial, sans-serif", // Change the font family here
        }}
      >
        <h1 className="text-3xl lg:text-3xl font-bold mb-6 text-center text-black">
          About Us
        </h1>

        <p className="mb-8 text-l lg:text-l text-black">
          Nav Niwaas is a leading real estate agency that specializes in helping
          clients buy and sell properties in the most desirable neighborhoods.
        </p>
        <p className="mb-8 text-l lg:text-l text-black">
          Our mission is to help our clients to get the best real estate by
          providing many choices, personalized service, and a deep understanding
          of the local market. Whether you are looking to buy or sell a
          property, we are here to help you at every step of the way.
        </p>
        <p className="mb-8 text-l lg:text-l text-black">
          We believe that buying or selling a property should be an exciting and
          rewarding experience, and we are dedicated to making that a reality
          for each and every one of our clients. We provide the analysis of the
          locality, chatbot support, chat between buyer and seller as well as 3D
          tour of the house.
        </p>
        <div className="w-full flex justify-between mx-10">
          <iframe
            className="border-r border-gray-800 px-10 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9591933958554!2d77.58162287432086!3d28.450646475764515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1713168457445!5m2!1sen!2sin"
          ></iframe>
          <div className="px-20">
            <h3 className="mb-2 text-lg font-bold">Contact Us</h3>
            <div className="flex mb-2 text-lg text-black items-center">
              <FaPhoneAlt />
              <p className="ml-2">8148649239</p>
            </div>
            <div className="flex mb-2 text-lg text-black items-center">
              <MdEmail />
              <p className="ml-2">Contact@navniwaas.com</p>
            </div>
            <div className="flex mb-2 text-lg text-black items-center">
              <div className="w-100 h-100">
                <ImOffice />
              </div>
              <p className="ml-2">
                Bennett University plot No.8 - 11,Techzone 2, Greater Noida
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
