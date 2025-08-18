import banner from "../../assets/images/banner.png";
import avt from "../../assets/images/avt.png";
import avt1 from "../../assets/images/avt-1.png";
import avt2 from "../../assets/images/avt-2.png";
import avatar from "../../assets/images/avatar.png";
import ellipse from "../../assets/images/ellipse.png";
import exploreMore from "../../assets/images/explore-more.png";
import { MdOutlineStarHalf, MdOutlineStarPurple500 } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { RiBarChartLine } from "react-icons/ri";

export default function Banner() {
  return (
    <div>
      <div
        className="rounded-b-xl md:rounded-b-4xl bg-cover bg-center md:h-[650px] w-[wv]]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container relative">
          <div className="px-3 md:px-0 pt-6 md:pt-36 flex justify-between pb-4">
            <div className="w-full md:w-[672px] pt-16">
              <div className="w-32 md:w-52 bg-white bg-opacity-80 px-2 md:px-4 py-0.5 md:py-2 text-center rounded-lg text-[10px] md:text-base">
                Never stop learning
              </div>
              <div className="text-[26px] md:text-[64px] text-(--primary-color) font-bold mt-2 md:leading-[75px]">
                Grow up your skills by online courses with Onlearning
              </div>
              <div className="text-lg mt-2 md:mt-4 flex flex-col md:flex-row gap-4 md:gap-2">
                <button className="w-fit bg-(--secondary-color) px-2 md:px-8 py-1 md:py-4 rounded-md md:rounded-xl text-[10px] md:text-base text-white">
                  EXPLORE PATH
                </button>
                <div className="flex gap-2">
                  <div className="flex h-8 md:h-14 ">
                    <img className="" src={avt1} alt="" />
                    <img className="-ml-2 md:-ml-4" src={avt2} alt="" />
                    <img className="-ml-2 md:-ml-4" src={avt} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex">
                      <MdOutlineStarPurple500 className="text-sm md:text-2xl" />
                      <MdOutlineStarPurple500 className="text-sm md:text-2xl" />
                      <MdOutlineStarPurple500 className="text-sm md:text-2xl" />
                      <MdOutlineStarPurple500 className="text-sm md:text-2xl" />
                      <MdOutlineStarHalf className="text-sm md:text-2xl" />
                    </div>
                    <div className="text-sm md:text-base">( 10k+ Reviews)</div>
                  </div>
                </div>
              </div>

              <img
                className="block md:hidden absolute bottom-0 right-3 h-40"
                src={avatar}
                alt=""
              />
              <div className="md:hidden bg-(--secondary-color) p-1 flex justify-center items-center rounded-lg md:rounded-xl h-7s w-7 md:h-12 md:w-12 absolute right-4 top-52">
                <div className="bg-white p-1 rounded-md h-5 w-5 md:h-8 md:w-8 flex justify-center items-center">
                  <RiBarChartLine className="text-xl text-(--secondary-color)" />
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img src={avatar} alt="" />
              <div className="absolute flex justify-between items-center -left-24 bottom-36 w-80 text-center bg-white/90 text-lg px-6 py-5 rounded-3xl z-10">
                <div className="bg-[#23BDEE] p-1 flex justify-center items-center rounded-xl h-12 w-12">
                  <BiCalendar className="text-3xl text-white" />
                </div>
                <div className="text-[#595959] text-left">
                  <div className="font-bold text-3xl">250k</div>
                  <div className="font-semibold text-xl">Assisted Student</div>
                </div>
              </div>

              <div className="bg-(--secondary-color) p-1 flex justify-center items-center rounded-xl h-12 w-12 absolute right-8 top-52">
                <div className="bg-white p-1 rounded-md h-8 w-8 flex justify-center items-center">
                  <RiBarChartLine className="text-xl text-(--secondary-color)" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center absolute -bottom-24 left-1/2 -translate-x-1/2">
              <img src={ellipse} alt="" />
            </div>
            <div className="flex justify-center items-center absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-40">
              <img src={exploreMore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
