import React from "react";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div class="flex-col md:h-screen flex">
        <div class="flex flex-col md:flex-row md:h-[100vh]">
          <aside class="bg-gray-600 w-full md:w-[15rem] overflow-y-auto flex flex-col ">
            <div class="border-b">
              <p class="p-4 text-gray-300 font-semibold text-center">
                My Account
              </p>
            </div>
            <div class="flex flex-col mt-10 justify-center items-center">
              <div class="flex flex-col mt-10 ">
                <span class="text-sm text-gray-400 tracking-wider">
                  PROFILE
                </span>
                <span class="mt-3 text-white">Home address</span>
                <span class="text-white">Contact info</span>
              </div>
              <div class="mt-10 flex flex-col ml-5 ">
                <span class="text-sm text-gray-400">PAYMENT INFO</span>
                <Link to="payment-info" class="text-white mt-3">
                  Payment method
                </Link>
                <span class="text-white mt-2  mb-5 md:mb-0 ">Receipts</span>
              </div>
            </div>
          </aside>
          <main class="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Account;

// import React, { useState, useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";

// const Account = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth >= 768); // Adjust the breakpoint as needed
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial value based on window width

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <div className="flex-col md:h-screen flex">
//         <div className="flex flex-col md:flex-row md:h-[100vh]">
//           {isMobile && (
//             <aside className="bg-gray-600 w-full md:w-[15rem] overflow-y-auto flex flex-col">
//               <div className="border-b">
//                 <p className="p-4 text-gray-300 font-semibold text-center">
//                   My Account
//                 </p>
//               </div>
//               <div className="flex flex-col mt-10 justify-center items-center">
//                 <div className="flex flex-col mt-10 ">
//                   <span className="text-sm text-gray-400 tracking-wider">
//                     PROFILE
//                   </span>
//                   <span className="mt-3 text-white">Home address</span>
//                   <span className="text-white">Contact info</span>
//                 </div>
//                 <div className="mt-10 flex flex-col ml-5 ">
//                   <span className="text-sm text-gray-400">PAYMENT INFO</span>
//                   <Link to="payment-info" className="text-white mt-3">
//                     Payment method
//                   </Link>
//                   <span className="text-white mt-2 mb-5 md:mb-0">Receipts</span>
//                 </div>
//               </div>
//             </aside>
//           )}
//           <main className="flex-1 overflow-y-auto">
//             {!isMobile && (
//               <div className="flex bg-red-50  justify-end h-full mr-6">
//                 <button
//                   className="text-black bg-red-50 "
//                   onClick={() => setIsMobile(true)}
//                 >
//                   <img
//                     src="https://github.com/mukeshmaurya23/TechPlacement/blob/Main/client/src/images/avtar.jpeg?raw=true"
//                     alt="menu"
//                     className="w-12 h-8"
//                   />
//                 </button>
//               </div>
//             )}
//             {!isMobile && <Outlet />}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Account;
