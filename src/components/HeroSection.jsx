import React from 'react';
import { FaDropbox } from 'react-icons/fa';
import { SiClickup, SiPaychex, SiElastic, SiStripe } from 'react-icons/si';

const companies = [
  { name: 'ClickUp', icon: <SiClickup size={19} /> },
  { name: 'Dropbox', icon: <FaDropbox size={20} /> },
  { name: 'PAYCHEX', icon: <SiPaychex size={20} /> },
  { name: 'elastic', icon: <SiElastic size={20} /> },
  { name: 'stripe', icon: <SiStripe size={20} /> },
];

const HeroSection = () => {
  return (
    <section className=" bg-black  text-white px-5">
      <div className="mx-auto max-w-full lg:max-w-4xl xl:max-w-6xl flex flex-col justify-between min-h-[90vh]">
        <div className="flex flex-col-reverse items-center justify-between mt-16 gap-12 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              SHALINI M
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-gray-400 md:text-base">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-2 rounded-md bg-green-600 px-20 py-6 font-bold text-white shadow-md shadow-green-500/50 transition duration-300 hover:bg-green-500 tracking-wide text-lg">
              Let’s get started &gt;
            </button>
          </div>
          <div className="flex w-full justify-center md:justify-end md:w-1/2">
            <img
              src="src/3d-cartoon-style-character.jpg"
              alt="Profile"
              className="h-40 w-40 md:h-70 md:w-70 lg:h-100 lg:w-100 rounded-full border-4 border-gray-700 object-cover shadow-xl"
            />
          </div>
        </div>
        <div className='pb-8'>
          <p className="mb-4 font-mono text-sm text-white">Worked with</p>
          <div className="flex flex-wrap justify-between gap-4 md:gap-5">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex min-w-[18%] w-full sm:w-1/4 md:w-1/6 justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-gray-400 transition duration-300 hover:border-gray-500 hover:text-white"
              >
                {company.icon}
                <span className="font-semibold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
