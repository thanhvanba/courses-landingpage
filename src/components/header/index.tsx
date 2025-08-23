import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { MdMenu } from "react-icons/md";
import exploreMore from "../../assets/images/explore-more.png";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menus = [
    { key: "home", label: "Home", href: "#home" },
    { key: "courses", label: "Courses", href: "#courses" },
    { key: "category", label: "Category", href: "#category" },
    { key: "benefits", label: "Benefits", href: "#benefits" },
    { key: "training", label: "Training", href: "#training" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-[#d2e6e4] backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center px-4 md:px-8 z-20 py-4">
          <div className="block lg:hidden h-8 w-8">
            <img src={exploreMore} alt="" />
          </div>

          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 md:h-10" />

          {/* Desktop menu */}
          <nav className="hidden lg:flex flex-grow justify-center !z-20">
            <ul className="flex items-center space-x-12">
              {menus.map((menu) => (
                <li key={menu.key}>
                  <a
                    href={menu.href}
                    onClick={() => setActiveMenu(menu.key)}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      activeMenu === menu.key
                        ? "text-(--secondary-color)"
                        : "text-gray-700 hover:text-(--secondary-color)"
                    }`}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons desktop */}
          <div className="hidden lg:flex space-x-4">
            <button className="py-2 px-6 text-(--primary-color) bg-white rounded-xl">
              LOG IN
            </button>
            <button className="py-3 px-6 bg-(--primary-color) text-white rounded-xl">
              SIGN UP
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <HiXMark size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-lg rounded-b-2xl px-6 py-4">
          <ul className="space-y-4">
            {menus.map((menu) => (
              <li key={menu.key}>
                <a
                  href={menu.href}
                  onClick={() => {
                    setActiveMenu(menu.key);
                    setOpen(false);
                  }}
                  className={`block text-base font-medium ${
                    activeMenu === menu.key
                      ? "text-(--secondary-color)"
                      : "text-gray-700 hover:text-(--secondary-colors)"
                  }`}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 mt-6">
            <button className="py-2 px-6 text-(--primary-color) bg-white border border-(--primary-color) rounded-xl">
              LOG IN
            </button>
            <button className="py-3 px-6 bg-(--primary-color) text-white rounded-xl">
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
