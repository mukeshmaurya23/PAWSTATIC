import React from "react";

const Card = ({ name, number, expiry, cvc, year, onClick }) => {
  return (
    <>
      <div class="m-1 cursor-pointer " onClick={onClick}>
        <div class="">
          <div class=" mt-4 h-[9rem]  bg-red-100 rounded-xl relative text-white shadow-2xl ">
            <img
              class="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
            />

            <div class="w-full px-2 absolute top-1">
              <div class="flex justify-between">
                <div class="">
                  <p class="font-light text-xs">Name</p>
                  <p class="text-xs tracking-widest">{name}</p>
                </div>
                <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
              </div>
              <div class="pt-0">
                <p class="font-light text-xs">Card Number</p>
                <p class="font-medium tracking-more-wider text-xs">{number}</p>
              </div>
              <div class="pt-2 pr-6">
                <div class="flex justify-between">
                  <div class="">
                    <p class="font-light text-xs">Valid</p>
                    <p class="font-medium tracking-wider text-xs">11/15</p>
                  </div>
                  <div class="">
                    <p class="font-light text-xs text-xs">Expiry</p>
                    <p class="font-medium tracking-wider text-xs">{expiry}</p>
                  </div>

                  <div class="">
                    <p class="font-light text-xs">CVV</p>
                    <p class="font-bold tracking-more-wider text-xs">{cvc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
