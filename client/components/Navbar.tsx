import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projectPages = [
    "/project/banavo",
    "/project/chemflow",
    "/project/chemflow-landing",
  ];
  const isMinimalNavbar = projectPages.includes(currentPath);

  return (
    <nav className="flex justify-between items-center px-6 lg:px-24 py-4 bg-portfolio-background">
      <Link
        to="/"
        className="text-2xl lg:text-5xl font-montserrat font-bold text-portfolio-dark"
      >
        SUMMAIYA
      </Link>

      {/* Navigation buttons hidden on small screens, shown on lg and above */}
      <div className="hidden lg:flex items-center gap-3">
        {isMinimalNavbar ? (
          <Link
            to="/"
            className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-black"
          >
            Home
          </Link>
        ) : (
          <button
            onClick={() => scrollToSection("hero")}
            className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-primary hover:text-portfolio-primary"
          >
            Home
          </button>
        )}

        {!isMinimalNavbar && (
          <button
            onClick={() => scrollToSection("about")}
            className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-dark hover:text-portfolio-primary"
          >
            About Me
          </button>
        )}

        <button
          onClick={() => scrollToSection("work")}
          className={`px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors ${
            isMinimalNavbar ? "text-[#A0522D]" : "text-portfolio-dark hover:text-portfolio-primary"
          }`}
        >
          Work
        </button>

        {!isMinimalNavbar && (
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-dark hover:text-portfolio-primary"
          >
            Contact
          </button>
        )}
      </div>
    </nav>
  );
}
