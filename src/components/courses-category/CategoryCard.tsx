interface CategoryCardProps {
  icon: string;
  title: string;
  description?: string;
  bgColor?: string;
}

export default function CategoryCard({
  icon,
  title,
  description = "One powerful online software suite that combines",
  bgColor,
}: CategoryCardProps) {
  return (
    <div
      className="group relative rounded-[18px] p-3 text-center transition-all duration-300 bg-transparent hover:bg-white hover:shadow-[0px_20px_80px_rgba(0,0,0,0.08)]"
    >
      <div className="flex justify-center items-center">
        <div
          className="w-16 h-16 rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.08)] grid place-items-center transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>

      <h3 className="mt-5 text-[27px] font-semibold text-(--primary-color) capitalize">
        {title}
      </h3>
      <p className="mt-2 text-[18px] font-medium text-zinc-500 max-w-[260px] mx-auto">
        {description}
      </p>

      <div className="mt-6 relative h-10">
        <button className="absolute left-1/2 -translate-x-1/2 w-[161px] h-[42px] px-6 py-2 text-[15px] font-medium rounded-[10px] text-zinc-500 bg-white border border-zinc-200 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-opacity duration-200 opacity-100 group-hover:opacity-0 pointer-events-none">
          more
        </button>
        <button className="absolute left-1/2 -translate-x-1/2 w-[193px] h-[42px] px-5 py-2 text-[15px] font-medium rounded-[6px] text-white bg-(--secondary-color) transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          Explore courses
        </button>
      </div>
    </div>
  );
}
