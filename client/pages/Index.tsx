import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import img from "./Group 3442.png";
import aboutimg from "./Frame 3578.jpg";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="px-6 sm:px-10 lg:px-24 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div>
              <p className="text-lg sm:text-xl lg:text-2xl font-poppins font-semibold text-black tracking-wide">
                Hi I am
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                Summaiya Fatima
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider">
                UI & UX
              </h1>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider ml-[45px] sm:ml-[65px] lg:ml-[105px]">
  Designer
</h1>

            </div>

            <p className="text-base sm:text-lg lg:text-xl font-poppins text-black tracking-wide max-w-xl mx-auto lg:mx-0 text-justify">
              Designing intuitive and impactful user experiences with a focus on simplicity and function
            </p>
          </div>

          {/* Right Image */}
        <div className="w-80 h-[350px] lg:w-[500px] lg:h-[500px]">
  <img
    src={img}
    alt="Summaiya Fatima"
    className="w-full h-full object-contain rounded-lg"
  />
</div>

        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 sm:px-10 lg:px-24 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full sm:w-80 lg:w-96">
            <img
              src={aboutimg}
              alt="About Summaiya"
              className="w-full h-80 sm:h-96 object-cover rounded-lg border border-black"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              About Me
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-poppins text-portfolio-gray tracking-wide leading-relaxed text-justify">
              Hi, I'm Summaiya Fatima — a UX/UI Designer with a background in Computer Science and a deep interest in creating intuitive, user-centered digital experiences. With a strong eye for detail and a love for clean design, I enjoy transforming complex ideas into simple, meaningful interfaces. My approach combines creativity with structured thinking, allowing me to design solutions that are not only visually appealing but also functional and accessible. I'm always eager to learn, explore new design trends, and craft experiences that truly make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="px-6 sm:px-10 lg:px-44 py-16 lg:py-20">
        <div className="space-y-16 lg:space-y-32">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-poppins font-semibold text-portfolio-dark text-center tracking-wide">
            My Work
          </h2>

          {[{
            title: "Banavo.ai-Marketing Assist",
            description: "An AI-powered marketing assistant designed to help mid-cap e-commerce teams optimize strategy, track performance, and drive smarter campaigns with data-driven insights — all in one intuitive dashboard.",
            image: image1,
            link: "/project/banavo"
          }, {
            title: "ChemFlow – AI-Driven Drug Discovery Platform",
            description: "ChemFlow is an AI-powered, knowledge-based drug discovery platform that aims to reduce the cost, time, and failure rate in pharmaceutical research. Through intuitive design, advanced predictive tools, and seamless data visualization, I helped build a user-centric experience that empowers scientists to make breakthrough discoveries faster.",
            image: image2,
            link: "/project/chemflow"
          }, {
            title: "ChemFlow – AI-Driven Drug Discovery Platform (Landing Page)",
            description: "ChemFlow is an AI-powered drug discovery platform designed to revolutionize how researchers explore, predict, and optimize drug candidates. Built for biotech professionals and scientists, it offers intelligent tools from molecule editing to predictive modeling — all in one intuitive interface.",
            image: image3,
            link: "/project/chemflow-landing"
          }].map(({ title, description, image, link }, index) => (
            <div key={index} className="space-y-8 lg:space-y-10">
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
                />
              </div>
              <div className="max-w-4xl mx-auto space-y-6 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                  {title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                  {description}
                </p>
                <Link
                  to={link}
                  className="inline-block px-6 py-3 text-base sm:text-lg border-2 border-portfolio-primary rounded-xl hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 sm:px-10 lg:px-44 py-16 lg:py-20">
        <div className="flex justify-center">
          <div className="bg-portfolio-primary rounded-3xl p-8 lg:p-12 max-w-4xl w-full">
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-poppins font-semibold text-white tracking-wide">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-portfolio-light max-w-2xl mx-auto">
                I'm very approachable and would love to speak to you. Feel free to call, send me an email. Follow me on social media or simply complete the enquiry form.
              </p>

         <div className="space-y-6">
  {/* Email */}
  <div className="flex items-start gap-4 justify-center sm:justify-start">
    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
      <svg
        className="w-5 h-5 stroke-white"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v0 12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm0 0 8 7 8-7" />
      </svg>
    </div>
    <div className="text-left">
      <p className="text-lg sm:text-xl font-semibold text-white">Email</p>
      <p className="text-sm sm:text-base text-white">summaiyafatima854@gmail.com</p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4 justify-center sm:justify-start">
    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
      <svg
        className="w-5 h-5 stroke-white"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.73 19.73 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.35 12.35 0 0 0 .57 2.57 2 2 0 0 1-.45 2.11L9 10c1.5 2.6 3.4 4.5 6 6l.6-.6a2 2 0 0 1 2.11-.45 12.35 12.35 0 0 0 2.57.57A2 2 0 0 1 22 16.92Z" />
      </svg>
    </div>
    <div className="text-left">
      <p className="text-lg sm:text-xl font-semibold text-white">Phone</p>
      <p className="text-sm sm:text-base text-white">9880473852</p>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-portfolio-primary py-6">
  <div className="px-6 lg:px-24 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
    <p className="text-white text-sm sm:text-base lg:text-lg font-poppins">
      © 2023 Summaiya All Rights Reserved, Inc.
    </p>

    <div className="flex items-center gap-6">
      {/* Instagram Icon */}
      <a
        href="https://instagram.com/summuf_11"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex items-center justify-center border border-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      {/* Email Icon */}
      <a
        href="mailto:summaiyafatima854@gmail.com"
        className="w-10 h-10 rounded-full flex items-center justify-center border border-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4z" fill="none"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}
