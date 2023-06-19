import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./ReusableComponent/Button";
import { toggleMenu } from "../store/appSlice";
const MainSection = () => {
  const isUserLoggedIn = useSelector((store) => store.login.isLoggedIn);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.app.isMenuOpen);
  const toggleHandler = () => {
    dispatch(toggleMenu());
    //document.body.style.overflow = isModalOpen ? "auto" : "hidden"; (causing problem)
  };

  const [isModal, setIsModel] = useState(false);

  const openModal = () => {
    setIsModel(!isModal);
  };

  const externalImage =
    "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-fresh-and-cute-cartoon-pet-dog-banner-image_177825.jpg";

  return (
    <>
      <div
        className="relative h-full w-full bg-cover bg-no-repeat bg-center opacity-70 inset-0 overflow-hidden"
        style={{
          backgroundImage: `url(${externalImage})`,
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-6 md:py-16 sm:px-6 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex justify-between">
              <div className="flex ">
                <img
                  src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
                  alt="Logo"
                  className="h-9 w-9 rounded-full"
                />
                <h1 className="ml-2 p-1 text-xl font-bold tracking-wider text-black">
                  PAWTASTIC
                </h1>
              </div>
              <div className="md:hidden">
                <button className="text-black" onClick={openModal}>
                  <svg
                    className="h-7 w-8 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="hidden md:block">
                <ul className="flex space-x-4">
                  <li>
                    <Link to="/signup" className="font-bold text-black">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking" className="font-bold text-black">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="profile" className="font-bold text-black">
                      Services
                    </Link>
                  </li>
                  {isUserLoggedIn ? (
                    <li>
                      <Link to="profile" className="text-black font-bold">
                        My Profile
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link className="font-bold text-black" to="/signup">
                        Signup
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
              <div className="mt-8 ml-[1rem] lg:ml-0">
                <h2 className="text-3xl font-bold text-black">
                  We care for your furry, <br />
                  little loved ones <br />
                  while you're away
                </h2>
                <Button className="mt-6 rounded-full bg-gray-100 px-7 py-2 tracking-wider text-black hover:bg-gray-50">
                  <Link to="/signup">Schedule visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModal && (
        <div className="fixed inset-0 flex z-50 bg-black bg-opacity-50 overflow-hidden h-screen ">
          <div className="bg-black w-full ">
            <div className="flex justify-between mt-5 mr-5 ">
              <div className="flex px-4 py-2 ">
                <img
                  src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
                  alt="Logo"
                  className="h-9 w-9 rounded-full"
                />
                <h1 className="ml-2 p-1 text-xl font-bold tracking-wider text-white">
                  PAWTASTIC
                </h1>
              </div>
              <button onClick={openModal} className="py-2 px-2 rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-8 text-center cursor-pointer text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-8 mt-10 justify-center items-center">
              <li>
                <Link to="/signup" className="font-bold text-2xl text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="font-bold text-2xl text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/profile" className="font-bold text-2xl text-white">
                  Services
                </Link>
              </li>
              {isUserLoggedIn ? (
                <li>
                  <Link to="/profile" className="text-white text-2xl font-bold">
                    My Profile
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/signup" className="font-bold text-2xl text-white">
                    Signup
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MainSection;
