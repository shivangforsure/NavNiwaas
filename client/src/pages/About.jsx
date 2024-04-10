import React from "react";

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
      </div>
    </div>
  );
}
