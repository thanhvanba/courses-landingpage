import UserAvatar1 from "../../assets/images/popular-courses/user-1.png";
import UserAvatar2 from "../../assets/images/popular-courses/user-2.png";
interface PopularCardProps {
  title: string;
  image: string;
  description: string;
  originPrice: number;
  discountPrice: number;
}

export default function PopularCard({
  title,
  image,
  description,
  originPrice,
  discountPrice,
}: PopularCardProps) {
  return (
    <div
      className="rounded-[14px] flex flex-col justify-between overflow-hidden sm:mb-0 mb-3"
      style={{ boxShadow: "0px 10px 50px rgba(0,0,0,0.1)" }}
    >
      <div>
        <div className="relative">
          <img src={image} alt={title} className="w-full" />
          <div className="bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full p-2 px-0 flex items-center justify-between pr-4 w-52">
            <div className="flex items-center pl-6 h-7">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={index % 2 === 0 ? UserAvatar1 : UserAvatar2}
                  alt={`User Avatar ${index + 1}`}
                  className="w-7 h-7 object-cover -m-2"
                />
              ))}
            </div>
            <div className="font-medium text-sm text-[#263238]">
              + 11 students
            </div>
          </div>
        </div>

        <div className="mt-5 p-5 grid gap-2">
          <span className="text-zinc-400 text-[10px]">1 - 28 July 2022</span>
          <h3 className="font-extrabold text-(--primary-color)">{title}</h3>
          <p className="text-[10px] text-zinc-600 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#FD661F]">
            ${discountPrice}
          </span>
          <span className="line-through text-sm text-zinc-400">
            ${originPrice}
          </span>
        </div>
        <button className="text-white bg-(--primary-color) px-5 p-[10px] text-xs font-medium rounded-[6px] cursor-pointer">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
