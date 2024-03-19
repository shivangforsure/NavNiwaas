import React from "react";

export default function About() {
  return (
    <div className="relative h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://storage.googleapis.com/aqacentor-corporativewebs-pro--corporative-web--wp--pro--static/1/2022/06/image1-3.jpg")`, // Replace the URL with your image URL
        }}
      ></div>
      <div className="flex flex-col justify-center items-center text-white relative z-10 h-full">
        <div className="py-20 px-4 max-w-6xl mx-auto ">
          <h1 class="text-3xl lg:text-6xl font-bold mb-6 text-center text-white">
            About Nav Niwaas
          </h1>

          <p className="mb-8 text-xl lg:text-xl ">
            Nav Niwaas is a leading real estate agency that specializes in
            helping clients buy and sell properties in the most desirable
            neighborhoods.
          </p>
          <p className="mb-8 text-xl lg:text-xl ">
            Our mission is to help our clients to get the best real estate by
            providing many choices, personalized service, and a deep
            understanding of the local market. Whether you are looking to buy or
            sell a property, we are here to help you at every step of the way.
          </p>
          <p className="mb-8 text-xl lg:text-xl ">
            We believe that buying or selling a property should be an exciting
            and rewarding experience, and we are dedicated to making that a
            reality for each and every one of our clients. We provide the
            analysis of the locality, chatbot support, chat between buyer and
            seller as well as 3D tour of the house.
          </p>
        </div>
      </div>
    </div>
  );
}
