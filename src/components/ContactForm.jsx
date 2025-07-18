import React from 'react';

const ContactForm = () =>{
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
      <p className="text-gray-400 text-center max-w-md mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Mobile</label>
          <input
            type="text"
            placeholder="Enter mobile"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold shadow-lg transition duration-200"
        >
          Submit →
        </button>
      </form>
      <footer className="mt-10 text-sm text-gray-500">
        Made with <span className="text-red-500">❤️</span>
      </footer>
    </div>
  );
}

export default ContactForm;