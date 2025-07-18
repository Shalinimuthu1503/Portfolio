import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";

const works = [
  {
    title: 'Work name here',
    description:
      'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image:image9,
  },
  {
    title: 'Work name here',
    description:
      'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u',
    image: image10,
  },
];

const RecentWork = () => {
  return (
    <section className="py-20 px-6  text-center mx-auto max-w-full lg:max-w-4xl xl:max-w-6xl ">
      <h2 className="text-4xl font-bold mb-4 ">Recent Work</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-16">
        Solving user & business problems since last 15+ years.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex items-center justify-between gap-4 relative">
        
        <button className="absolute left-[-2rem] bg-white rounded-full p-2 shadow border border-gray-300 hover:bg-gray-100">
          <FaArrowLeft />
        </button>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {works.map((work, idx) => (
            <div key={idx} className="text-left">
              <img
                src={work.image}
                alt={work.title}
                className="rounded-lg shadow w-full h-64 object-cover"
              />
              <h3 className="text-xl font-bold mt-4">{work.title}</h3>
              <p className="text-gray-500 mt-2">{work.description}</p>
              <button className="mt-4 bg-green-600 text-white font-semibold px-5 py-2 rounded shadow hover:bg-green-700">
                Know more <span className="ml-1">➤</span>
              </button>
            </div>
          ))}
        </div>

        
        <button className="absolute right-[-2rem] bg-white rounded-full p-2 shadow border border-gray-300 hover:bg-gray-100">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default RecentWork;
