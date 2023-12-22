import Image from "next/image";
import React from "react";

const Main = () => {
  return (

      <div className="px-[180px] bg-slate-200 relative h-[90vh] w-full flex justify-center">
       
        <Image
          src="/game-pad.png"
          className="absolute inseft-0 bg-no-repeat bg-ccenter bg-cover flecx flcex-col itecms-center justicfy-center "
          width={629}
          height={629}
          alt="game-pad"
        />
       
        

        <div className="w-[527px] h-[527px] absolute z-20 top-60 ">
          <span className="text-[20px] font-bold leading-[32px] text-[#E87D0E]">
            Proved By prodesigner
          </span>

          <p className="text-[50px] font-bold leading-[78px] ">
            Work that we produce for our clients
          </p>
          <p className="text-[16px] font-medium leading-[32px]">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the is standard.
          </p>
          <button className="text-base w-[195px] h-[53px] rounded-[40px] btn">
            Get more details
          </button>
        </div>
      </div>


      // <div>
      //   <h1 className="text-[31px] font-bold leading-[59px] ">Currently Trending Games</h1>
      

      // </div>
    
  );
};

export default Main;
