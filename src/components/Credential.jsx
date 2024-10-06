import React from "react";
import imgds from "../assets/image/dsajs.png"
import imght from "../assets/image/htmlcss.png"
import imgcpp from "../assets/image/imgcpp.png"
import Title from "./Title";
import { Img } from "react-image";
function Credential() {
    return (
        <div className=" bg-secondary-800 text-secondary-200 py-5 px-7 col-span-2 md:px-7 lg:px-9 rounded-xl">
            <Title title="Certificate And Credentials"/>
            <div className="flex flex-wrap justify-center gap-4 w-full ">
                <div className="flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4">
                    <Img
                        className="absolute inset-0 w-full h-full object-cover object-top z-0"
                        src={imgds}
                        alt="Certificate image"
                    />
                    <div className="absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0">
                        <h2 className="text-xl text-center font-bold mb-2">
                            Javascript Datastructure and Algorithm
                        </h2>
                        <h4 className="text-sm text-primary-600 text-center font-light mb-1">
                            Free Code Camp
                        </h4>
                        <p className="leading-tight text-[0.93rem]">
                        This course provided an in-depth exploration of fundamental programming concepts and problem-solving techniques using JavaScript.
                        </p>
                        <div className=" my-4 w-full text-right ">
                            <a
                                href="https://www.freecodecamp.org/certification/henaorth/javascript-algorithms-and-data-structures"
                                className=" bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4">
                    <Img
                        className="absolute inset-0 w-full h-full object-cover object-top z-0"
                        src={imght}
                        alt="html css certificate"
                    />
                    <div className="absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0">
                        <h2 className="text-xl text-center font-bold mb-2">
                            Responsive Web Design
                        </h2>
                        <h4 className="text-sm text-primary-600 text-center font-light mb-1">
                            Free Code Camp
                        </h4>
                        <p className="leading-tight text-[0.93]">
                        This comprehensive course covered all the essential aspects of modern web design, including HTML5, CSS3, Flexbox, and CSS Grid. Through a series of hands-on projects and challenges.
                        </p>
                        <div className=" my-4 w-full text-right ">
                            <a
                                href="https://www.freecodecamp.org/certification/henaorth/responsive-web-design"
                                className=" bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4">
                    <Img
                        className="absolute inset-0 w-full h-full object-cover object-top z-0"
                        src={imgcpp}
                        alt="c++ certificate"
                    />
                    <div className="absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0">
                        <h2 className="text-xl text-center font-bold mb-2">
                            C++ Training Crash Course
                        </h2>
                        <h4 className="text-sm text-primary-600 text-center font-light mb-1">
                            Udemy
                        </h4>
                        <p className="leading-tight text-[0.93]">
                        This course focused on special behavior of C++. and algorithm scripting using c++.
                        </p>
                        <div className=" my-4 w-full text-right ">
                            <a
                                href="https://www.udemy.com/certificate/UC-b886a8df-9a76-4030-aa09-49e9c7b0cb28/"
                                className=" bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Credential;
