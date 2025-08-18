import { useState } from "react";
import course1 from "../../assets/images/popular-courses/course-1.png";
import course2 from "../../assets/images/popular-courses/course-2.png";
import course3 from "../../assets/images/popular-courses/course-3.png";
import course4 from "../../assets/images/popular-courses/course-4.png";
import PopularCard from "./PopularCard";

export default function PopularCourses() {
  const courseCategories: any[] = [
    {
      id: 1,
      title: "Program Design",
    },
    {
      id: 2,
      title: "Web Development",
    },
    {
      id: 3,
      title: "Data Science",
    },
    {
      id: 4,
      title: "Machine Learning",
    },
    {
      id: 5,
      title: "Mobile Development",
    },
    {
      id: 6,
      title: "Game Development",
    },
  ];

  const courseDetails = [
    {
      id: 1,
      title: "Product Management Basic - Course",
      image: course1,
      amountStudents: 1200,
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      originPrice: 199,
      discountPrice: 149,
    },
    {
      id: 2,
      title: "BM Data Science Professional Certificate",
      image: course2,
      amountStudents: 800,
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      originPrice: 199,
      discountPrice: 149,
    },
    {
      id: 3,
      title: "The Science of Well-Being",
      image: course3,
      amountStudents: 600,
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      originPrice: 199,
      discountPrice: 149,
    },
    {
      id: 4,
      title: "Python for Everybody Specialization",
      image: course4,
      amountStudents: 400,
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      originPrice: 199,
      discountPrice: 149,
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState<number>(1);

  return (
    <section id="courses" className="container">
      <div className="w-full">
        <div
          style={{
            fontFamily: "Inter",
          }}
          className="text-[#FD661F] text-4xl font-extrabold capitalize text-center"
        >
          Popular Courses
        </div>

        <div className="flex flex-wrap items-center justify-center lg:gap-6 sm:gap-4 gap-2 md:mt-12 sm:mt-8 mt-5">
          {courseCategories.map((course, idx) => (
            <button
              key={idx}
              className={`p-[10px] px-6 rounded-md text-xs font-medium border cursor-pointer transition-all duration-300 outline-none ${
                selectedCourse === course.id
                  ? "bg-(--primary-color) text-white border-(--primary-color)"
                  : "text-zinc-400 border-zinc-300"
              }`}
              onClick={() => setSelectedCourse(course.id)}
            >
              <span>{course.title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-6 md:mt-12 sm:mt-8 mt-5">
          {courseDetails.map((course) => (
            <PopularCard
              key={course.id}
              title={course.title}
              image={course.image}
              description={course.description}
              originPrice={course.originPrice}
              discountPrice={course.discountPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
