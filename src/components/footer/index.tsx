import { useRef } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillClockFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { TbMailFilled } from "react-icons/tb";
import footer_background from "../../assets/images/footer/bg_footer.png";
import line_circle from "../../assets/images/footer/line_circle.png";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <footer
      style={{
        backgroundImage: `url(${footer_background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative py-28 pb-14 text-(--primary-color) lg:mt-0 mt-10 lg:bg-top bg-center"
    >
      <img src={line_circle} alt="" className="absolute right-0 bottom-0" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-9 container py-20">
        <div className="space-y-4">
          <img src={logo} alt="logo" className="pb-3" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-3xl" />
              <p className="text-sm font-bold">Address: </p>
            </div>
            <div className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BiSolidPhoneCall className="text-3xl" />
            <p className="text-sm font-medium">Tel :+9229341037</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillClockFill className="text-2xl" />
            <p className="text-sm font-medium">Response hours: 8 to 20</p>
          </div>
          <div className="flex items-center gap-2">
            <TbMailFilled className="text-2xl" />
            <p className="text-sm font-medium">Email: info@onlearn.com</p>
          </div>
        </div>

        <div className="flex gap-14">
          <div>
            <h2 className="mb-8 text-black font-bold text-lg">Category</h2>
            <div className="grid gap-5 font-medium">
              <a href="#">Counseling</a>
              <a href="#">Health and fitness</a>
              <a href="#">Individual development</a>
              <a href="#">More</a>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-black font-bold text-lg">Links</h2>
            <div className="grid gap-5 font-medium">
              <a href="#">About</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:items-center gap-5 cursor-pointer">
          <p className="text-[15px] text-black">
            Stay up to date with the latest courses
          </p>
          <div
            onClick={() => {
              inputRef.current?.focus();
            }}
            className="flex items-center justify-between bg-white rounded-2xl p-3 pl-8 z-30"
          >
            <input
              ref={inputRef}
              type="Email"
              placeholder="Email"
              className="border-none focus:outline-none"
            />
            <button className="font-medium cursor-pointer p-4 px-12 text-white bg-(--primary-color) rounded-2xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
