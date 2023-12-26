import Image from "next/image";
import React from "react";
import { Rubik } from "next/font/google";
import backgroundImage from "../../public/images/background-image.png";
import mobileGame1 from "../../public/svg/mobile.svg";
import mobileGame2 from "../../public/svg/mobile2.svg"
import mobileGame3 from "../../public/svg/mobile3.svg"
import mobileGame4 from "../../public/svg/mobile4.svg"
import arrowIcon from "../../public/svg/arrow.svg";

const rubik = Rubik({ weight: "500", style: "normal", subsets: ["latin"] });

interface TrendingProps {
  image: JSX.Element;
  text: string;
}
interface GamingProps {
  image: JSX.Element;
  text: string;
  icon: JSX.Element;
}

const TrendingGames: React.FC<TrendingProps> = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center">
      {image}

      <span className="flex gap-1 items-center w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0_1_27)">
            <path
              d="M21.8216 14.6372C21.5352 10.9087 19.7993 8.57221 18.2678 6.5104C16.8498 4.60161 15.625 2.95327 15.625 0.521725C15.625 0.326413 15.5156 0.147897 15.3422 0.0583953C15.1682 -0.0316437 14.9592 -0.0168976 14.801 0.0980438C12.501 1.74384 10.582 4.51772 9.91162 7.1644C9.44624 9.00703 9.38467 11.0785 9.37603 12.4466C7.252 11.993 6.77085 8.81582 6.76577 8.7812C6.74185 8.6164 6.64116 8.47299 6.49468 8.39468C6.34668 8.31738 6.17271 8.31176 6.02266 8.38603C5.91128 8.43994 3.28877 9.77246 3.13618 15.0928C3.12549 15.2698 3.125 15.4474 3.125 15.6249C3.125 20.7936 7.33081 24.9992 12.5 24.9992C12.5071 24.9997 12.5147 25.0007 12.5208 24.9992C12.5229 24.9992 12.5249 24.9992 12.5274 24.9992C17.6839 24.9844 21.875 20.7845 21.875 15.6249C21.875 15.3649 21.8216 14.6372 21.8216 14.6372ZM12.5 23.9576C10.7768 23.9576 9.375 22.4644 9.375 20.6289C9.375 20.5664 9.37451 20.5033 9.37905 20.426C9.3999 19.6519 9.54692 19.1235 9.70815 18.772C10.0103 19.421 10.5504 20.0176 11.4278 20.0176C11.7157 20.0176 11.9487 19.7846 11.9487 19.4968C11.9487 18.7553 11.964 17.8998 12.1486 17.1277C12.3129 16.4432 12.7055 15.7148 13.203 15.131C13.4242 15.8888 13.8556 16.5021 14.2767 17.1008C14.8794 17.9572 15.5025 18.8427 15.6119 20.3527C15.6185 20.4422 15.6251 20.5323 15.6251 20.6289C15.625 22.4644 14.2232 23.9576 12.5 23.9576Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_27">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>{" "}
        <p className="text-[22px] font-medium leading-[42px] font-Rubic">
          {text}
        </p>
      </span>
    </div>
  );
};
const GameingStation: React.FC<GamingProps> = ({ image, text, icon }) => {
  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="w-[65px] h-[65px] bg-white rounded-full items-center flex justify-center">
        {image}
      </div>

      <p className="text-base font-medium leading-[30px] text-center ">
        {text}
      </p>

      {icon}
    </div>
  );
};

