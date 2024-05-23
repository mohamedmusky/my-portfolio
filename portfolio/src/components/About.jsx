import React from 'react';
import Section from './common/Section';
import about from '../assets/about.jpeg';

const About = () => {
  return (
    <div name="about">
      <Section className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div>
            <img
              src={about}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full "
            />
          </div>
          <div className="flex flex-col justify-center h-full ml-5">
            <h2 className="py-3 text-3xl lg:text-5xl">
              About 🙋‍♂️
            </h2>
            <p className="text-gray-500 py-4 max-w-md text-left">
          My academic background, combined with hands-on experience, has equipped me with a comprehensive understanding of both theoretical concepts and practical applications. I am adept at identifying vulnerabilities, implementing robust security measures, and staying abreast of emerging threats and technologies. My goal is to leverage my skills to develop innovative solutions that protect and enhance digital infrastructure. I am eager to collaborate with like-minded professionals and contribute to a secure and technologically advanced future.
            </p>
                      </div>
        </div>
      </Section>
    </div>
  );
};

export default About;