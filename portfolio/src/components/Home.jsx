import React from "react";
import avatar from "../assets/avatar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Hi there... I'm Mohamed Musky... 
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a committed Computer Science undergraduate at the University of
            Ruhuna, I am actively seeking a software engineering internship to
            further develop my practical skills and contribute to impactful
            projects. My strong academic background and passion for technology
            fuel my dedication to applying my knowledge in a professional
            environment. I am eager to learn from experienced professionals and
            make meaningful contributions to a dynamic team.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer dark:bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={avatar}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
