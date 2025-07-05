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
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider lg:text-right">
                Designer
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-poppins text-black tracking-wide max-w-xl mx-auto lg:mx-0 text-justify">
              Designing intuitive and impactful user experiences with a focus on simplicity and function
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-80 lg:w-96">
            <img
              src={img}
              alt="Summaiya Fatima"
              className="w-full h-auto object-contain rounded-lg"
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
                  <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-4 fill-white" viewBox="0 0 20 16">
                      <path d="..." />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-lg sm:text-xl font-semibold text-white">Email</p>
                    <p className="text-sm sm:text-base text-portfolio-light">summaiyafatima854@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 justify-center sm:justify-start">
                  <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="..." />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-lg sm:text-xl font-semibold text-white">Phone</p>
                    <p className="text-sm sm:text-base text-portfolio-light">9880473852</p>
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
            <div className="w-12 h-12 bg-portfolio-primary bg-opacity-70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-5 h-4 fill-white" viewBox="0 0 20 16">
                <path d="..." fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
