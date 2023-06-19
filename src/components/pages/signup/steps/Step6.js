import Button from "../../../UI/ReusableComponent/Button";

const Step6 = () => {
  return (
    <>
      <div class="text-center mx-auto flex justify-center md:mt-10">
        <h2 class="text-2xl md:text-3xl md:w-1/2 font-bold tracking-wide  mt-4 p-2 md:p-0">
          Okay Ginger all set ! We will notify you when we find a match
        </h2>
      </div>
      <div class="md:mt-4 mx-4 md:mx-8 md:p-5 relative ">
        <div class="shadow-xl my-12 pb-6  justify-center items-center overflow-hidden md:w-1/2 rounded-lg  mx-auto bg-white">
          <div class="  h-24 w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-white rounded-full overflow-hidden border-4">
            <img
              class="object-cover object-center w-full h-full "
              src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            />
          </div>
          <div class="mt-16">
            <h1 class="text-lg text-center font-semibold">Ginger</h1>
            <p class="text-sm  text-center">Golden Retreiver</p>
          </div>
          <div class="mt-6 pt-3 flex flex-wrap justify-center mx-6">
            <div className="border-t border-gray-400 w-full"></div>
            <div class="m-2">
              <h2 class="py-3 px-4 text-center">Favourite things</h2>
              <Button className="bg-red-50 py-1 px-4 rounded-full">
                Barking
              </Button>
              <Button className="bg-red-50 ml-1 py-1 px-4 rounded-full">
                Sungla
              </Button>
              <Button className="bg-red-50 ml-1 py-1 px-4 rounded-full">
                Dancing
              </Button>
              <Button className="bg-red-50 ml-1 py-1 px-4 mt-2 md:mt-0 rounded-full">
                Giving
              </Button>
            </div>
            <div className=" flex ">
              <div class="flex justify-between border mt-8 mx-4 ">
                <div class=" border-r p-3 text-center">
                  <i
                    class="fa fa-snowflake-o text-center"
                    aria-hidden="true"
                  ></i>

                  <p>Female</p>
                </div>
                <div class="border-r p-4">
                  <p className="text-center">8</p>
                  <p>Years Old</p>
                </div>
                <div class=" border-r p-4 text-center">
                  <i
                    class="fa fa-handshake-o text-center"
                    aria-hidden="true"
                  ></i>

                  <p>Spayed</p>
                </div>
                <div class=" p-4">
                  <p>50-100</p>
                  <p>Pounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mb-3">
          Got more pets?Lucky you!{" "}
          <span className="text-black font-semibold">
            Add another pet profile
          </span>
        </p>
      </div>
    </>
  );
};

export default Step6;
