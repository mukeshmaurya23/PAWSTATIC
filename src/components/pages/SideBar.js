// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import Services from "./services/Services";
// const SideBar = () => {
//   return (
//     <div class="flex flex-col h-screen">
//       <div class="flex flex-row h-[100vh]">
//         <aside class="bg-gray-900 w-[18rem] overflow-y-auto flex flex-col justify-between">
//           <div class="p-10 m-5">
//             <Link to="/">
//               <img
//                 src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
//                 alt="Logo"
//                 class="h-12 w-12 rounded-full"
//               />
//             </Link>
//             <div class="flex flex-col">
//               <div class="my-2 flex flex-col mt-10">
//                 <span class="text-sm  text-gray-400 tracking-wider">
//                   SERVICES{" "}
//                 </span>
//                 <span class="mt-3 text-white">Scheduled</span>
//                 <span class="text-white">Completed</span>
//               </div>
//               <div class="my-2 mt-7 flex flex-col">
//                 <span class="text-sm  text-gray-400">PETS</span>
//                 <span class="text-white mt-3">Ginger</span>
//                 <span class="text-white mt-2">Fluffy</span>
//               </div>
//               <Link
//                 to="/booking"
//                 class="bg-red-50 text-black  py-2 mt-7 mb-2 text-center rounded"
//               >
//                 Book a Service
//               </Link>
//             </div>
//           </div>
//           <div class="mb-4 px-6 flex flex-col ml-6">
//             <Link
//               to="account"
//               class="text-blue-200 mt-3 hover:text-white cursor-pointer"
//             >
//               My Account
//             </Link>
//             <span class="text-blue-200 mt-3 hover:text-white cursor-pointer ">
//               Sign Out
//             </span>
//             <span class="text-blue-200 mt-3 hover:text-white cursor-pointer ">
//               Support
//             </span>
//           </div>
//         </aside>
//         <main class=" flex-1 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

//Today comment
// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Services from "./services/Services";

// const SideBar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-col md:flex-row h-screen">
//         <div
//           className={`md:hidden ${
//             isSidebarOpen ? "bg-gray-900" : "bg-red-50 "
//           }`}
//         >
//           <div className="flex justify-between p-2">
//             <button
//               className={`   ${isSidebarOpen ? "text-white" : "text-black "}`}
//               onClick={toggleSidebar}
//               aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isSidebarOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div
//           className={`${
//             isSidebarOpen ? "block" : "hidden"
//           } md:block bg-gray-900 md:w-[18rem] overflow-y-auto flex flex-col justify-between`}
//         >
//           <div className="p-10 m-5">
//             <Link to="/">
//               <img
//                 src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
//                 alt="Logo"
//                 className="h-12 w-12 rounded-full"
//               />
//             </Link>
//             <div className="flex flex-col">
//               <div className="my-2 flex flex-col mt-10">
//                 <span className="text-sm text-gray-400 tracking-wider">
//                   SERVICES{" "}
//                 </span>
//                 <span className="mt-3 text-white">Scheduled</span>
//                 <span className="text-white">Completed</span>
//               </div>
//               <div className="my-2 mt-7 flex flex-col">
//                 <span className="text-sm text-gray-400">PETS</span>
//                 <span className="text-white mt-3">Ginger</span>
//                 <span className="text-white mt-2">Fluffy</span>
//               </div>
//               <Link
//                 to="/booking"
//                 className="bg-red-50 text-black py-2 mt-7 mb-2 text-center rounded"
//               >
//                 Book a Service
//               </Link>
//             </div>
//           </div>
//           <div className="mb-4 px-6 flex flex-col ml-6">
//             <Link
//               to="account"
//               className="text-blue-200 mt-3 hover:text-white cursor-pointer"
//               onClick={toggleSidebar}
//             >
//               My Account
//             </Link>
//             <span className="text-blue-200 mt-3 hover:text-white cursor-pointer">
//               Sign Out
//             </span>
//             <span className="text-blue-200 mt-3 hover:text-white cursor-pointer">
//               Support
//             </span>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <main className="flex-1 overflow-y-auto">
//             <Outlet context={[isSidebarOpen]} />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Services from "./services/Services";

