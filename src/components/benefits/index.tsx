import certificate from "../../assets/images/benefits/certificate.png";
import dashboard_icon from "../../assets/images/benefits/dashboard_icon.png";
import project_icon from "../../assets/images/benefits/project_icon.png";
import users_icon from "../../assets/images/benefits/users_icon.png";

export default function Benefits() {
  return (
    <section id="benefits" className="container">
      <div className="px-12 grid min-[1200px]:grid-cols-2 grid-cols-1 gap-9">
        <div>
          <div className="text-lg p-2.5 px-6 rounded-[10px] text-(--primary-color) bg-[#F5F5F5] w-fit mb-6">
            Benefits
          </div>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-(--primary-color) text-5xl font-bold mb-11"
          >
            Get Student ID Card
          </p>
          <ul className="space-y-10">
            <li className="flex items-center gap-8">
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="flex items-center justify-center min-w-[3.75rem] w-[3.75rem] h-[3.75rem] rounded-full bg-[#FBFBFB]"
              >
                <img src={dashboard_icon} alt="Dashboard Icon" />
              </div>
              <p>
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </li>
            <li className="flex items-center gap-8">
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="flex items-center justify-center min-w-[3.75rem] w-[3.75rem] h-[3.75rem] rounded-full bg-[#FBFBFB]"
              >
                <img src={project_icon} alt="Project Icon" />
              </div>
              <p>TA’s and presenters can be moved to the front of the class.</p>
            </li>
            <li className="flex items-center gap-8">
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="flex items-center justify-center min-w-[3.75rem] w-[3.75rem] h-[3.75rem] rounded-full bg-[#FBFBFB]"
              >
                <img src={users_icon} alt="Users Icon" />
              </div>
              <p>
                Teachers can easily see all students and class data at one time.
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src={certificate}
            alt="certificate"
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
