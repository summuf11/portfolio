import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import img from "./Group 3442.png"
import aboutimg from "./Frame 3578.jpg"
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.jpg"; 

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="px-6 lg:px-24 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-14">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-xl lg:text-2xl font-poppins font-semibold text-black tracking-wide mb-2">
                Hi I am
              </p>
              <p className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                Summaiya Fatima
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider">
                UI & UX
              </h1>
              <h1 className="text-6xl lg:text-8xl font-poppins font-bold text-portfolio-dark leading-tight tracking-wider text-right">
                Designer
              </h1>
            </div>

            <p className="text-lg lg:text-xl font-poppins text-black tracking-wide max-w-xl text-justify">
              Designing intuitive and impactful user experiences with a focus on
              simplicity and function
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0"  >
            <img
              src={img}
              alt="Summaiya Fatima"
              className="w-80 lg:w-96 h-80 lg:h-96 object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 lg:px-24 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-15">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src={aboutimg}
              alt="About Summaiya"
              className="w-80 lg:w-96 h-80 lg:h-96 object-cover rounded-lg border border-black"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            <h2 className="text-4xl lg:text-6xl font-poppins font-semibold text-portfolio-dark tracking-wide">
              About Me
            </h2>
            <p className="text-lg lg:text-xl font-poppins text-portfolio-gray leading-normal tracking-wide">
              Hi, I'm Summaiya Fatima — a UX/UI Designer with a background in
              Computer Science and a deep interest in creating intuitive,
              user-centered digital experiences. With a strong eye for detail
              and a love for clean design, I enjoy transforming complex ideas
              into simple, meaningful interfaces. My approach combines
              creativity with structured thinking, allowing me to design
              solutions that are not only visually appealing but also functional
              and accessible. I'm always eager to learn, explore new design
              trends, and craft experiences that truly make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="px-6 lg:px-44 py-16 lg:py-20">
        <div className="space-y-16 lg:space-y-32">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-6xl font-poppins font-semibold text-portfolio-dark text-center tracking-wide">
            My Work
          </h2>

          {/* Project 1 - Banavo.ai */}
          <div className="space-y-8 lg:space-y-10">
            <div className="flex justify-center">
              <img
                src={image1}
                alt="Banavo.ai Marketing Assist"
                className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                Banavo.ai-Marketing Assist
              </h3>
              <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                An AI-powered marketing assistant designed to help mid-cap
                e-commerce teams optimize strategy, track performance, and drive
                smarter campaigns with data-driven insights — all in one
                intuitive dashboard.
              </p>
              <Link
                to="/project/banavo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-portfolio-primary rounded-xl text-lg lg:text-xl font-poppins text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors tracking-wide"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Project 2 - ChemFlow Platform */}
          <div className="space-y-8 lg:space-y-10">
            <div className="flex justify-center">
              <img
                src={image2}
                alt="ChemFlow Platform"
                className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                ChemFlow – AI-Driven Drug Discovery Platform
              </h3>
              <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                ChemFlow is an AI-powered, knowledge-based drug discovery
                platform that aims to reduce the cost, time, and failure rate in
                pharmaceutical research. Through intuitive design, advanced
                predictive tools, and seamless data visualization, I helped
                build a user-centric experience that empowers scientists to make
                breakthrough discoveries faster.
              </p>
              <Link
                to="/project/chemflow"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-portfolio-primary rounded-xl text-lg lg:text-xl font-poppins text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors tracking-wide"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Project 3 - ChemFlow Landing */}
          <div className="space-y-8 lg:space-y-10">
            <div className="flex justify-center">
              <img
                src={image3}
                alt="ChemFlow Landing Page"
                className="w-full max-w-4xl h-auto rounded border-2 border-portfolio-primary"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-portfolio-primary tracking-wide">
                ChemFlow – AI-Driven Drug Discovery Platform(Landing Page)
              </h3>
              <p className="text-lg lg:text-xl font-poppins text-portfolio-gray text-justify tracking-wide">
                ChemFlow is an AI-powered drug discovery platform designed to
                revolutionize how researchers explore, predict, and optimize
                drug candidates. Built for biotech professionals and scientists,
                it offers intelligent tools from molecule editing to predictive
                modeling — all in one intuitive interface.
              </p>
              <Link
                to="/project/chemflow-landing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-portfolio-primary rounded-xl text-lg lg:text-xl font-poppins text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors tracking-wide"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="px-6 lg:px-44 py-16 lg:py-20">
  <div className="flex justify-center">
    <div className="bg-portfolio-primary rounded-3xl p-8 lg:p-12 max-w-4xl w-full">
      <div className="text-center space-y-8">
        <h2 className="text-4xl lg:text-6xl font-poppins font-semibold text-white tracking-wide">
          Get In Touch
        </h2>
        <p className="text-base lg:text-lg font-poppins text-portfolio-light leading-relaxed max-w-2xl mx-auto">
          I'm very approachable and would love to speak to you. Feel free
          to call, send me an email. Follow me in social media or simply
          complete the enquiry form.
        </p>

        {/* Contact Info */}
    <div className="space-y-5">
  <div className="flex flex-col items-start space-y-5">
    {/* Email */}
    <div className="flex items-center gap-4  ml-10">
      <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
        <svg className="w-5 h-4 fill-white" viewBox="0 0 20 16">
          <path
            d="M16.0322 3.87148e-07C16.4707 -1.18844e-05 16.849 0.000133219 17.1621 0.0214848C17.4919 0.0439888 17.8225 0.093512 18.1484 0.228516C18.8832 0.532989 19.467 1.11679 19.7715 1.85156C19.9065 2.17749 19.956 2.50806 19.9785 2.83789C19.9999 3.15104 20 3.52935 20 3.96777V12.0322C20 12.4707 19.9999 12.849 19.9785 13.1621C19.956 13.4919 19.9065 13.8225 19.7715 14.1484C19.467 14.8832 18.8832 15.467 18.1484 15.7715C17.8225 15.9065 17.4919 15.956 17.1621 15.9785C16.849 15.9999 16.4707 16 16.0322 16H3.96777C3.52935 16 3.15104 15.9999 2.83789 15.9785C2.50806 15.956 2.17749 15.9065 1.85156 15.7715C1.11679 15.467 0.532989 14.8832 0.228516 14.1484C0.093512 13.8225 0.0439888 13.4919 0.0214848 13.1621C0.000133155 12.849 -1.18845e-05 12.4707 3.87144e-07 12.0322V3.96777C-1.18844e-05 3.52935 0.000133068 3.15104 0.0214848 2.83789C0.0439888 2.50806 0.093512 2.17749 0.228516 1.85156C0.532989 1.11679 1.11679 0.532989 1.85156 0.228516C2.17749 0.093512 2.50806 0.0439888 2.83789 0.0214848C3.15104 0.000133064 3.52935 -1.18844e-05 3.96777 3.87148e-07H16.0322ZM17.6826 2.27832C17.3418 1.88881 16.7657 1.82699 16.3525 2.12012L16.2715 2.18359L10.6592 7.0957C10.2823 7.42526 9.71874 7.42513 9.3418 7.0957L3.72852 2.18359L3.64844 2.12012C3.23524 1.82677 2.65828 1.88873 2.31738 2.27832C1.977 2.66796 1.99234 3.24777 2.33789 3.61816L2.41211 3.68945L8.02441 8.60059C9.15535 9.58994 10.8446 9.58983 11.9756 8.60059L17.5889 3.68945C18.0044 3.32587 18.046 2.69396 17.6826 2.27832Z"
          />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-xl lg:text-2xl font-poppins font-semibold text-white tracking-wide">
          Email
        </p>
        <p className="text-sm lg:text-base font-poppins text-portfolio-light tracking-wide">
          summaiyafatima854@gmail.com
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4  ml-10">
      <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.61a1 1 0 01-.91 1A17.92 17.92 0 013 5.91 1 1 0 014 5h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.2 2.2z" />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-xl lg:text-2xl font-poppins font-semibold text-white tracking-wide">
          Phone
        </p>
        <p className="text-sm lg:text-base font-poppins text-portfolio-light tracking-wide">
          9880473852
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-portfolio-primary py-6">
        <div className="px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-white text-lg lg:text-xl tracking-wide text-center lg:text-left">
            © 2023 Summaiya All Rights Reserved, Inc.
          </p>

          <div className="flex items-center gap-8">
            {/* Instagram */}
            <div className="w-15 h-15 bg-portfolio-primary bg-opacity-70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 20 20">
                <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32812 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64062 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39062 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39062 3.63281 2.60937 3.29688 2.95703 2.94922C3.30859 2.59766 3.64062 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32812 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45312 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523437 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523437 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2187 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" />
                <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" />
                <path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" />
              </svg>
            </div>

            {/* Email */}
            <div className="w-15 h-15 bg-portfolio-primary bg-opacity-70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-5 h-4 fill-white" viewBox="0 0 20 16">
                <path
                  d="M16.0322 3.87148e-07C16.4707 -1.18844e-05 16.849 0.000133219 17.1621 0.0214848C17.4919 0.0439888 17.8225 0.093512 18.1484 0.228516C18.8832 0.532989 19.467 1.11679 19.7715 1.85156C19.9065 2.17749 19.956 2.50806 19.9785 2.83789C19.9999 3.15104 20 3.52935 20 3.96777V12.0322C20 12.4707 19.9999 12.849 19.9785 13.1621C19.956 13.4919 19.9065 13.8225 19.7715 14.1484C19.467 14.8832 18.8832 15.467 18.1484 15.7715C17.8225 15.9065 17.4919 15.956 17.1621 15.9785C16.849 15.9999 16.4707 16 16.0322 16H3.96777C3.52935 16 3.15104 15.9999 2.83789 15.9785C2.50806 15.956 2.17749 15.9065 1.85156 15.7715C1.11679 15.467 0.532989 14.8832 0.228516 14.1484C0.093512 13.8225 0.0439888 13.4919 0.0214848 13.1621C0.000133155 12.849 -1.18845e-05 12.4707 3.87144e-07 12.0322V3.96777C-1.18844e-05 3.52935 0.000133068 3.15104 0.0214848 2.83789C0.0439888 2.50806 0.093512 2.17749 0.228516 1.85156C0.532989 1.11679 1.11679 0.532989 1.85156 0.228516C2.17749 0.093512 2.50806 0.0439888 2.83789 0.0214848C3.15104 0.000133064 3.52935 -1.18844e-05 3.96777 3.87148e-07H16.0322ZM17.6826 2.27832C17.3418 1.88881 16.7657 1.82699 16.3525 2.12012L16.2715 2.18359L10.6592 7.0957C10.2823 7.42526 9.71874 7.42513 9.3418 7.0957L3.72852 2.18359L3.64844 2.12012C3.23524 1.82677 2.65828 1.88873 2.31738 2.27832C1.977 2.66796 1.99234 3.24777 2.33789 3.61816L2.41211 3.68945L8.02441 8.60059C9.15535 9.58994 10.8446 9.58983 11.9756 8.60059L17.5889 3.68945C18.0044 3.32587 18.046 2.69396 17.6826 2.27832Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
