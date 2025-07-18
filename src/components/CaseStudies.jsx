import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const CaseStudies = () => {
  return (
    <section className="px-6 py-16 mx-auto max-w-5xl lg:max-w-4xl xl:max-w-6xl md:max-w-4xl">
      <div className="text-center mb-16"> 
        <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
        <p className="text-gray-500 mt-2">
          Solving user & business problems since last 15+ years.
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {caseStudies.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row ${
            item.reverse ? "md:flex-row-reverse" : ""
          } gap-8 mb-20 items-center`}
        >

          <div className="md:w-1/2">
            <span
              className={`text-xs px-3 py-1 rounded-full font-semibold inline-block mb-3 ${item.tagColor}`}
            >
              {item.tag}
            </span>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              {item.description}
            </p>
            <button
              className={`px-5 py-2.5 text-sm font-bold rounded-md transition duration-300 ${item.btnColor}`}
            >
              {item.button} &gt;
            </button>
          </div>

          
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      ))}
    </section>
    );
};

const caseStudies = [
  {
    id: 1,
    tag: "Fintech",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    button: "View case study",
    image: image1, 
    reverse: false,
    tagColor: "bg-yellow-100 text-yellow-800",
    btnColor: "bg-yellow-400 text-white hover:bg-yellow-500",
  },
  {
    id: 2,
    tag: "EdTech",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    button: "View case study",
    image: image2,
    reverse: true,
    tagColor: "bg-blue-100 text-blue-800",
    btnColor: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    id: 3,
    tag: "Pharma",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    button: "View case study",
    image: image3, 
    reverse: false,
    tagColor: "bg-green-100 text-green-800",
    btnColor: "bg-green-400 text-white hover:bg-green-500",
  },
];


  

export default CaseStudies;
