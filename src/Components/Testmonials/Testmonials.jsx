import React from "react";

const Testmonials = () => {
  return (
    <>
      <p id="testmonials" className="section-title text-4xl font-semibold text-center p-[30px]">TESTMONIALS</p>
      <div className="flex flex-col items-center m-auto container mt-32">
        <div className="w-96 h-80 bg-[rgba(255,255,255,0.075)] rounded-lg relative p-5">
          <div className="absolute top-[-4rem] left-[8rem]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-UDArhHwW0qCccONfbUQYHvtYipSvO8nOg&usqp=CAU"
              alt=""
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
          <p className="mt-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.{" "}
          </p>
          <p className="absolute bottom-2 right-5 font-semibold">
            <span className="text-violet-700">-</span> Mark Zuckerberg
          </p>
        </div>
          <span className='w-2 h-2 bg-white my-4'></span>
      </div>
    </>
  );
};

export default Testmonials;
