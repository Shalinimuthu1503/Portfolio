import React from "react"; 
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img:image5,
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img: image6,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img:image7,
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img: image8,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className=" text-center mx-auto max-w-full lg:max-w-4xl xl:max-w-6xl ">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative border border-gray-700 rounded-lg p-6 text-left"
            >
              <span className="absolute -top-3 left-4 text-4xl text-white">“</span>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-semibold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
