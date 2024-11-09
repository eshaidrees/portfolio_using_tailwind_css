import React from "react";

export default function Contact(){
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-blue-950 p-8 text-center font-sans ">
    <h1 className="title text-3xl  font-bold text-white ">Contact Me</h1>
  
    <div className="form w-full sm:w-3/4 md:w-1/2 lg:w-1/2 mx-auto my-6 p-5 bg-[#cdf2f5] rounded-lg shadow-lg ">
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

        <label htmlFor="name" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full p-2 mb-3 border border-gray-300 rounded-lg" />
  
        <label htmlFor="email" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Email address:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required className="w-full p-2 mb-3 border border-gray-300 rounded-lg" />
  
        <label htmlFor="message" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Your Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required className="w-full p-2 mb-3 border border-gray-300 rounded-lg"></textarea>
  
        <button type="submit" className="w-full px-4 py-2 mt-5 text-white bg-[#1a1919] rounded-lg hover:bg-black">
          Send
        </button>
      </form>
    </div>
  </div>
  );
};
