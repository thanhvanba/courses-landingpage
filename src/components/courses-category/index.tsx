import icon1 from "../../assets/images/courses-category/icon1.png";
import icon2 from "../../assets/images/courses-category/icon2.png";
import icon3 from "../../assets/images/courses-category/icon3.png";
import icon4 from "../../assets/images/courses-category/icon4.png";
import CategoryCard from "./CategoryCard";

export default function CoursesCategory() {
  const categories = [
    { id: 1, title: "Development", icon: icon1, bgColor: "#A3D3FF" },
    { id: 2, title: "Data", icon: icon2, bgColor: "#F1C9FF" },
    { id: 3, title: "Infrastructure", icon: icon3, bgColor: "#feb800" },
    { id: 4, title: "Design", icon: icon4, bgColor: "#CAC9FF" },
  ];

  return (
    <section id="category" className="container relative md:mt-20 sm:mt-14 mt-10">
      <div className="text-center">
        <h2
          className="text-[40px] sm:text-[44px] md:text-[48px] leading-[1.2] font-bold text-(--primary-color)"
          style={{ fontFamily: "Inter" }}
        >
          Courses Category
        </h2>
        <p className="mt-4 text-zinc-500 max-w-[828px] mx-auto text-[22px]">
          Onlearning is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-12 sm:mt-8 mt-6">
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            title={c.title}
            icon={c.icon}
            bgColor = {c.bgColor}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <button className="h-[42px] w-[177px] text-sm font-medium text-(--primary-color) border border-(--primary-color) rounded-[10px]">
          view all
        </button>
      </div>
    </section>
  );
}