// const SideBar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-col md:flex-row h-screen">
//         <div className="md:hidden bg-gray-900">
//           <div className="flex justify-between p-2">
//             <button
//               className="text-white"
//               onClick={toggleSidebar}
//               aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isSidebarOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div
//           className={`${
//             isSidebarOpen ? "block" : "hidden"
//           } md:block bg-gray-900 md:w-[18rem] overflow-y-auto flex flex-col justify-between`}
//         >
//           <div className="p-10 m-5">
//             <Link to="/">
//               <img
//                 src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
//                 alt="Logo"
//                 className="h-12 w-12 rounded-full"
//               />
//             </Link>
//             <div className="flex flex-col">
//               <div className="my-2 flex flex-col mt-10">
//                 <span className="text-sm text-gray-400 tracking-wider">
//                   SERVICES{" "}
//                 </span>
//                 <span className="mt-3 text-white">Scheduled</span>
//                 <span className="text-white">Completed</span>
//               </div>
//               <div className="my-2 mt-7 flex flex-col">
//                 <span className="text-sm text-gray-400">PETS</span>
//                 <span className="text-white mt-3">Ginger</span>
//                 <span className="text-white mt-2">Fluffy</span>
//               </div>
//               <Link
//                 to="/booking"
//                 className="bg-red-50 text-black py-2 mt-7 mb-2 text-center rounded"
//               >
//                 Book a Service
//               </Link>
//             </div>
//           </div>
//           <div className="mb-4 px-6 flex flex-col ml-6">
//             <Link
//               to="account"
//               className="text-blue-200 mt-3 hover:text-white cursor-pointer"
//               onClick={toggleSidebar}
//             >
//               My Account
//             </Link>
//             <span className="text-blue-200 mt-3 hover:text-white cursor-pointer">
//               Sign Out
//             </span>
//             <span className="text-blue-200 mt-3 hover:text-white cursor-pointer">
//               Support
//             </span>
//           </div>
//         </div>

//         <main className="flex-1 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

//current
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row h-screen">
        <div
          className={`md:hidden ${
            isSidebarOpen ? "bg-gray-900" : "bg-red-50 "
          }`}
        >
          <div className="flex justify-between p-2">
            <button
              className={`   ${isSidebarOpen ? "text-white" : "text-black "}`}
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block bg-gray-900 md:w-[18rem] overflow-y-auto flex flex-col justify-between h-screen md:h-auto`}
        >
          <div className="p-10 m-5">
            <Link to="/">
              <img
                src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full"
              />
            </Link>
            <div className="flex flex-col">
              <div className="my-2 flex flex-col mt-10">
                <span className="text-sm text-gray-400 tracking-wider">
                  SERVICES{" "}
                </span>
                <span
                  className="mt-3 text-white cursor-pointer"
                  onClick={() => navigate("/profile") || toggleSidebar()}
                >
                  Scheduled
                </span>
                <span className="text-white">Completed</span>
              </div>
              <div className="my-2 mt-7 flex flex-col">
                <span className="text-sm text-gray-400">PETS</span>
                <span className="text-white mt-3">Ginger</span>
                <span className="text-white mt-2">Fluffy</span>
              </div>
              <Link
                to="/booking"
                className="bg-red-50 text-black py-2 mt-7 mb-2 text-center rounded"
              >
                Book a Service
              </Link>
            </div>
          </div>
          <div className="mb-4 px-6 flex flex-col ml-6">
            <Link
              to="account"
              className="text-blue-200 mt-3 hover:text-white cursor-pointer"
              onClick={toggleSidebar}
            >
              My Account
            </Link>
            <span className="text-blue-200 mt-3 hover:text-white cursor-pointer">
              Sign Out
            </span>
            <span className="text-blue-200 mt-3 hover:text-white cursor-pointer">
              Support
            </span>
          </div>
        </div>

        <main className="hidden md:block flex-1 overflow-y-auto">
          <Outlet />
        </main>
        {!isSidebarOpen ? (
          <main className="block md:hidden flex-1 overflow-y-auto">
            <Outlet />
          </main>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