const Main = () => {
  return (
    <>
      <div className="px-80 bg-slate-200">
        <div className="w-full bg-red-300  h-[90vh] flex justify-center relative">
          <Image
            src="/game-pad.png"
            className="absolute inseft-0 bg-no-repeat bg-ccenter bg-cover flecx flcex-col itecms-center justicfy-center "
            width={629}
            height={629}
            alt="game-pad"
          />

          <div className="w-[527px] h-[527px] absolute z-20 top-48 left-0 bg-slate-300 ">
            <span className="text-[20px] font-bold leading-[32px] text-[#E87D0E]">
              Proved By prodesigner
            </span>

            <p className="text-[50px] font-bold leading-[70px] w-[480px] bg-stone-400 mb-[24px] ">
              Work that we produce for our clients
            </p>
            <p className="text-[16px] font-medium leading-[32px]">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the is standard.
            </p>
            <button className="text-base w-[195px] h-[53px] rounded-[40px] btn mt-[50px]">
              Get more details
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[58px]">
          {/*  Trending Games and 40 followers */}
          <div className="flex w-full justify-between">
            <h1 className="text-[31px] font-bold leading-[59px] font-Rubic">
              Currently Trending Games
            </h1>

            <button className="h-[57px] w-[139px] rounded-[10px] font-Rubic bg-blue-200 text-[20px] font-medium leading-[38px]">
              {" "}
              SEE ALL
            </button>
          </div>

          <div className="flex justify-between">
            <TrendingGames
              image={
                <Image
                  src="/trending-game1.png"
                  width={251}
                  height={277}
                  alt="trending game"
                />
              }
              text="40 Followers"
            />

            <TrendingGames
              image={
                <Image
                  src="/trending-game1.png"
                  width={251}
                  height={277}
                  alt="trending game"
                />
              }
              text="40 Followers"
            />

            <TrendingGames
              image={
                <Image
                  src="/trending-game1.png"
                  width={251}
                  height={277}
                  alt="trending game"
                />
              }
              text="40 Followers"
            />

            <TrendingGames
              image={
                <Image
                  src="/trending-game1.png"
                  width={251}
                  height={277}
                  alt="trending game"
                />
              }
              text="40 Followers"
            />
          </div>

          <div className="w-full flex items-center justify-center py-[60px]">
            <span className="w-[826px] bg-slate-400 text-center text-[35px] font-bold leading-[60px] font-Poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
        </div>
        <div className="w-full  ">
          <div className="w-[545px] pb-[46px] ">
            <p className="text-[30px] font-semibold leading-[57px] ">
              Lorem Ipsum
            </p>

            <span className="font-Poppins text-base leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </span>
          </div>

          <Image
            src="/game1.png"
            width={10000}
            height={462}
            objectFit="contain"
            alt="game pic"
          />
        </div>
      </div>

      <div
        className="bg-blue-400 w-screen background-image bg-scroll flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "881px",
        }}
      >
        <div className="2xl:w-[1045px] h-[696px] bg-slate-500 flex flex-col justify-evenly items-center">
          <div className="w-[826px] font-Poppins flex flex-col justify-center items-center">
            <h1 className="text-center text-[30px] font-bold leading-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>

            <p className="text-center text-base font-normal leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </p>
          </div>

          <div className="w-[1045px] h-[400px] bg-red-200 font-Poppins flex flex-col justify-between items-center">
           
            <div className="flex justify-between w-full">
            <GameingStation
              image={
                <Image
                  src={mobileGame1}
                  width={30}
                  height={30}
                  alt="Mobile Game Development"
                />
              }
              text="Mobile Game Development"
              icon={
                <Image
                  src={arrowIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              }
            />

            <GameingStation
              image={
                <Image
                  src={mobileGame2}
                  width={30}
                  height={30}
                  alt="Mobile Game Development"
                />
              }
              text="Mobile Game Development"
              icon={
                <Image
                  src={arrowIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              }
            />

            <GameingStation
              image={
                <Image
                  src={mobileGame3}
                  width={30}
                  height={30}
                  alt="Mobile Game Development"
                />
              }
              text="Mobile Game Development"
              icon={
                <Image
                  src={arrowIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              }
            />

            <GameingStation
              image={
                <Image
                  src={mobileGame4}
                  width={30}
                  height={30}
                  alt="Mobile Game Development"
                />
              }
              text="Mobile Game Development"
              icon={
                <Image
                  src={arrowIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              }
            />

            </div>

            <div className="flex gap-[] justify-evenly w-full">
            <GameingStation
              image={
                <Image
                  src={mobileGame1}
                  width={30}
                  height={30}
                  alt="AR/ VR design"
                />
              }
              text="AR/ VR design"
              icon={
                <Image
                  src={arrowIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              }
            />
            <GameingStation
              image={
                <Image
                  src={mobileGame1}
                  width={30}
                  height={30}
                  alt="Mobile Game Development"
                />
              }
              text="Mobile Game Development"
              icon={
                <Image
                  src={arrowIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              }
            />



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
