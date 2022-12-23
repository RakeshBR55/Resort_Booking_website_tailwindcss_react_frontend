import React, { useState,useContext,useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import Content from "./Content";
import { authContext } from "../context/authContext";
const Navbar2 = () => {
  
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const {decodedToken,isExpired} = useContext(authContext)

  
  return (
    <>
      <div className="bg-transparent h-full w-full">
        {/* Code block starts */}
        <nav className="backdrop-blur-xl fixed-top shadow xl:block hidden">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="visible xl:hidden">
                    <svg
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                  <div
                    className="hidden close-m-menu text-gray-700"
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                {/* For laptop display  */}

                <div className="flex items-center">
                  <svg
                    aria-label="Home"
                    id="logo"
                    enableBackground="new 0 0 300 300"
                    height={44}
                    viewBox="0 0 300 300"
                    width={43}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        fill="#4c51bf"
                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                      />
                    </g>
                  </svg>
                  <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">
                    <Link to="/" className="p-2">
                      Madhu Home Stay
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                  <li
                    
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                      </svg>
                    </span>
                    <Link to="/" className="p-2">
                      Home
                    </Link>
                  </li>
                  <li
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                    </span>
                    <Link to="/About" className="p-2">
                      About
                    </Link>
                  </li>
                  <li
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 64 64"
                        width={20}
                        height={20}
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M44.6,58.7H22.2c-3.5,0-6.7-1.4-9.2-3.8c-2.5-2.5-3.8-5.7-3.8-9.2c0-0.6,0.4-1,1-1s1,0.4,1,1c0,2.9,1.1,5.7,3.2,7.8
	s4.8,3.2,7.8,3.2h22.4c2.9,0,5.7-1.1,7.8-3.2c2.1-2.1,3.2-4.8,3.2-7.8v-28c0-2.9-1.1-5.7-3.2-7.8c-2.1-2.1-4.8-3.2-7.8-3.2H22.2
	c-2.9,0-5.7,1.1-7.8,3.2s-3.2,4.8-3.2,7.8c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-3.5,1.4-6.7,3.8-9.2c2.5-2.5,5.7-3.8,9.2-3.8h22.4
	c3.5,0,6.7,1.4,9.2,3.8c2.5,2.5,3.8,5.7,3.8,9.2v28c0,3.5-1.4,6.7-3.8,9.2C51.3,57.4,48,58.7,44.6,58.7z"
                        />
                        <path d="M10.3 30.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S13.1 30.8 10.3 30.8zM10.3 22.8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S12 22.8 10.3 22.8zM10.3 42.4c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S13.1 42.4 10.3 42.4zM10.3 34.4c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S12 34.4 10.3 34.4zM45.4 33.2c-.8-1.9-2.1-3.5-3.9-4.7-.8-.5-1.1-1.6-.7-2.5.6-1.2.8-2.7.6-4.2-.5-3-3-5.4-6-5.7-4.5-.5-8.1 3-7.9 7.4.2 2.9 2.2 5.4 5 6.2 2 .6 4 .2 5.5-.7 2.7 1.1 4.5 2.8 5.4 5 1.3 3 .8 6.6.2 8.7-.2.9-1 1.5-1.9 1.5H27.2c-.8 0-1.6-.5-1.9-1.3-2.3-6.7 2.1-11.3 2.3-11.5.4-.4.4-1 0-1.4s-1-.4-1.4 0c0 .1-6.4 6.7-1.9 15.7.2.4.5.6.9.6H44c.4 0 .7-.3.8-.7C44.9 45.3 47.8 38.8 45.4 33.2zM29.5 22.6c.2-2 1.5-3.7 3.4-4.3 3.5-1.1 7 1.7 6.6 5.3-.3 2.4-2.3 4.3-4.7 4.4C31.7 28.1 29.3 25.7 29.5 22.6z" />
                      </svg>
                    </span>
                    <Link to="/Contact" className="p-2">
                      Contact
                    </Link>
                  </li>
                  <li
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19.777,6.387h-2.212c-0.214,0-0.406-0.136-0.48-0.337l-0.578-1.592c-0.244-0.675-0.891-1.127-1.608-1.127H9.102
	c-0.718,0-1.364,0.452-1.607,1.126L6.915,6.049c-0.074,0.202-0.267,0.338-0.48,0.338H4.223C2.666,6.387,1.4,7.652,1.4,9.208v8.64
	c0,1.556,1.266,2.821,2.822,2.821h15.555c1.557,0,2.822-1.266,2.822-2.821v-8.64C22.6,7.652,21.334,6.387,19.777,6.387z
	 M21.4,17.848c0,0.895-0.729,1.622-1.623,1.622H4.223c-0.895,0-1.623-0.728-1.623-1.622v-8.64c0-0.895,0.729-1.622,1.623-1.622
	h2.212c0.716,0,1.361-0.452,1.607-1.126l0.58-1.594c0.072-0.2,0.266-0.336,0.479-0.336h5.797c0.214,0,0.407,0.136,0.48,0.337
	l0.579,1.594c0.246,0.673,0.892,1.125,1.607,1.125h2.212c0.895,0,1.623,0.728,1.623,1.622V17.848z M12,9.351
	c-2.261,0-4.1,1.839-4.1,4.1s1.839,4.1,4.1,4.1s4.1-1.839,4.1-4.1S14.261,9.351,12,9.351z M12,16.351c-1.599,0-2.9-1.302-2.9-2.9
	s1.302-2.9,2.9-2.9s2.9,1.302,2.9,2.9S13.599,16.351,12,16.351z"
                        />
                      </svg>
                    </span>
                    <Link to="/Gallery" className="p-2">
                      Gallery
                    </Link>
                  </li>
                  {decodedToken ? (
                    <>
                      <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <span className="ml-2">
                                <Link to="/userprofile" className="p-2">
                                  My profile
                                </Link>
                              </span>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-help"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={12} r={9} />
                              <line x1={12} y1={17} x2={12} y2="17.01" />
                              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            <span className="ml-2">
                              <button onClick={logout}>
                                Logout
                              </button>
                            </span>
                          </li>
                        </ul>
                      )}
                      <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                          alt="logo"
                        />
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                    </>
                  ) : (
                    <>
                      <li
                        href=""
                        className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                      >
                        <BsFillPersonPlusFill />
                        <Link to="/Signup" className="p-2">
                          Sign Up
                        </Link>
                      </li>
                      <li
                        className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                      >
                        <AiOutlineLogin />
                        <Link to="/login" className="p-2">
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="ml-6 relative">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-transparent backdrop-blur-xl fixed top-0 z-40">
            <div className="w-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={43}
                height={44}
                viewBox="0 0 43 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                  fill="#667EEA"
                />
              </svg>
            </div>
            <h1 className="text-base  text-gray-800 mr-28">Madhu Homestay</h1>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
                
              >
                {show ? (
                  ""
                ) : (
                  <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                  
                  </>
                )}
              </div>
              <Routes>
          <Route path="/Content" element={<Content />} />
          
        </Routes>
            </div>
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 fixed overflow-y-auto  bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <div className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                              </svg>
                            </div>
                            <p className=" xl:text-base text-base ml-3">
                              <Link to="/" className="p-2">
                                Home
                              </Link>
                            </p>
                          </div>
                        </li>
                      </div>
                      <div className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-puzzle"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                <Link to="/About" className="p-2">
                                  About
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 64 64"
                                width={20}
                                height={20}
                                viewBox="0 0 64 64"
                              >
                                <path
                                  d="M44.6,58.7H22.2c-3.5,0-6.7-1.4-9.2-3.8c-2.5-2.5-3.8-5.7-3.8-9.2c0-0.6,0.4-1,1-1s1,0.4,1,1c0,2.9,1.1,5.7,3.2,7.8
	s4.8,3.2,7.8,3.2h22.4c2.9,0,5.7-1.1,7.8-3.2c2.1-2.1,3.2-4.8,3.2-7.8v-28c0-2.9-1.1-5.7-3.2-7.8c-2.1-2.1-4.8-3.2-7.8-3.2H22.2
	c-2.9,0-5.7,1.1-7.8,3.2s-3.2,4.8-3.2,7.8c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-3.5,1.4-6.7,3.8-9.2c2.5-2.5,5.7-3.8,9.2-3.8h22.4
	c3.5,0,6.7,1.4,9.2,3.8c2.5,2.5,3.8,5.7,3.8,9.2v28c0,3.5-1.4,6.7-3.8,9.2C51.3,57.4,48,58.7,44.6,58.7z"
                                />
                                <path d="M10.3 30.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S13.1 30.8 10.3 30.8zM10.3 22.8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S12 22.8 10.3 22.8zM10.3 42.4c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S13.1 42.4 10.3 42.4zM10.3 34.4c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S12 34.4 10.3 34.4zM45.4 33.2c-.8-1.9-2.1-3.5-3.9-4.7-.8-.5-1.1-1.6-.7-2.5.6-1.2.8-2.7.6-4.2-.5-3-3-5.4-6-5.7-4.5-.5-8.1 3-7.9 7.4.2 2.9 2.2 5.4 5 6.2 2 .6 4 .2 5.5-.7 2.7 1.1 4.5 2.8 5.4 5 1.3 3 .8 6.6.2 8.7-.2.9-1 1.5-1.9 1.5H27.2c-.8 0-1.6-.5-1.9-1.3-2.3-6.7 2.1-11.3 2.3-11.5.4-.4.4-1 0-1.4s-1-.4-1.4 0c0 .1-6.4 6.7-1.9 15.7.2.4.5.6.9.6H44c.4 0 .7-.3.8-.7C44.9 45.3 47.8 38.8 45.4 33.2zM29.5 22.6c.2-2 1.5-3.7 3.4-4.3 3.5-1.1 7 1.7 6.6 5.3-.3 2.4-2.3 4.3-4.7 4.4C31.7 28.1 29.3 25.7 29.5 22.6z" />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              <Link to="/Contact" className="p-2">
                                Contact
                              </Link>
                            </p>
                          </div>
                        </li>
                      </div>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                enableBackground="new 0 0 24 24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M19.777,6.387h-2.212c-0.214,0-0.406-0.136-0.48-0.337l-0.578-1.592c-0.244-0.675-0.891-1.127-1.608-1.127H9.102
	c-0.718,0-1.364,0.452-1.607,1.126L6.915,6.049c-0.074,0.202-0.267,0.338-0.48,0.338H4.223C2.666,6.387,1.4,7.652,1.4,9.208v8.64
	c0,1.556,1.266,2.821,2.822,2.821h15.555c1.557,0,2.822-1.266,2.822-2.821v-8.64C22.6,7.652,21.334,6.387,19.777,6.387z
	 M21.4,17.848c0,0.895-0.729,1.622-1.623,1.622H4.223c-0.895,0-1.623-0.728-1.623-1.622v-8.64c0-0.895,0.729-1.622,1.623-1.622
	h2.212c0.716,0,1.361-0.452,1.607-1.126l0.58-1.594c0.072-0.2,0.266-0.336,0.479-0.336h5.797c0.214,0,0.407,0.136,0.48,0.337
	l0.579,1.594c0.246,0.673,0.892,1.125,1.607,1.125h2.212c0.895,0,1.623,0.728,1.623,1.622V17.848z M12,9.351
	c-2.261,0-4.1,1.839-4.1,4.1s1.839,4.1,4.1,4.1s4.1-1.839,4.1-4.1S14.261,9.351,12,9.351z M12,16.351c-1.599,0-2.9-1.302-2.9-2.9
	s1.302-2.9,2.9-2.9s2.9,1.302,2.9,2.9S13.599,16.351,12,16.351z"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              <Link to="/Gallery" className="p-2">
                                Gallery
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>

                      {/* Render Profile here */}
                      {!decodedToken ? (
                        <>
                          <li className="text-gray-800 pt-8 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <BsFillPersonPlusFill />
                                <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                  <Link to="/Signup" className="p-2">
                                    Sign Up
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="text-gray-800 pt-8 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <AiOutlineLogin />
                                <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                  <Link to="/login" className="p-2">
                                    Login
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <div className="w-full pt-4">
                            <div className="border-t border-gray-300">
                              <div className="w-full flex items-center justify-between pt-1">
                                <div className="flex items-center">
                                  <img
                                    alt="profile-pic"
                                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                                    className="w-8 h-8 rounded-md"
                                  />
                                  <p className=" text-gray-800 text-base leading-4 ml-2">
                                    <Link to="/userprofile" className="p-2">
                                      My profile
                                    </Link>
                                  </p>
                                </div>
                                <ul className="flex">
                                  <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-help"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <circle cx={12} cy={12} r={9} />
                                      <line
                                        x1={12}
                                        y1={17}
                                        x2={12}
                                        y2="17.01"
                                      />
                                      <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    <span className="ml-2">
                                      <button onClick={logout}>
                                        Logout
                                      </button>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
};

export default Navbar2;
