import { MdStars } from "react-icons/md";
import line_circle from "../../assets/images/cta/line_circle.png";
import woman_picture from "../../assets/images/cta/woman.png";

export default function CallToAction() {
  return (
    <section id="cta" className="container relative text-white lg:!mt-20">
      <img
        src={woman_picture}
        alt="Woman holding gift cards"
        className="absolute bottom-0 right-0 w-[50%] lg:block hidden z-10"
      />

      <img
        src={line_circle}
        alt="Woman holding gift cards"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:block hidden"
      />
      <div className="bg-[#DF1C25] rounded-[1rem] p-10 lg:px-16 px-10 w-full">
        <div className="lg:max-w-[60%] w-full">
          <h1
            style={{
              fontFamily: "Inter",
            }}
            className="sm:text-5xl text-3xl font-bold lg:max-w-lg"
          >
            Why You should buy gift cards ?
          </h1>
          <div className="space-y-2 sm:mt-10 mt-5">
            <div className="flex items-center space-x-1">
              <MdStars className="text-2xl" />
              <p className="text-sm font-medium">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <MdStars className="text-2xl" />
              <p className="text-sm font-medium">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <MdStars className="text-2xl" />
              <p className="text-sm font-medium">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
          </div>

          <button className="px-[30px] py-[15px] font-medium text-(--primary-color) bg-white rounded-[10px] sm:mt-10 mt-5 lg:w-fit w-full">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
