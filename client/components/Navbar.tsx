import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 lg:px-24 py-4 bg-portfolio-background">
      <Link
        to="/"
        className="text-2xl lg:text-5xl font-montserrat font-bold text-portfolio-dark"
      >
        SUMMAIYA
      </Link>

      <div className="flex items-center gap-3">
        <button
          onClick={() => scrollToSection("hero")}
          className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-primary hover:text-portfolio-primary"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-dark hover:text-portfolio-primary"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-dark hover:text-portfolio-primary"
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-4 py-2 text-lg lg:text-xl font-poppins tracking-wide transition-colors text-portfolio-dark hover:text-portfolio-primary"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
